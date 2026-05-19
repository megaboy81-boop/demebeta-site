import { copyFileSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceRoot = process.env.DEMEBETA_SOURCE_ROOT || '/Users/megaboy/Desktop/드메베타';
const hatSourceDir = join(sourceRoot, 'DEMEBETA_hats');
const heroSourceDir = join(sourceRoot, 'hero_images');
const publicRoot = join(repoRoot, 'public/assets/demebeta');
const hatDestDir = join(publicRoot, 'hats');
const heroDestDir = join(publicRoot, 'hero');
const outputPath = join(repoRoot, 'src/data/siteAssets.ts');

const imageExts = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const collator = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

function imageFiles(dir) {
  return readdirSync(dir)
    .filter((file) => imageExts.has(extname(file).toLowerCase()))
    .sort((a, b) => collator.compare(a, b));
}

function jpegSize(buffer) {
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    while (buffer[offset] === 0xff) offset += 1;

    const marker = buffer[offset];
    offset += 1;

    if (marker === 0xd8 || marker === 0xd9) continue;
    if (marker >= 0xd0 && marker <= 0xd7) continue;
    if (offset + 2 > buffer.length) break;

    const segmentLength = buffer.readUInt16BE(offset);
    const isStartOfFrame =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);

    if (isStartOfFrame && offset + 7 < buffer.length) {
      return {
        width: buffer.readUInt16BE(offset + 5),
        height: buffer.readUInt16BE(offset + 3),
      };
    }

    offset += segmentLength;
  }

  return { width: 0, height: 0 };
}

function webpSize(buffer) {
  if (
    buffer.length < 30 ||
    buffer.toString('ascii', 0, 4) !== 'RIFF' ||
    buffer.toString('ascii', 8, 12) !== 'WEBP'
  ) {
    return { width: 0, height: 0 };
  }

  const chunk = buffer.toString('ascii', 12, 16);

  if (chunk === 'VP8X') {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3),
    };
  }

  if (chunk === 'VP8L' && buffer.length >= 25) {
    const b0 = buffer[21];
    const b1 = buffer[22];
    const b2 = buffer[23];
    const b3 = buffer[24];
    return {
      width: 1 + (((b1 & 0x3f) << 8) | b0),
      height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
    };
  }

  if (chunk === 'VP8 ' && buffer.length >= 30) {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  return { width: 0, height: 0 };
}

function imageSize(path) {
  const buffer = readFileSync(path);
  if (buffer.length >= 24 && buffer.toString('ascii', 1, 4) === 'PNG') {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (buffer.length >= 4 && buffer[0] === 0xff && buffer[1] === 0xd8) {
    return jpegSize(buffer);
  }

  const webp = webpSize(buffer);
  if (webp.width && webp.height) return webp;

  return { width: 0, height: 0 };
}

function slug(value) {
  return value
    .normalize('NFKD')
    .replace(/[^\w.-]+/g, '-')
    .replace(/_+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function pad(index) {
  return String(index).padStart(3, '0');
}

function numberedDrop(number) {
  if (number <= 10) return 'core-drop';
  if (number <= 30) return 'archive-drop';
  if (number <= 50) return 'material-tests';
  if (number <= 69) return 'designer-studies';
  return 'experimental-forms';
}

function groupForHat(file, index) {
  const numbered = file.match(/^demebeta_hat_(\d{3})/);
  if (numbered) {
    const sequence = Number(numbered[1]);
    if (sequence <= 4) {
      return {
        id: `BOARD-${numbered[1]}`,
        slug: `source-board-${numbered[1]}`,
        group: 'source-boards',
        drop: 'source-boards',
        label: `Source Board ${numbered[1]}`,
        sequence,
      };
    }

    if (sequence === 23) {
      return {
        id: `HIDDEN-${numbered[1]}`,
        slug: `hidden-catalog-${numbered[1]}`,
        group: 'hidden-catalog',
        drop: 'hidden-catalog',
        label: `Hidden Catalog ${numbered[1]}`,
        sequence,
      };
    }

    return {
      id: `DMB-${numbered[1]}`,
      slug: `demebeta-hat-${numbered[1]}`,
      group: 'main-collection',
      drop: numberedDrop(sequence),
      label: `Cap ${numbered[1]}`,
      sequence,
    };
  }

  if (file.startsWith('A_premium_')) {
    return {
      id: `REF-A-${pad(index + 1)}`,
      slug: `reference-a-premium-${pad(index + 1)}`,
      group: 'studio-references',
      drop: 'clean-studio',
      label: `Studio Reference ${pad(index + 1)}`,
      sequence: index + 1,
    };
  }

  if (file.startsWith('Professional_product_photography_of_a_premium_6-pa')) {
    return {
      id: `REF-6P-${pad(index + 1)}`,
      slug: `reference-six-panel-${pad(index + 1)}`,
      group: 'studio-references',
      drop: 'six-panel-studies',
      label: `Six Panel Study ${pad(index + 1)}`,
      sequence: index + 1,
    };
  }

  if (file.startsWith('Professional_product_photography_of_a_premium_base')) {
    return {
      id: `REF-BC-${pad(index + 1)}`,
      slug: `reference-baseball-cap-${pad(index + 1)}`,
      group: 'studio-references',
      drop: 'baseball-cap-studies',
      label: `Baseball Cap Study ${pad(index + 1)}`,
      sequence: index + 1,
    };
  }

  return {
    id: `IMP-${pad(index + 1)}`,
    slug: `loose-import-${pad(index + 1)}-${slug(file.replace(extname(file), ''))}`,
    group: 'imports',
    drop: 'loose-imports',
    label: `Loose Import ${pad(index + 1)}`,
    sequence: index + 1,
  };
}

function copyImage(sourceDir, destDir, file, destName) {
  mkdirSync(destDir, { recursive: true });
  const sourcePath = join(sourceDir, file);
  const destPath = join(destDir, destName);
  copyFileSync(sourcePath, destPath);
  return destPath;
}

const hatFiles = imageFiles(hatSourceDir);
const groupPriority = {
  'main-collection': 1,
  'studio-references': 2,
  imports: 3,
  'source-boards': 9,
  'hidden-catalog': 10,
};

rmSync(hatDestDir, { recursive: true, force: true });
rmSync(heroDestDir, { recursive: true, force: true });

const hats = hatFiles.map((file, index) => {
  const meta = groupForHat(file, index);
  const ext = extname(file).toLowerCase();
  const destName = `${meta.slug}${ext}`;
  const destPath = copyImage(hatSourceDir, hatDestDir, file, destName);
  const { width, height } = imageSize(destPath);

  return {
    ...meta,
    type: 'hat',
    originalName: file,
    src: `/assets/demebeta/hats/${destName}`,
    width,
    height,
    aspect: width && height ? Number((width / height).toFixed(4)) : 1,
    catalogVisible: !['source-boards', 'hidden-catalog'].includes(meta.group),
  };
}).sort((a, b) => {
  const groupDiff = (groupPriority[a.group] ?? 99) - (groupPriority[b.group] ?? 99);
  return groupDiff || a.sequence - b.sequence || collator.compare(a.id, b.id);
});

const heroOrder = [
  'image223.png',
  'dfdimage.png',
  'image2.png',
  'ㅇㄴㄹㄹ.png',
  'm1_individual.png',
  'm2_individual.png',
  'm3_individual.png',
  'm4_individual.png',
  'm5_individual.png',
];

const heroFiles = imageFiles(heroSourceDir).sort((a, b) => {
  const ai = heroOrder.indexOf(a);
  const bi = heroOrder.indexOf(b);
  return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi) || collator.compare(a, b);
});

const heroes = heroFiles.map((file, index) => {
  const ext = extname(file).toLowerCase();
  const cleanName = slug(file.replace(ext, '')) || `hero-${pad(index + 1)}`;
  const destName = `${pad(index + 1)}-${cleanName}${ext}`;
  const destPath = copyImage(heroSourceDir, heroDestDir, file, destName);
  const { width, height } = imageSize(destPath);

  return {
    id: `HERO-${pad(index + 1)}`,
    type: 'hero',
    label:
      index === 0
        ? 'Seongsu Alley Campaign'
        : file.startsWith('m')
          ? `Individual Campaign ${file.match(/\d/)?.[0] ?? index + 1}`
          : `Campaign Image ${pad(index + 1)}`,
    originalName: file,
    src: `/assets/demebeta/hero/${destName}`,
    width,
    height,
    aspect: width && height ? Number((width / height).toFixed(4)) : 1,
  };
});

const groupDefinitions = [
  {
    id: 'main-collection',
    label: 'Core Collection',
    description: 'Single-cap product images selected for the public DEMEBETA catalog. Composite boards stay out of this page.',
  },
  {
    id: 'studio-references',
    label: 'Design Studies',
    description: 'Supporting product studies used to shape the brand system and future cap production.',
  },
  {
    id: 'imports',
    label: 'Loose Imports',
    description: 'Additional single-cap imports kept separate from the core collection.',
  },
];

const dropDefinitions = [
  { id: 'core-drop', label: 'Core Drop' },
  { id: 'archive-drop', label: 'Archive Drop' },
  { id: 'material-tests', label: 'Material Tests' },
  { id: 'designer-studies', label: 'Designer Studies' },
  { id: 'experimental-forms', label: 'Experimental Forms' },
  { id: 'clean-studio', label: 'Clean Studio' },
  { id: 'six-panel-studies', label: 'Six Panel Studies' },
  { id: 'baseball-cap-studies', label: 'Baseball Cap Studies' },
  { id: 'loose-imports', label: 'Loose Imports' },
  { id: 'source-boards', label: 'Source Boards' },
  { id: 'hidden-catalog', label: 'Hidden Catalog' },
];

const ts = `export interface SiteImage {
  id: string;
  type: 'hat' | 'hero';
  label: string;
  originalName: string;
  src: string;
  width: number;
  height: number;
  aspect: number;
}

export interface HatImage extends SiteImage {
  type: 'hat';
  slug: string;
  group: string;
  drop: string;
  sequence: number;
  catalogVisible: boolean;
}

export interface HeroImage extends SiteImage {
  type: 'hero';
}

export const heroImages: HeroImage[] = ${JSON.stringify(heroes, null, 2)};

export const hatImages: HatImage[] = ${JSON.stringify(hats, null, 2)};

export const catalogHatImages = hatImages.filter((image) => image.catalogVisible);

export const hatImageGroups = ${JSON.stringify(groupDefinitions, null, 2)};

export const hatImageDrops = ${JSON.stringify(dropDefinitions, null, 2)};

export const featuredHatImages = catalogHatImages.filter((image) =>
  ['DMB-005', 'DMB-006', 'DMB-010', 'DMB-021', 'DMB-050', 'DMB-081'].includes(image.id),
);
`;

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ts);

console.log(`Synced ${hats.length} hat images and ${heroes.length} hero images`);
console.log(outputPath);
