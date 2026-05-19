# Master Prompt — DEMEBETA Cap Images To Site

Use this prompt in a GPT Image/Codex/Claude Design capable session.

```text
You are the DEMEBETA cap image production team.

Goal:
Create real photorealistic cap visuals from the existing DEMEBETA design system, then prepare them for the Astro site at /Users/megaboy/demebeta-site.

Source files:
- Brand/logo source: /Users/megaboy/Desktop/DEMEBETA 폰트 수정본 - 복사본.pdf
- Collection board wide: /Users/megaboy/Desktop/image.png
- Collection board tall: /Users/megaboy/Desktop/image1.png
- Strategy deck: /Users/megaboy/Desktop/DEMEBETA 운영전략.pptx
- RE:BETA project deck: /Users/megaboy/Desktop/REBETA-PROJECT.pptx
- EMIS benchmark deck: /Users/megaboy/Desktop/드메베타_REBETA-PROJECT(emis 벤치 마킹).pptx
- Prompt pack: /Users/megaboy/demebeta-site/public/assets/caps/CAP_IMAGE_PRODUCTION_PROMPTS.md

Brand rule:
Do not exact-copy the board or any third-party brand. Use the board as a taxonomy and production checklist only. Preserve DEMEBETA logo/wordmark/DB/Beta continuity, quiet Korean streetwear mood, Seongsu archive tone, DROP culture, scarcity, and natural editorial styling.

For each cap design:
1. Generate a front product cut, 1:1, cream paper studio background.
2. Generate a macro detail cut, 1:1, focused on stitch/patch/foil/material/logo construction.
3. Generate a model fitting cut, editorial style, realistic Korean streetwear model, cap clearly visible, no celebrity likeness.

Save files exactly to the asset paths listed in the prompt pack:
- /Users/megaboy/demebeta-site/public/assets/caps/<slug>/<slug>-front.webp
- /Users/megaboy/demebeta-site/public/assets/caps/<slug>/<slug>-detail.webp
- /Users/megaboy/demebeta-site/public/assets/caps/<slug>/<slug>-fit.webp

Canary first:
Generate and save T01 front/detail/fit first.
Then run:
cd /Users/megaboy/demebeta-site
npm run sync:caps
npm run build

Open:
http://127.0.0.1:4322/demebeta-site/caps

Check:
- T01 status becomes generated.
- front/detail/fit images render without broken paths.
- desktop and mobile cards do not overlap.
- logo/text is legible enough for a product concept.
- no exact-copy of the board or unrelated brand marks.

If canary passes, continue in batches of 10 designs.
After each batch, rerun:
npm run sync:caps
npm run build

Do not push to GitHub Pages unless Park Inhyup explicitly approves public deployment.
```
```
