import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const defaultPromptRoot =
  '/Users/megaboy/메가디언볼트/사용자/97_결과물/2026-05-15/DEMEBETA_리브랜딩/02_이미지_프롬프트';
const promptRoot = process.env.DEMEBETA_PROMPT_ROOT || defaultPromptRoot;

const outputPath = join(repoRoot, 'src/data/capProduction.ts');
const promptPackPath = join(repoRoot, 'public/assets/caps/CAP_IMAGE_PRODUCTION_PROMPTS.md');

const sourceFiles = [
  {
    file: 'PROMPTS_TOP10_FINAL.md',
    section: 'Top 10 Bestsellers',
    family: 'T',
    parse: parseLabeledBlocks,
  },
  {
    file: 'PROMPTS_REMAINING_60.md',
    section: 'Archive Blocks',
    family: 'A',
    parse: parseInlineBlocks,
  },
  {
    file: 'PROMPTS_20_NEW_PHOTOREALISTIC.md',
    section: 'New 20 Styles',
    family: 'N',
    parse: parseLabeledBlocks,
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function clean(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function parseLabeledBlocks(markdown, meta) {
  const matches = [...markdown.matchAll(/^\[([A-Z]\d{2})\]\s*$/gm)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.length;
    const body = markdown.slice(start, end);
    const id = match[1];
    const name = body.match(/이름:\s*(.+)/)?.[1] ?? id;
    const prompt = body.match(/프롬프트:\s*([\s\S]*?)(?:\n금지사항:|\n금지:|\n---|\n##|$)/)?.[1] ?? '';
    const negative = body.match(/금지사항:\s*([\s\S]*?)(?:\n---|\n##|$)/)?.[1] ?? '';

    return makeItem({
      id,
      name,
      prompt,
      negative,
      section: meta.section,
      family: meta.family,
      sourceFile: meta.file,
    });
  });
}

function parseInlineBlocks(markdown, meta) {
  const lines = markdown.split('\n');
  let section = meta.section;
  const items = [];

  for (let i = 0; i < lines.length; i += 1) {
    const heading = lines[i].match(/^##\s+(.+)/);
    if (heading) {
      section = heading[1].replace(/개$/, '').trim();
      continue;
    }

    const match = lines[i].match(/^\[([A-Z]?\d{2})\]\s+(.+?)\s+—\s+(.+)/);
    if (!match) continue;

    const rawId = match[1];
    const family = rawId[0]?.match(/[A-Z]/) ? rawId[0] : 'B1';
    const id = rawId[0]?.match(/[A-Z]/) ? rawId : `B1-${rawId}`;
    const name = match[2];
    const prompt = match[3];
    const negative = lines[i + 1]?.match(/^금지:\s*(.+)/)?.[1] ?? '';

    items.push(
      makeItem({
        id,
        name,
        prompt,
        negative,
        section,
        family,
        sourceFile: meta.file,
      }),
    );
  }

  return items;
}

function makeItem({ id, name, prompt, negative, section, family, sourceFile }) {
  const slug = slugify(id);
  const cleanName = clean(name.replace(/⭐.*$/, '').replace(/\(.+?\)/g, '').replace(/—.+$/, ''));
  const frontPrompt = normalizePrompt(prompt);
  const assets = {
    front: `/assets/caps/${slug}/${slug}-front.webp`,
    detail: `/assets/caps/${slug}/${slug}-detail.webp`,
    fit: `/assets/caps/${slug}/${slug}-fit.webp`,
  };
  const status = Object.values(assets).every((asset) => existsSync(join(repoRoot, 'public', asset)))
    ? 'generated'
    : 'prompt_ready';

  return {
    id,
    slug,
    name: cleanName,
    family,
    section,
    sourceFile,
    status,
    assets,
    prompts: {
      front: frontPrompt,
      detail: makeDetailPrompt(cleanName, frontPrompt),
      fit: makeFitPrompt(cleanName, frontPrompt),
      negative: clean(negative),
    },
  };
}

function normalizePrompt(prompt) {
  return clean(prompt)
    .replace(/^Photorealistic studio product photograph/i, 'Photorealistic studio product photograph')
    .replace(/, no model\.?$/i, ', no model.');
}

function makeDetailPrompt(name, frontPrompt) {
  return clean(
    `Photorealistic macro detail product photograph for DEMEBETA cap design "${name}". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: ${frontPrompt} Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.`,
  );
}

function makeFitPrompt(name, frontPrompt) {
  return clean(
    `Photorealistic model fitting cut for DEMEBETA cap design "${name}". A Korean streetwear model wearing the exact cap design described here: ${frontPrompt} Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.`,
  );
}

const items = sourceFiles.flatMap((source) => {
  const markdown = readFileSync(join(promptRoot, source.file), 'utf8');
  return source.parse(markdown, source);
});

const ts = `export type CapAssetStatus = 'prompt_ready' | 'generated' | 'needs_regen';\n\nexport interface CapProductionItem {\n  id: string;\n  slug: string;\n  name: string;\n  family: string;\n  section: string;\n  sourceFile: string;\n  status: CapAssetStatus;\n  assets: {\n    front: string;\n    detail: string;\n    fit: string;\n  };\n  prompts: {\n    front: string;\n    detail: string;\n    fit: string;\n    negative: string;\n  };\n}\n\nexport const capProductionItems: CapProductionItem[] = ${JSON.stringify(items, null, 2)};\n\nexport const capProductionFamilies = [...new Set(capProductionItems.map((item) => item.family))];\nexport const capProductionSections = [...new Set(capProductionItems.map((item) => item.section))];\n`;

const promptPack = `# DEMEBETA Cap Image Production Prompts\n\nGenerated from Megaboy vault prompt sources.\n\n## Global Rule\n\n- Do not exact-copy the board layout or any third-party brand reference.\n- Preserve DEMEBETA logo/wordmark/DB/Beta brand continuity from the supplied source files.\n- Output three images per design when producing final assets: front product cut, macro detail cut, and model fitting cut.\n- Save as WebP using the paths listed under each item.\n- After each generated image, verify cap shape, logo/text legibility, material, and background cleanliness.\n\n${items
  .map(
    (item) => `## ${item.id} ${item.name}\n\nSource: ${item.sourceFile}\nSection: ${item.section}\n\nFront asset: ${item.assets.front}\nDetail asset: ${item.assets.detail}\nFit asset: ${item.assets.fit}\n\n### Front Product Cut\n${item.prompts.front}\n\n### Macro Detail Cut\n${item.prompts.detail}\n\n### Model Fitting Cut\n${item.prompts.fit}\n\n### Negative\n${item.prompts.negative || 'No illustration, cartoon, 3D render, distorted text, extra logos, watermark, or unrelated props.'}\n`,
  )
  .join('\n')}\n`;

mkdirSync(dirname(outputPath), { recursive: true });
mkdirSync(dirname(promptPackPath), { recursive: true });
writeFileSync(outputPath, ts);
writeFileSync(promptPackPath, promptPack);

console.log(`Generated ${items.length} cap production items`);
console.log(outputPath);
console.log(promptPackPath);
