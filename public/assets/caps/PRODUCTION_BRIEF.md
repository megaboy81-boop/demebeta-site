# DEMEBETA Cap Production Brief

## Goal

Turn the existing DEMEBETA cap design system into real usable image assets for the site.

Each cap design should receive three generated images:

- Front product cut: isolated cap product image for archive and collection grids.
- Macro detail cut: close-up of the logo, stitching, patch, material, or construction detail.
- Model fitting cut: editorial wearing image that shows how the cap feels in real life.

## Source Of Truth

- Logo source: `/Users/megaboy/Desktop/DEMEBETA 폰트 수정본 - 복사본.pdf`
- Design board wide: `/Users/megaboy/Desktop/image.png`
- Design board tall: `/Users/megaboy/Desktop/image1.png`
- Strategy deck: `/Users/megaboy/Desktop/DEMEBETA 운영전략.pptx`
- RE:BETA project deck: `/Users/megaboy/Desktop/REBETA-PROJECT.pptx`
- EMIS benchmark deck: `/Users/megaboy/Desktop/드메베타_REBETA-PROJECT(emis 벤치 마킹).pptx`
- Prompt sources: Megaboy vault DEMEBETA rebranding prompt files.

## Brand Direction

- Sell the mood before the product.
- Use Seoul/Seongsu archive tone, quiet streetwear, natural celebrity seeding mood, and limited DROP culture.
- Keep DEMEBETA logo and DB/Beta/wordmark continuity, but do not exact-copy the reference board or third-party brands.
- Favor atmosphere, restraint, materials, scarcity, and styling over loud explanation.

## Image Generation Rule

Do not exact-copy the collection board. Use it as a taxonomy and production checklist only.

Required shared look:

- Photorealistic product photography.
- Cream paper or neutral studio background for product/detail cuts.
- Kodak Gold expired film tone, soft overcast daylight, Seongsu quiet luxury mood for model fitting cuts.
- Clean cap silhouette, visible fabric texture, believable embroidery/patch/print/foil/metal/label construction.
- No unrelated brand logos, no watermark, no distorted text, no celebrity likeness.

## Output Contract

Generate WebP files at the asset paths listed in `CAP_IMAGE_PRODUCTION_PROMPTS.md`.

For each item:

- `front`: square product cut, 1:1.
- `detail`: square macro detail cut, 1:1.
- `fit`: portrait or square editorial model fitting cut.

After placing generated files, rerun:

```bash
node scripts/sync-cap-production.mjs
npm run build
```

Then inspect `/demebeta-site/caps` on desktop and mobile.
