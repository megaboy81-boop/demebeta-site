export type CapAssetStatus = 'prompt_ready' | 'generated' | 'needs_regen';

export interface CapProductionItem {
  id: string;
  slug: string;
  name: string;
  family: string;
  section: string;
  sourceFile: string;
  status: CapAssetStatus;
  assets: {
    front: string;
    detail: string;
    fit: string;
  };
  prompts: {
    front: string;
    detail: string;
    fit: string;
    negative: string;
  };
}

export const capProductionItems: CapProductionItem[] = [
  {
    "id": "T01",
    "slug": "t01",
    "name": "TONE_ON_TONE_ARCH",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t01/t01-front.webp",
      "detail": "/assets/caps/t01/t01-detail.webp",
      "fit": "/assets/caps/t01/t01-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of an off-white 6-panel soft crown dad cap, front view, curved brim, visible panel seams and top button, very subtle tone-on-tone glossy satin stitch embroidery reading \"DEMEBETA\" in arched layout across the front panel, the embroidery color is the same off-white as the cap but with satin sheen visible only through angled light reflection, premium quiet luxury Korean streetwear aesthetic, cream paper background, controlled side lighting creating a faint satin highlight band on the wordmark, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"TONE_ON_TONE_ARCH\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of an off-white 6-panel soft crown dad cap, front view, curved brim, visible panel seams and top button, very subtle tone-on-tone glossy satin stitch embroidery reading \"DEMEBETA\" in arched layout across the front panel, the embroidery color is the same off-white as the cap but with satin sheen visible only through angled light reflection, premium quiet luxury Korean streetwear aesthetic, cream paper background, controlled side lighting creating a faint satin highlight band on the wordmark, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"TONE_ON_TONE_ARCH\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of an off-white 6-panel soft crown dad cap, front view, curved brim, visible panel seams and top button, very subtle tone-on-tone glossy satin stitch embroidery reading \"DEMEBETA\" in arched layout across the front panel, the embroidery color is the same off-white as the cap but with satin sheen visible only through angled light reflection, premium quiet luxury Korean streetwear aesthetic, cream paper background, controlled side lighting creating a faint satin highlight band on the wordmark, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "illustration / cartoon / 3D render 금지. 자수 색이 대비색으로 변경 금지 (오프화이트 톤온톤 유지). 자수가 너무 선명하면 안 됨 (광반사로만 인식). 사람 등장 금지."
    }
  },
  {
    "id": "T02",
    "slug": "t02",
    "name": "SEONGSU_COORD",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t02/t02-front.webp",
      "detail": "/assets/caps/t02/t02-detail.webp",
      "fit": "/assets/caps/t02/t02-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a warm gray 5-panel camp cap, front view, low crown unstructured shape, flat brim, very subtle dark gray tone-on-tone flat embroidery reading \"37.5447°N 127.0558°E\" (Seongsu coordinates) centered on the front panel in a clean monospace font, small letter height approximately 8mm, tone-on-tone barely visible at first glance, premium Korean indie streetwear, cream paper background, soft natural shadow, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"SEONGSU_COORD\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a warm gray 5-panel camp cap, front view, low crown unstructured shape, flat brim, very subtle dark gray tone-on-tone flat embroidery reading \"37.5447°N 127.0558°E\" (Seongsu coordinates) centered on the front panel in a clean monospace font, small letter height approximately 8mm, tone-on-tone barely visible at first glance, premium Korean indie streetwear, cream paper background, soft natural shadow, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"SEONGSU_COORD\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a warm gray 5-panel camp cap, front view, low crown unstructured shape, flat brim, very subtle dark gray tone-on-tone flat embroidery reading \"37.5447°N 127.0558°E\" (Seongsu coordinates) centered on the front panel in a clean monospace font, small letter height approximately 8mm, tone-on-tone barely visible at first glance, premium Korean indie streetwear, cream paper background, soft natural shadow, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "좌표 숫자 변경 금지 (성수 좌표 정확). 자수 색을 대비색으로 변경 금지. 폰트가 serif면 안 됨 (monospace). 사람 등장 금지."
    }
  },
  {
    "id": "T03",
    "slug": "t03",
    "name": "LABEL_HIDDEN",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t03/t03-front.webp",
      "detail": "/assets/caps/t03/t03-detail.webp",
      "fit": "/assets/caps/t03/t03-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of an off-white 6-panel soft crown dad cap, three-quarter angle showing both the front panel and a glimpse of the cap interior, completely blank exterior with no embroidery or logo on any panel, only a single small woven inner label visible inside the cap reading \"DEME BETA / SEOUL SEONGSU / 2021\" in three lines of dark navy text on cream woven fabric, premium quiet luxury Korean streetwear aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"LABEL_HIDDEN\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of an off-white 6-panel soft crown dad cap, three-quarter angle showing both the front panel and a glimpse of the cap interior, completely blank exterior with no embroidery or logo on any panel, only a single small woven inner label visible inside the cap reading \"DEME BETA / SEOUL SEONGSU / 2021\" in three lines of dark navy text on cream woven fabric, premium quiet luxury Korean streetwear aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"LABEL_HIDDEN\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of an off-white 6-panel soft crown dad cap, three-quarter angle showing both the front panel and a glimpse of the cap interior, completely blank exterior with no embroidery or logo on any panel, only a single small woven inner label visible inside the cap reading \"DEME BETA / SEOUL SEONGSU / 2021\" in three lines of dark navy text on cream woven fabric, premium quiet luxury Korean streetwear aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "외부에 자수/로고/심볼 등장 금지 (완전 무로고 유지). 내부 라벨 텍스트 변경 금지. 사람 등장 금지."
    }
  },
  {
    "id": "T04",
    "slug": "t04",
    "name": "NATURE_WHITE_MONO",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t04/t04-front.webp",
      "detail": "/assets/caps/t04/t04-detail.webp",
      "fit": "/assets/caps/t04/t04-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a natural off-white 6-panel dad cap, front view, curved brim, visible panel seams and top button, ivory tone-on-tone flat embroidery reading \"DEMEBETA\" centered on the front panel, clean modern sans-serif wordmark with wide letter spacing, the ivory thread is slightly warmer than the cap base color but barely distinguishable, ALD-style minimalism, cream paper background, soft natural shadow, realistic cotton twill texture with visible weave, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"NATURE_WHITE_MONO\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a natural off-white 6-panel dad cap, front view, curved brim, visible panel seams and top button, ivory tone-on-tone flat embroidery reading \"DEMEBETA\" centered on the front panel, clean modern sans-serif wordmark with wide letter spacing, the ivory thread is slightly warmer than the cap base color but barely distinguishable, ALD-style minimalism, cream paper background, soft natural shadow, realistic cotton twill texture with visible weave, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"NATURE_WHITE_MONO\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a natural off-white 6-panel dad cap, front view, curved brim, visible panel seams and top button, ivory tone-on-tone flat embroidery reading \"DEMEBETA\" centered on the front panel, clean modern sans-serif wordmark with wide letter spacing, the ivory thread is slightly warmer than the cap base color but barely distinguishable, ALD-style minimalism, cream paper background, soft natural shadow, realistic cotton twill texture with visible weave, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "자수가 너무 선명하면 안 됨 (아이보리 톤온톤). 그라디언트 자수 금지. illustration / 3D 금지. 사람 등장 금지."
    }
  },
  {
    "id": "T05",
    "slug": "t05",
    "name": "CHARCOAL_PUFF_CHAIN",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t05/t05-front.webp",
      "detail": "/assets/caps/t05/t05-detail.webp",
      "fit": "/assets/caps/t05/t05-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a charcoal gray 6-panel dad cap, front view, curved brim, single capital letter \"D\" centered on the front panel using two embroidery techniques layered together — the inner fill is white 3D puff embroidery raised 3mm, surrounded by a thin outer chain stitch outline in the same white thread, dual embroidery technique visible with depth and shadow, premium minimal streetwear, cream studio background, sharp directional lighting emphasizing the 3D puff height, realistic cotton twill, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"CHARCOAL_PUFF_CHAIN\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a charcoal gray 6-panel dad cap, front view, curved brim, single capital letter \"D\" centered on the front panel using two embroidery techniques layered together — the inner fill is white 3D puff embroidery raised 3mm, surrounded by a thin outer chain stitch outline in the same white thread, dual embroidery technique visible with depth and shadow, premium minimal streetwear, cream studio background, sharp directional lighting emphasizing the 3D puff height, realistic cotton twill, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"CHARCOAL_PUFF_CHAIN\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a charcoal gray 6-panel dad cap, front view, curved brim, single capital letter \"D\" centered on the front panel using two embroidery techniques layered together — the inner fill is white 3D puff embroidery raised 3mm, surrounded by a thin outer chain stitch outline in the same white thread, dual embroidery technique visible with depth and shadow, premium minimal streetwear, cream studio background, sharp directional lighting emphasizing the 3D puff height, realistic cotton twill, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "단일 자수만 표현 금지 (퍼프+체인 이중 명확). D가 다른 글자로 변경 금지. 자수 색 변경 금지 (화이트 유지). 사람 등장 금지."
    }
  },
  {
    "id": "T06",
    "slug": "t06",
    "name": "STRAP_LOGO",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t06/t06-front.webp",
      "detail": "/assets/caps/t06/t06-detail.webp",
      "fit": "/assets/caps/t06/t06-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a matte black 6-panel dad cap, three-quarter back angle showing both the front panel and back strap, the front panel is completely blank with no logo, the back metal buckle adjustable strap features \"DEMEBETA\" text woven directly into the strap fabric in white thread, premium minimal streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture, the back strap clearly readable, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"STRAP_LOGO\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a matte black 6-panel dad cap, three-quarter back angle showing both the front panel and back strap, the front panel is completely blank with no logo, the back metal buckle adjustable strap features \"DEMEBETA\" text woven directly into the strap fabric in white thread, premium minimal streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture, the back strap clearly readable, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"STRAP_LOGO\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a matte black 6-panel dad cap, three-quarter back angle showing both the front panel and back strap, the front panel is completely blank with no logo, the back metal buckle adjustable strap features \"DEMEBETA\" text woven directly into the strap fabric in white thread, premium minimal streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture, the back strap clearly readable, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "전면 패널에 자수 추가 금지 (전면 완전 무로고). 백 스트랩에 텍스트 누락 금지. 모자가 정면 단독 컷이면 안 됨 (3/4 후면 각도). 사람 등장 금지."
    }
  },
  {
    "id": "T07",
    "slug": "t07",
    "name": "SERIAL_001",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t07/t07-front.webp",
      "detail": "/assets/caps/t07/t07-detail.webp",
      "fit": "/assets/caps/t07/t07-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a matte black 5-panel camp cap, front view, flat brim, small white flat embroidery on the front panel showing a banknote-style serial number pattern reading \"DB 0001847 2021\" in monospace currency font, additional small embroidery on the brim underside reading \"001/200\" indicating limited edition number, premium minimal streetwear collector aesthetic, cream studio background, soft natural light, realistic cotton twill, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"SERIAL_001\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a matte black 5-panel camp cap, front view, flat brim, small white flat embroidery on the front panel showing a banknote-style serial number pattern reading \"DB 0001847 2021\" in monospace currency font, additional small embroidery on the brim underside reading \"001/200\" indicating limited edition number, premium minimal streetwear collector aesthetic, cream studio background, soft natural light, realistic cotton twill, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"SERIAL_001\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a matte black 5-panel camp cap, front view, flat brim, small white flat embroidery on the front panel showing a banknote-style serial number pattern reading \"DB 0001847 2021\" in monospace currency font, additional small embroidery on the brim underside reading \"001/200\" indicating limited edition number, premium minimal streetwear collector aesthetic, cream studio background, soft natural light, realistic cotton twill, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "시리얼 숫자 변경 금지. 챙 안쪽 에디션 넘버 누락 금지. 자수 색을 메탈릭/골드로 변경 금지 (화이트 유지). 사람 등장 금지."
    }
  },
  {
    "id": "T08",
    "slug": "t08",
    "name": "D09 Patina Ghost",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t08/t08-front.webp",
      "detail": "/assets/caps/t08/t08-detail.webp",
      "fit": "/assets/caps/t08/t08-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of an artificially aged off-white 6-panel cotton dad cap, front view, curved brim, the cap has visible patina from wax treatment and light sanding giving a \"worn for 1-2 years\" appearance, slight yellowing on the brim edges, faint creasing on the crown, a single small copper rivet at the brim tip near the bill, no embroidery or visible logo on the front, premium handcrafted streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture with subtle wear patterns, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"D09 Patina Ghost\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of an artificially aged off-white 6-panel cotton dad cap, front view, curved brim, the cap has visible patina from wax treatment and light sanding giving a \"worn for 1-2 years\" appearance, slight yellowing on the brim edges, faint creasing on the crown, a single small copper rivet at the brim tip near the bill, no embroidery or visible logo on the front, premium handcrafted streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture with subtle wear patterns, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"D09 Patina Ghost\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of an artificially aged off-white 6-panel cotton dad cap, front view, curved brim, the cap has visible patina from wax treatment and light sanding giving a \"worn for 1-2 years\" appearance, slight yellowing on the brim edges, faint creasing on the crown, a single small copper rivet at the brim tip near the bill, no embroidery or visible logo on the front, premium handcrafted streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture with subtle wear patterns, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "새 제품처럼 깨끗하면 안 됨 (에이징 명확). 손상 과도하게 표현 금지 (자연스러운 1-2년 사용감). 구리 리벳 누락 금지. 사람 등장 금지."
    }
  },
  {
    "id": "T09",
    "slug": "t09",
    "name": "TONE_ARCH",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t09/t09-front.webp",
      "detail": "/assets/caps/t09/t09-detail.webp",
      "fit": "/assets/caps/t09/t09-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a cream off-white 6-panel dad cap, three-quarter angle showing the brim flipped slightly upward to reveal the brim underside, the cap exterior is completely blank with no logo, the brim underside has small black satin stitch embroidery reading \"DEMEBETA SINCE 2021\" in clean sans-serif typography, premium quiet luxury Korean streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture, the brim text clearly readable, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"TONE_ARCH\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a cream off-white 6-panel dad cap, three-quarter angle showing the brim flipped slightly upward to reveal the brim underside, the cap exterior is completely blank with no logo, the brim underside has small black satin stitch embroidery reading \"DEMEBETA SINCE 2021\" in clean sans-serif typography, premium quiet luxury Korean streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture, the brim text clearly readable, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"TONE_ARCH\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a cream off-white 6-panel dad cap, three-quarter angle showing the brim flipped slightly upward to reveal the brim underside, the cap exterior is completely blank with no logo, the brim underside has small black satin stitch embroidery reading \"DEMEBETA SINCE 2021\" in clean sans-serif typography, premium quiet luxury Korean streetwear aesthetic, cream studio background, soft natural light, realistic cotton twill texture, the brim text clearly readable, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "외부 패널에 자수 추가 금지 (외부 완전 무로고). 챙 안쪽 텍스트 누락 금지. 챙이 보이지 않는 각도 금지. 사람 등장 금지."
    }
  },
  {
    "id": "T10",
    "slug": "t10",
    "name": "NUMBER_21_PUFF",
    "family": "T",
    "section": "Top 10 Bestsellers",
    "sourceFile": "PROMPTS_TOP10_FINAL.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/t10/t10-front.webp",
      "detail": "/assets/caps/t10/t10-detail.webp",
      "fit": "/assets/caps/t10/t10-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a pure white 6-panel dad cap, front view, curved brim, large bold \"21\" numerals centered on the front panel as the sole hero element, black 3D puff embroidery raised 3mm with visible foam underneath, the number \"21\" is the only design element with no \"DEMEBETA\" wordmark visible, condensed sans-serif numerals approximately 30mm tall, vintage minimal sports aesthetic, cream studio background, soft natural light, realistic cotton twill, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"NUMBER_21_PUFF\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a pure white 6-panel dad cap, front view, curved brim, large bold \"21\" numerals centered on the front panel as the sole hero element, black 3D puff embroidery raised 3mm with visible foam underneath, the number \"21\" is the only design element with no \"DEMEBETA\" wordmark visible, condensed sans-serif numerals approximately 30mm tall, vintage minimal sports aesthetic, cream studio background, soft natural light, realistic cotton twill, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"NUMBER_21_PUFF\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a pure white 6-panel dad cap, front view, curved brim, large bold \"21\" numerals centered on the front panel as the sole hero element, black 3D puff embroidery raised 3mm with visible foam underneath, the number \"21\" is the only design element with no \"DEMEBETA\" wordmark visible, condensed sans-serif numerals approximately 30mm tall, vintage minimal sports aesthetic, cream studio background, soft natural light, realistic cotton twill, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "워드마크 \"DEMEBETA\" 등장 금지 (숫자만). 숫자 변경 금지 (21 정확, 설립연도). 자수 색 변경 금지 (블랙 유지). 사람 등장 금지."
    }
  },
  {
    "id": "B1-02",
    "slug": "b1-02",
    "name": "DB Monogram Puff",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-02/b1-02-front.webp",
      "detail": "/assets/caps/b1-02/b1-02-detail.webp",
      "fit": "/assets/caps/b1-02/b1-02-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of navy structured 6-panel dad cap, front three-quarter view, large \"DB\" 3D puff embroidery in white raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"DB Monogram Puff\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of navy structured 6-panel dad cap, front three-quarter view, large \"DB\" 3D puff embroidery in white raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"DB Monogram Puff\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of navy structured 6-panel dad cap, front three-quarter view, large \"DB\" 3D puff embroidery in white raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no flat embroidery / no logos other than DB puff / no background patterns"
    }
  },
  {
    "id": "B1-04",
    "slug": "b1-04",
    "name": "Reflective Wordmark",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-04/b1-04-front.webp",
      "detail": "/assets/caps/b1-04/b1-04-detail.webp",
      "fit": "/assets/caps/b1-04/b1-04-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of charcoal structured trucker cap, front direct view, full-width \"DEMEBETA\" wordmark in 3M retroreflective silver tape across front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Reflective Wordmark\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of charcoal structured trucker cap, front direct view, full-width \"DEMEBETA\" wordmark in 3M retroreflective silver tape across front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Reflective Wordmark\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of charcoal structured trucker cap, front direct view, full-width \"DEMEBETA\" wordmark in 3M retroreflective silver tape across front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no matte lettering / no side graphics"
    }
  },
  {
    "id": "B1-06",
    "slug": "b1-06",
    "name": "Olive Chain",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-06/b1-06-front.webp",
      "detail": "/assets/caps/b1-06/b1-06-detail.webp",
      "fit": "/assets/caps/b1-06/b1-06-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of olive structured 6-panel dad cap, front three-quarter view, \"DB\" chain-stitch embroidery in cream thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Olive Chain\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of olive structured 6-panel dad cap, front three-quarter view, \"DB\" chain-stitch embroidery in cream thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Olive Chain\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of olive structured 6-panel dad cap, front three-quarter view, \"DB\" chain-stitch embroidery in cream thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no puff embroidery / no reflective material / no additional text"
    }
  },
  {
    "id": "B1-07",
    "slug": "b1-07",
    "name": "Washed Coord",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-07/b1-07-front.webp",
      "detail": "/assets/caps/b1-07/b1-07-detail.webp",
      "fit": "/assets/caps/b1-07/b1-07-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of washed denim unstructured dad cap, front three-quarter view, no logo, stonewashed and garment-washed denim surface with natural fading and crease texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic washed denim texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Washed Coord\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of washed denim unstructured dad cap, front three-quarter view, no logo, stonewashed and garment-washed denim surface with natural fading and crease texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic washed denim texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Washed Coord\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of washed denim unstructured dad cap, front three-quarter view, no logo, stonewashed and garment-washed denim surface with natural fading and crease texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic washed denim texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no patches / no printed text"
    }
  },
  {
    "id": "B1-08",
    "slug": "b1-08",
    "name": "Stamp Patch",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-08/b1-08-front.webp",
      "detail": "/assets/caps/b1-08/b1-08-detail.webp",
      "fit": "/assets/caps/b1-08/b1-08-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of beige structured 6-panel dad cap, front three-quarter view, woven patch with perforated stamp-style border stitched onto front panel, vintage postal graphic detail on patch in cream and tan tones, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Stamp Patch\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of beige structured 6-panel dad cap, front three-quarter view, woven patch with perforated stamp-style border stitched onto front panel, vintage postal graphic detail on patch in cream and tan tones, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Stamp Patch\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of beige structured 6-panel dad cap, front three-quarter view, woven patch with perforated stamp-style border stitched onto front panel, vintage postal graphic detail on patch in cream and tan tones, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery directly on cap / no bold color patches / no reflective material"
    }
  },
  {
    "id": "B1-09",
    "slug": "b1-09",
    "name": "Mudbrown Leather",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-09/b1-09-front.webp",
      "detail": "/assets/caps/b1-09/b1-09-detail.webp",
      "fit": "/assets/caps/b1-09/b1-09-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of mud brown unstructured dad cap, front three-quarter view, vegetable-tanned leather patch on front panel with laser-engraved \"DEME\" lettering, aged leather surface detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and leather texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Mudbrown Leather\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of mud brown unstructured dad cap, front three-quarter view, vegetable-tanned leather patch on front panel with laser-engraved \"DEME\" lettering, aged leather surface detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and leather texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Mudbrown Leather\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of mud brown unstructured dad cap, front three-quarter view, vegetable-tanned leather patch on front panel with laser-engraved \"DEME\" lettering, aged leather surface detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and leather texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no woven patches / no reflective elements"
    }
  },
  {
    "id": "B1-10",
    "slug": "b1-10",
    "name": "Foil Initial",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-10/b1-10-front.webp",
      "detail": "/assets/caps/b1-10/b1-10-detail.webp",
      "fit": "/assets/caps/b1-10/b1-10-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 6-panel dad cap, side panel view, gold metallic foil \"β\" symbol applied to left side panel, mirror-finish foil surface reflecting soft light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Foil Initial\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 6-panel dad cap, side panel view, gold metallic foil \"β\" symbol applied to left side panel, mirror-finish foil surface reflecting soft light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Foil Initial\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 6-panel dad cap, side panel view, gold metallic foil \"β\" symbol applied to left side panel, mirror-finish foil surface reflecting soft light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no matte graphics / no front panel logos"
    }
  },
  {
    "id": "B1-11",
    "slug": "b1-11",
    "name": "Korean Script",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-11/b1-11-front.webp",
      "detail": "/assets/caps/b1-11/b1-11-detail.webp",
      "fit": "/assets/caps/b1-11/b1-11-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of white structured 6-panel dad cap, front direct view, flat embroidery of Korean characters \"드메베타\" in black thread across front panel in clean block hangul script, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Korean Script\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of white structured 6-panel dad cap, front direct view, flat embroidery of Korean characters \"드메베타\" in black thread across front panel in clean block hangul script, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Korean Script\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of white structured 6-panel dad cap, front direct view, flat embroidery of Korean characters \"드메베타\" in black thread across front panel in clean block hangul script, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no puff embroidery / no English text / no side panel graphics"
    }
  },
  {
    "id": "B1-13",
    "slug": "b1-13",
    "name": "Satin Navy",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-13/b1-13-front.webp",
      "detail": "/assets/caps/b1-13/b1-13-detail.webp",
      "fit": "/assets/caps/b1-13/b1-13-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of navy structured 5-panel cap, front three-quarter view, \"2021\" text in glossy gold satin ribbon lettering stitched to front panel, satin sheen catching soft studio light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Satin Navy\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of navy structured 5-panel cap, front three-quarter view, \"2021\" text in glossy gold satin ribbon lettering stitched to front panel, satin sheen catching soft studio light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Satin Navy\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of navy structured 5-panel cap, front three-quarter view, \"2021\" text in glossy gold satin ribbon lettering stitched to front panel, satin sheen catching soft studio light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no matte embroidery / no reflective tape / no additional wordmarks"
    }
  },
  {
    "id": "B1-14",
    "slug": "b1-14",
    "name": "Trucker Reflect",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-14/b1-14-front.webp",
      "detail": "/assets/caps/b1-14/b1-14-detail.webp",
      "fit": "/assets/caps/b1-14/b1-14-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of khaki structured trucker cap, rear three-quarter view showing mesh back panel, 3M retroreflective \"DB\" woven badge patch on rear mesh panel, silver reflective surface detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Trucker Reflect\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of khaki structured trucker cap, rear three-quarter view showing mesh back panel, 3M retroreflective \"DB\" woven badge patch on rear mesh panel, silver reflective surface detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Trucker Reflect\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of khaki structured trucker cap, rear three-quarter view showing mesh back panel, 3M retroreflective \"DB\" woven badge patch on rear mesh panel, silver reflective surface detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no front panel graphics / no embroidery / no matte patches"
    }
  },
  {
    "id": "B1-15",
    "slug": "b1-15",
    "name": "Thermo Ink",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-15/b1-15-front.webp",
      "detail": "/assets/caps/b1-15/b1-15-detail.webp",
      "fit": "/assets/caps/b1-15/b1-15-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 6-panel dad cap, front direct view, \"DEME\" text printed in thermochromic ink on front panel appearing as faint dark-on-dark heat-sensitive graphic, subtle surface print texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Thermo Ink\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 6-panel dad cap, front direct view, \"DEME\" text printed in thermochromic ink on front panel appearing as faint dark-on-dark heat-sensitive graphic, subtle surface print texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Thermo Ink\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 6-panel dad cap, front direct view, \"DEME\" text printed in thermochromic ink on front panel appearing as faint dark-on-dark heat-sensitive graphic, subtle surface print texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no reflective elements / no high-contrast visible print"
    }
  },
  {
    "id": "B1-16",
    "slug": "b1-16",
    "name": "Burgundy Puff",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-16/b1-16-front.webp",
      "detail": "/assets/caps/b1-16/b1-16-detail.webp",
      "fit": "/assets/caps/b1-16/b1-16-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of wine burgundy structured 6-panel dad cap, front three-quarter view, \"DEMEBETA\" 3D puff embroidery in cream raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Burgundy Puff\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of wine burgundy structured 6-panel dad cap, front three-quarter view, \"DEMEBETA\" 3D puff embroidery in cream raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Burgundy Puff\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of wine burgundy structured 6-panel dad cap, front three-quarter view, \"DEMEBETA\" 3D puff embroidery in cream raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no flat embroidery / no patches / no side panel text"
    }
  },
  {
    "id": "B1-17",
    "slug": "b1-17",
    "name": "UV Arch",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-17/b1-17-front.webp",
      "detail": "/assets/caps/b1-17/b1-17-detail.webp",
      "fit": "/assets/caps/b1-17/b1-17-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of off-white structured trucker cap, front three-quarter view, UV-reactive fluorescent \"β\" symbol printed on front panel visible as faint off-white-on-white graphic under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"UV Arch\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of off-white structured trucker cap, front three-quarter view, UV-reactive fluorescent \"β\" symbol printed on front panel visible as faint off-white-on-white graphic under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"UV Arch\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of off-white structured trucker cap, front three-quarter view, UV-reactive fluorescent \"β\" symbol printed on front panel visible as faint off-white-on-white graphic under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no glowing UV effect in render / no embroidery / no high-contrast print"
    }
  },
  {
    "id": "B1-18",
    "slug": "b1-18",
    "name": "Bucket Woven",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-18/b1-18-front.webp",
      "detail": "/assets/caps/b1-18/b1-18-detail.webp",
      "fit": "/assets/caps/b1-18/b1-18-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of beige cotton bucket hat, three-quarter overhead view, \"DEMEBETA\" woven patch with stamp-style perforated border stitched onto front panel, vintage postal graphic on patch, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Bucket Woven\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of beige cotton bucket hat, three-quarter overhead view, \"DEMEBETA\" woven patch with stamp-style perforated border stitched onto front panel, vintage postal graphic on patch, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Bucket Woven\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of beige cotton bucket hat, three-quarter overhead view, \"DEMEBETA\" woven patch with stamp-style perforated border stitched onto front panel, vintage postal graphic on patch, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no direct embroidery on hat body / no reflective material / no bold colors"
    }
  },
  {
    "id": "B1-19",
    "slug": "b1-19",
    "name": "Mustard Chain",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-19/b1-19-front.webp",
      "detail": "/assets/caps/b1-19/b1-19-detail.webp",
      "fit": "/assets/caps/b1-19/b1-19-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of mustard yellow structured 6-panel dad cap, front three-quarter view, \"DB\" chain-stitch embroidery in navy thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Mustard Chain\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of mustard yellow structured 6-panel dad cap, front three-quarter view, \"DB\" chain-stitch embroidery in navy thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Mustard Chain\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of mustard yellow structured 6-panel dad cap, front three-quarter view, \"DB\" chain-stitch embroidery in navy thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no puff embroidery / no patches / no additional wordmarks"
    }
  },
  {
    "id": "B1-20",
    "slug": "b1-20",
    "name": "Record Label",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-20/b1-20-front.webp",
      "detail": "/assets/caps/b1-20/b1-20-detail.webp",
      "fit": "/assets/caps/b1-20/b1-20-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 5-panel cap, front direct view, circular vinyl record label woven patch in red and white on front panel with concentric ring detail and small text layout, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Record Label\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 5-panel cap, front direct view, circular vinyl record label woven patch in red and white on front panel with concentric ring detail and small text layout, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Record Label\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 5-panel cap, front direct view, circular vinyl record label woven patch in red and white on front panel with concentric ring detail and small text layout, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no reflective material / no solid-block patches"
    }
  },
  {
    "id": "B1-21",
    "slug": "b1-21",
    "name": "Emblem Arch",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-21/b1-21-front.webp",
      "detail": "/assets/caps/b1-21/b1-21-detail.webp",
      "fit": "/assets/caps/b1-21/b1-21-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of navy structured 6-panel dad cap, front three-quarter view, automotive crest-style PU label badge on front panel with shield silhouette and subtle debossed lettering, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and PU material texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Emblem Arch\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of navy structured 6-panel dad cap, front three-quarter view, automotive crest-style PU label badge on front panel with shield silhouette and subtle debossed lettering, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and PU material texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Emblem Arch\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of navy structured 6-panel dad cap, front three-quarter view, automotive crest-style PU label badge on front panel with shield silhouette and subtle debossed lettering, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and PU material texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no woven patches / no bright color badges"
    }
  },
  {
    "id": "B1-22",
    "slug": "b1-22",
    "name": "Sage Puff",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-22/b1-22-front.webp",
      "detail": "/assets/caps/b1-22/b1-22-detail.webp",
      "fit": "/assets/caps/b1-22/b1-22-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of sage green structured 6-panel dad cap, front three-quarter view, \"DB\" 3D puff embroidery in off-white raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Sage Puff\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of sage green structured 6-panel dad cap, front three-quarter view, \"DB\" 3D puff embroidery in off-white raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Sage Puff\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of sage green structured 6-panel dad cap, front three-quarter view, \"DB\" 3D puff embroidery in off-white raised thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no flat embroidery / no patches / no additional logos"
    }
  },
  {
    "id": "B1-23",
    "slug": "b1-23",
    "name": "Pinbadge Edition",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-23/b1-23-front.webp",
      "detail": "/assets/caps/b1-23/b1-23-detail.webp",
      "fit": "/assets/caps/b1-23/b1-23-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 6-panel dad cap, side three-quarter view, no front logo, single removable metal enamel pin badge shaped as \"β\" symbol attached to left side panel, matte black cap surface with small pin catch hardware visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Pinbadge Edition\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 6-panel dad cap, side three-quarter view, no front logo, single removable metal enamel pin badge shaped as \"β\" symbol attached to left side panel, matte black cap surface with small pin catch hardware visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Pinbadge Edition\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 6-panel dad cap, side three-quarter view, no front logo, single removable metal enamel pin badge shaped as \"β\" symbol attached to left side panel, matte black cap surface with small pin catch hardware visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no patches / no front panel graphics"
    }
  },
  {
    "id": "B1-25",
    "slug": "b1-25",
    "name": "Burnt Orange Chain",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-25/b1-25-front.webp",
      "detail": "/assets/caps/b1-25/b1-25-detail.webp",
      "fit": "/assets/caps/b1-25/b1-25-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of burnt orange structured 5-panel cap, front three-quarter view, \"DEME\" chain-stitch embroidery in black thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Burnt Orange Chain\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of burnt orange structured 5-panel cap, front three-quarter view, \"DEME\" chain-stitch embroidery in black thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Burnt Orange Chain\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of burnt orange structured 5-panel cap, front three-quarter view, \"DEME\" chain-stitch embroidery in black thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no puff embroidery / no reflective elements / no side panel text"
    }
  },
  {
    "id": "B1-26",
    "slug": "b1-26",
    "name": "Archive Tag",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-26/b1-26-front.webp",
      "detail": "/assets/caps/b1-26/b1-26-detail.webp",
      "fit": "/assets/caps/b1-26/b1-26-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of gray structured 6-panel dad cap, front three-quarter view, silver PU label badge on front panel with debossed multi-line text \"ARCHIVE / DB / 2021\" in minimal sans-serif layout, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and PU texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Archive Tag\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of gray structured 6-panel dad cap, front three-quarter view, silver PU label badge on front panel with debossed multi-line text \"ARCHIVE / DB / 2021\" in minimal sans-serif layout, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and PU texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Archive Tag\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of gray structured 6-panel dad cap, front three-quarter view, silver PU label badge on front panel with debossed multi-line text \"ARCHIVE / DB / 2021\" in minimal sans-serif layout, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and PU texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no woven patches / no color-contrast graphics"
    }
  },
  {
    "id": "B1-27",
    "slug": "b1-27",
    "name": "Oak Satin",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-27/b1-27-front.webp",
      "detail": "/assets/caps/b1-27/b1-27-detail.webp",
      "fit": "/assets/caps/b1-27/b1-27-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of oak tan unstructured dad cap, front three-quarter view, \"2021\" text in dark brown glossy satin ribbon lettering stitched to front panel, satin sheen detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Oak Satin\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of oak tan unstructured dad cap, front three-quarter view, \"2021\" text in dark brown glossy satin ribbon lettering stitched to front panel, satin sheen detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Oak Satin\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of oak tan unstructured dad cap, front three-quarter view, \"2021\" text in dark brown glossy satin ribbon lettering stitched to front panel, satin sheen detail, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no matte embroidery / no reflective tape / no additional wordmarks"
    }
  },
  {
    "id": "B1-28",
    "slug": "b1-28",
    "name": "Dusty Pink Tone",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-28/b1-28-front.webp",
      "detail": "/assets/caps/b1-28/b1-28-detail.webp",
      "fit": "/assets/caps/b1-28/b1-28-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of dusty pink structured 6-panel dad cap, front three-quarter view, \"DEMEBETA\" flat embroidery in matching dusty pink tone-on-tone thread on front panel, subtle self-color texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Dusty Pink Tone\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of dusty pink structured 6-panel dad cap, front three-quarter view, \"DEMEBETA\" flat embroidery in matching dusty pink tone-on-tone thread on front panel, subtle self-color texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Dusty Pink Tone\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of dusty pink structured 6-panel dad cap, front three-quarter view, \"DEMEBETA\" flat embroidery in matching dusty pink tone-on-tone thread on front panel, subtle self-color texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no contrasting color embroidery / no patches / no foil elements"
    }
  },
  {
    "id": "B1-30",
    "slug": "b1-30",
    "name": "Pale Pink Foil",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-30/b1-30-front.webp",
      "detail": "/assets/caps/b1-30/b1-30-detail.webp",
      "fit": "/assets/caps/b1-30/b1-30-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of pale pink structured 6-panel dad cap, side panel view, \"DB\" silver metallic foil lettering applied to front panel, mirror-finish foil catching soft light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Pale Pink Foil\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of pale pink structured 6-panel dad cap, side panel view, \"DB\" silver metallic foil lettering applied to front panel, mirror-finish foil catching soft light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Pale Pink Foil\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of pale pink structured 6-panel dad cap, side panel view, \"DB\" silver metallic foil lettering applied to front panel, mirror-finish foil catching soft light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no matte graphics / no gold foil variants"
    }
  },
  {
    "id": "B1-31",
    "slug": "b1-31",
    "name": "Currency Map",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-31/b1-31-front.webp",
      "detail": "/assets/caps/b1-31/b1-31-detail.webp",
      "fit": "/assets/caps/b1-31/b1-31-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of cream structured 5-panel cap, front direct view, woven patch with banknote security-line microprint pattern and 3M retroreflective thread detail stitched to front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Currency Map\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of cream structured 5-panel cap, front direct view, woven patch with banknote security-line microprint pattern and 3M retroreflective thread detail stitched to front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Currency Map\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of cream structured 5-panel cap, front direct view, woven patch with banknote security-line microprint pattern and 3M retroreflective thread detail stitched to front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery directly on cap / no bold color patches / no plain reflective tape"
    }
  },
  {
    "id": "B1-32",
    "slug": "b1-32",
    "name": "Signage Type",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-32/b1-32-front.webp",
      "detail": "/assets/caps/b1-32/b1-32-detail.webp",
      "fit": "/assets/caps/b1-32/b1-32-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of charcoal structured 6-panel dad cap, front direct view, \"DEME\" text in neon yellow road-signage typeface flat embroidery on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Signage Type\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of charcoal structured 6-panel dad cap, front direct view, \"DEME\" text in neon yellow road-signage typeface flat embroidery on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Signage Type\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of charcoal structured 6-panel dad cap, front direct view, \"DEME\" text in neon yellow road-signage typeface flat embroidery on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no reflective tape / no patches / no additional wordmarks"
    }
  },
  {
    "id": "B1-33",
    "slug": "b1-33",
    "name": "Camp Olive",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-33/b1-33-front.webp",
      "detail": "/assets/caps/b1-33/b1-33-detail.webp",
      "fit": "/assets/caps/b1-33/b1-33-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of olive structured 5-panel camp cap, front three-quarter view, no logo, 14oz heavyweight cotton twill surface with visible dense weave texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic heavyweight twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Camp Olive\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of olive structured 5-panel camp cap, front three-quarter view, no logo, 14oz heavyweight cotton twill surface with visible dense weave texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic heavyweight twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Camp Olive\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of olive structured 5-panel camp cap, front three-quarter view, no logo, 14oz heavyweight cotton twill surface with visible dense weave texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic heavyweight twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no patches / no printed graphics"
    }
  },
  {
    "id": "B1-34",
    "slug": "b1-34",
    "name": "Wine Leather Badge",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-34/b1-34-front.webp",
      "detail": "/assets/caps/b1-34/b1-34-detail.webp",
      "fit": "/assets/caps/b1-34/b1-34-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of wine structured 6-panel dad cap, side three-quarter view, small vegetable-tanned leather patch with laser-engraved \"β\" on left side panel, aged leather grain visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and leather texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Wine Leather Badge\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of wine structured 6-panel dad cap, side three-quarter view, small vegetable-tanned leather patch with laser-engraved \"β\" on left side panel, aged leather grain visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and leather texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Wine Leather Badge\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of wine structured 6-panel dad cap, side three-quarter view, small vegetable-tanned leather patch with laser-engraved \"β\" on left side panel, aged leather grain visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and leather texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no front panel embroidery / no woven patches / no reflective elements"
    }
  },
  {
    "id": "B1-36",
    "slug": "b1-36",
    "name": "Mint UV",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-36/b1-36-front.webp",
      "detail": "/assets/caps/b1-36/b1-36-detail.webp",
      "fit": "/assets/caps/b1-36/b1-36-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of mint green structured 5-panel cap, underside brim view angled to show interior, \"SINCE 2021\" text printed in UV-reactive ink on inner brim surface appearing as faint tonal marking under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Mint UV\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of mint green structured 5-panel cap, underside brim view angled to show interior, \"SINCE 2021\" text printed in UV-reactive ink on inner brim surface appearing as faint tonal marking under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Mint UV\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of mint green structured 5-panel cap, underside brim view angled to show interior, \"SINCE 2021\" text printed in UV-reactive ink on inner brim surface appearing as faint tonal marking under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no glowing UV effect / no exterior embroidery / no bold exterior graphics"
    }
  },
  {
    "id": "B1-37",
    "slug": "b1-37",
    "name": "Trucker Chain",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-37/b1-37-front.webp",
      "detail": "/assets/caps/b1-37/b1-37-detail.webp",
      "fit": "/assets/caps/b1-37/b1-37-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of beige structured trucker cap, front three-quarter view, \"DB\" chain-stitch embroidery in burnt orange thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Trucker Chain\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of beige structured trucker cap, front three-quarter view, \"DB\" chain-stitch embroidery in burnt orange thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Trucker Chain\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of beige structured trucker cap, front three-quarter view, \"DB\" chain-stitch embroidery in burnt orange thread on front panel, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no puff embroidery / no reflective elements / no rear panel graphics"
    }
  },
  {
    "id": "B1-38",
    "slug": "b1-38",
    "name": "Perf Camp",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-38/b1-38-front.webp",
      "detail": "/assets/caps/b1-38/b1-38-detail.webp",
      "fit": "/assets/caps/b1-38/b1-38-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 5-panel camp cap, front three-quarter view, laser-cut perforated stamp-border pattern along front panel edge creating precise geometric perforation detail, no embroidery or patch, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Perf Camp\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 5-panel camp cap, front three-quarter view, laser-cut perforated stamp-border pattern along front panel edge creating precise geometric perforation detail, no embroidery or patch, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Perf Camp\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 5-panel camp cap, front three-quarter view, laser-cut perforated stamp-border pattern along front panel edge creating precise geometric perforation detail, no embroidery or patch, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no woven patches / no printed graphics"
    }
  },
  {
    "id": "B1-39",
    "slug": "b1-39",
    "name": "Washed Korean",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-39/b1-39-front.webp",
      "detail": "/assets/caps/b1-39/b1-39-detail.webp",
      "fit": "/assets/caps/b1-39/b1-39-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of washed denim unstructured dad cap, front direct view, \"드메베타\" Korean hangul text in chain-stitch embroidery in off-white thread on front panel, garment-washed denim surface with natural fading, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic washed denim texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Washed Korean\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of washed denim unstructured dad cap, front direct view, \"드메베타\" Korean hangul text in chain-stitch embroidery in off-white thread on front panel, garment-washed denim surface with natural fading, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic washed denim texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Washed Korean\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of washed denim unstructured dad cap, front direct view, \"드메베타\" Korean hangul text in chain-stitch embroidery in off-white thread on front panel, garment-washed denim surface with natural fading, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic washed denim texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no English text embroidery / no patches / no puff embroidery"
    }
  },
  {
    "id": "B1-40",
    "slug": "b1-40",
    "name": "Dark Navy Satin",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-40/b1-40-front.webp",
      "detail": "/assets/caps/b1-40/b1-40-detail.webp",
      "fit": "/assets/caps/b1-40/b1-40-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of navy cotton bucket hat, three-quarter overhead view, \"DEMEBETA\" glossy gold satin ribbon lettering stitched across front panel, satin sheen catching soft studio light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Dark Navy Satin\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of navy cotton bucket hat, three-quarter overhead view, \"DEMEBETA\" glossy gold satin ribbon lettering stitched across front panel, satin sheen catching soft studio light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Dark Navy Satin\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of navy cotton bucket hat, three-quarter overhead view, \"DEMEBETA\" glossy gold satin ribbon lettering stitched across front panel, satin sheen catching soft studio light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no matte embroidery / no patches / no reflective tape"
    }
  },
  {
    "id": "B1-41",
    "slug": "b1-41",
    "name": "Crest Metal",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-41/b1-41-front.webp",
      "detail": "/assets/caps/b1-41/b1-41-detail.webp",
      "fit": "/assets/caps/b1-41/b1-41-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 6-panel dad cap, front three-quarter view, removable silver automotive crest-style metal woven badge with shield silhouette attached via hook-and-loop backing on front panel, silver metallic hardware visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Crest Metal\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 6-panel dad cap, front three-quarter view, removable silver automotive crest-style metal woven badge with shield silhouette attached via hook-and-loop backing on front panel, silver metallic hardware visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Crest Metal\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 6-panel dad cap, front three-quarter view, removable silver automotive crest-style metal woven badge with shield silhouette attached via hook-and-loop backing on front panel, silver metallic hardware visible, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no permanent patches / no matte badges"
    }
  },
  {
    "id": "B1-42",
    "slug": "b1-42",
    "name": "Beige Thermo",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-42/b1-42-front.webp",
      "detail": "/assets/caps/b1-42/b1-42-detail.webp",
      "fit": "/assets/caps/b1-42/b1-42-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of beige structured 6-panel dad cap, front direct view, \"β\" symbol printed in thermochromic ink on front panel appearing as subtle faint-on-beige heat-sensitive marking under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Beige Thermo\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of beige structured 6-panel dad cap, front direct view, \"β\" symbol printed in thermochromic ink on front panel appearing as subtle faint-on-beige heat-sensitive marking under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Beige Thermo\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of beige structured 6-panel dad cap, front direct view, \"β\" symbol printed in thermochromic ink on front panel appearing as subtle faint-on-beige heat-sensitive marking under normal light, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no high-contrast visible print / no reflective material"
    }
  },
  {
    "id": "B1-45",
    "slug": "b1-45",
    "name": "Oak Camp Patch",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-45/b1-45-front.webp",
      "detail": "/assets/caps/b1-45/b1-45-detail.webp",
      "fit": "/assets/caps/b1-45/b1-45-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of oak tan structured 5-panel camp cap, front direct view, woven stamp-style patch with perforated border stitched to front panel, \"DEME / SINCE 2021\" text layout on patch in dark brown on cream, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Oak Camp Patch\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of oak tan structured 5-panel camp cap, front direct view, woven stamp-style patch with perforated border stitched to front panel, \"DEME / SINCE 2021\" text layout on patch in dark brown on cream, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Oak Camp Patch\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of oak tan structured 5-panel camp cap, front direct view, woven stamp-style patch with perforated border stitched to front panel, \"DEME / SINCE 2021\" text layout on patch in dark brown on cream, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no direct embroidery on cap body / no reflective material / no bold color patches"
    }
  },
  {
    "id": "B1-46",
    "slug": "b1-46",
    "name": "Sage Foil Script",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-46/b1-46-front.webp",
      "detail": "/assets/caps/b1-46/b1-46-detail.webp",
      "fit": "/assets/caps/b1-46/b1-46-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of sage green structured 6-panel dad cap, front three-quarter view, \"DB\" in cursive script gold metallic foil applied to front panel, mirror-finish foil surface, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Sage Foil Script\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of sage green structured 6-panel dad cap, front three-quarter view, \"DB\" in cursive script gold metallic foil applied to front panel, mirror-finish foil surface, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Sage Foil Script\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of sage green structured 6-panel dad cap, front three-quarter view, \"DB\" in cursive script gold metallic foil applied to front panel, mirror-finish foil surface, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no matte lettering / no block typeface"
    }
  },
  {
    "id": "B1-47",
    "slug": "b1-47",
    "name": "Trucker Stamp",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-47/b1-47-front.webp",
      "detail": "/assets/caps/b1-47/b1-47-detail.webp",
      "fit": "/assets/caps/b1-47/b1-47-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of khaki structured trucker cap, front direct view, \"DEMEBETA APPROVED\" rubber stamp graphic in silicone print on front panel with worn ink impression texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Trucker Stamp\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of khaki structured trucker cap, front direct view, \"DEMEBETA APPROVED\" rubber stamp graphic in silicone print on front panel with worn ink impression texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Trucker Stamp\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of khaki structured trucker cap, front direct view, \"DEMEBETA APPROVED\" rubber stamp graphic in silicone print on front panel with worn ink impression texture, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and mesh texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no woven patches / no crisp clean print edges"
    }
  },
  {
    "id": "B1-48",
    "slug": "b1-48",
    "name": "Satin Bucket Mono",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-48/b1-48-front.webp",
      "detail": "/assets/caps/b1-48/b1-48-detail.webp",
      "fit": "/assets/caps/b1-48/b1-48-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of cream cotton bucket hat, three-quarter overhead view, side panel featuring repeated \"DB\" satin ribbon lettering in tone-on-tone cream-on-cream stitching wrapping around panels, subtle sheen variation, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Satin Bucket Mono\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of cream cotton bucket hat, three-quarter overhead view, side panel featuring repeated \"DB\" satin ribbon lettering in tone-on-tone cream-on-cream stitching wrapping around panels, subtle sheen variation, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Satin Bucket Mono\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of cream cotton bucket hat, three-quarter overhead view, side panel featuring repeated \"DB\" satin ribbon lettering in tone-on-tone cream-on-cream stitching wrapping around panels, subtle sheen variation, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no contrasting color lettering / no patches / no front panel graphics"
    }
  },
  {
    "id": "B1-49",
    "slug": "b1-49",
    "name": "Signal Yellow",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-49/b1-49-front.webp",
      "detail": "/assets/caps/b1-49/b1-49-detail.webp",
      "fit": "/assets/caps/b1-49/b1-49-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of mustard yellow structured 6-panel dad cap, front three-quarter view angled to show brim edge, no front logo, 3M retroreflective silver tape trim along brim edge perimeter, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Signal Yellow\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of mustard yellow structured 6-panel dad cap, front three-quarter view angled to show brim edge, no front logo, 3M retroreflective silver tape trim along brim edge perimeter, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Signal Yellow\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of mustard yellow structured 6-panel dad cap, front three-quarter view angled to show brim edge, no front logo, 3M retroreflective silver tape trim along brim edge perimeter, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no front panel graphics / no patches"
    }
  },
  {
    "id": "B1-50",
    "slug": "b1-50",
    "name": "Archive Velcro",
    "family": "B1",
    "section": "Block 1 잔여 41",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b1-50/b1-50-front.webp",
      "detail": "/assets/caps/b1-50/b1-50-detail.webp",
      "fit": "/assets/caps/b1-50/b1-50-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 6-panel dad cap, front three-quarter view, Velcro loop panel on front with one interchangeable woven badge attached showing \"DB\" graphic, two additional swappable patches (\"2021\" and Korean script \"드메베타\") displayed beside the cap on cream surface, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Archive Velcro\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 6-panel dad cap, front three-quarter view, Velcro loop panel on front with one interchangeable woven badge attached showing \"DB\" graphic, two additional swappable patches (\"2021\" and Korean script \"드메베타\") displayed beside the cap on cream surface, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Archive Velcro\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 6-panel dad cap, front three-quarter view, Velcro loop panel on front with one interchangeable woven badge attached showing \"DB\" graphic, two additional swappable patches (\"2021\" and Korean script \"드메베타\") displayed beside the cap on cream surface, premium restrained Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no permanent embroidery / no foil elements / no single fixed logo"
    }
  },
  {
    "id": "D01",
    "slug": "d01",
    "name": "Corduroy Terrain",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d01/d01-front.webp",
      "detail": "/assets/caps/d01/d01-detail.webp",
      "fit": "/assets/caps/d01/d01-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of dusty olive unstructured 6-panel corduroy cap, front three-quarter view, single woven patch badge in lower left front panel position, fine-wale corduroy surface with visible ribbed texture, clean minimal silhouette, premium quiet Korean indie streetwear referencing Teddy Santis ALD aesthetic, cream paper background, soft natural light, realistic corduroy texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Corduroy Terrain\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of dusty olive unstructured 6-panel corduroy cap, front three-quarter view, single woven patch badge in lower left front panel position, fine-wale corduroy surface with visible ribbed texture, clean minimal silhouette, premium quiet Korean indie streetwear referencing Teddy Santis ALD aesthetic, cream paper background, soft natural light, realistic corduroy texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Corduroy Terrain\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of dusty olive unstructured 6-panel corduroy cap, front three-quarter view, single woven patch badge in lower left front panel position, fine-wale corduroy surface with visible ribbed texture, clean minimal silhouette, premium quiet Korean indie streetwear referencing Teddy Santis ALD aesthetic, cream paper background, soft natural light, realistic corduroy texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery directly on fabric / no multiple patches / no bold graphic patches"
    }
  },
  {
    "id": "D02",
    "slug": "d02",
    "name": "Archive Patch",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d02/d02-front.webp",
      "detail": "/assets/caps/d02/d02-detail.webp",
      "fit": "/assets/caps/d02/d02-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of off-white cream unstructured 6-panel dad cap, front three-quarter view, hand-stitched embroidered patch with 80s Korean archive graphic motif applied to front panel with visible hand-sewn border stitching, premium quiet Korean indie streetwear referencing Angelo Baque Awake NY archive aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Archive Patch\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of off-white cream unstructured 6-panel dad cap, front three-quarter view, hand-stitched embroidered patch with 80s Korean archive graphic motif applied to front panel with visible hand-sewn border stitching, premium quiet Korean indie streetwear referencing Angelo Baque Awake NY archive aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Archive Patch\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of off-white cream unstructured 6-panel dad cap, front three-quarter view, hand-stitched embroidered patch with 80s Korean archive graphic motif applied to front panel with visible hand-sewn border stitching, premium quiet Korean indie streetwear referencing Angelo Baque Awake NY archive aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no machine-clean embroidery edges / no reflective material / no modern graphic style"
    }
  },
  {
    "id": "D03",
    "slug": "d03",
    "name": "Glitch Crown",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d03/d03-front.webp",
      "detail": "/assets/caps/d03/d03-detail.webp",
      "fit": "/assets/caps/d03/d03-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black unstructured 6-panel cap, inside brim view angled downward, clean black exterior with no visible front graphic, interior brim featuring surrealist glitch illustration print in muted tones, premium Korean indie streetwear referencing Kyle Ng Brain Dead aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Glitch Crown\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black unstructured 6-panel cap, inside brim view angled downward, clean black exterior with no visible front graphic, interior brim featuring surrealist glitch illustration print in muted tones, premium Korean indie streetwear referencing Kyle Ng Brain Dead aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Glitch Crown\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black unstructured 6-panel cap, inside brim view angled downward, clean black exterior with no visible front graphic, interior brim featuring surrealist glitch illustration print in muted tones, premium Korean indie streetwear referencing Kyle Ng Brain Dead aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no exterior embroidery or patches / no high-contrast front graphics / no visible interior print from exterior angle"
    }
  },
  {
    "id": "D04",
    "slug": "d04",
    "name": "Tri-Silence",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d04/d04-front.webp",
      "detail": "/assets/caps/d04/d04-detail.webp",
      "fit": "/assets/caps/d04/d04-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of charcoal gray structured 6-panel cap, front three-quarter view angled to show brim underside, single geometric proprietary symbol embroidered on front panel, thin 3M retroreflective line along brim underside edge, premium quiet Korean indie streetwear referencing Lev Tanju Palace minimal aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Tri-Silence\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of charcoal gray structured 6-panel cap, front three-quarter view angled to show brim underside, single geometric proprietary symbol embroidered on front panel, thin 3M retroreflective line along brim underside edge, premium quiet Korean indie streetwear referencing Lev Tanju Palace minimal aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Tri-Silence\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of charcoal gray structured 6-panel cap, front three-quarter view angled to show brim underside, single geometric proprietary symbol embroidered on front panel, thin 3M retroreflective line along brim underside edge, premium quiet Korean indie streetwear referencing Lev Tanju Palace minimal aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no wordmarks / no additional graphics / no colorful patches"
    }
  },
  {
    "id": "D05",
    "slug": "d05",
    "name": "Perennial",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d05/d05-front.webp",
      "detail": "/assets/caps/d05/d05-detail.webp",
      "fit": "/assets/caps/d05/d05-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of navy wool fleece structured 6-panel cap, front three-quarter view, \"MADE INTENTIONALLY\" woven badge patch on front panel in cream lettering on navy ground, premium Korean indie streetwear referencing Brendon Babenzien Noah seasonless aesthetic, cream paper background, soft natural light, realistic wool fleece and woven patch texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Perennial\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of navy wool fleece structured 6-panel cap, front three-quarter view, \"MADE INTENTIONALLY\" woven badge patch on front panel in cream lettering on navy ground, premium Korean indie streetwear referencing Brendon Babenzien Noah seasonless aesthetic, cream paper background, soft natural light, realistic wool fleece and woven patch texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Perennial\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of navy wool fleece structured 6-panel cap, front three-quarter view, \"MADE INTENTIONALLY\" woven badge patch on front panel in cream lettering on navy ground, premium Korean indie streetwear referencing Brendon Babenzien Noah seasonless aesthetic, cream paper background, soft natural light, realistic wool fleece and woven patch texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no cotton twill substitution / no bold graphic patches / no synthetic sheen"
    }
  },
  {
    "id": "D06",
    "slug": "d06",
    "name": "T-Signal",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d06/d06-front.webp",
      "detail": "/assets/caps/d06/d06-detail.webp",
      "fit": "/assets/caps/d06/d06-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of oatmeal beige structured 6-panel dad cap, front direct view, Korean hangul \"데메베타\" flat embroidery in dark navy with a small proprietary icon embroidered beside text on front panel, premium Korean indie streetwear referencing TNT typographic aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"T-Signal\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of oatmeal beige structured 6-panel dad cap, front direct view, Korean hangul \"데메베타\" flat embroidery in dark navy with a small proprietary icon embroidered beside text on front panel, premium Korean indie streetwear referencing TNT typographic aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"T-Signal\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of oatmeal beige structured 6-panel dad cap, front direct view, Korean hangul \"데메베타\" flat embroidery in dark navy with a small proprietary icon embroidered beside text on front panel, premium Korean indie streetwear referencing TNT typographic aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no English wordmark substitution / no puff embroidery / no patches"
    }
  },
  {
    "id": "D07",
    "slug": "d07",
    "name": "Folded Structure",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d07/d07-front.webp",
      "detail": "/assets/caps/d07/d07-detail.webp",
      "fit": "/assets/caps/d07/d07-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of sand off-white structured 6-panel cap, front three-quarter view, crown compressed to 15mm flat silhouette with brim angled 7 degrees downward, no logo, architectural structured form emphasizing precise panel construction and seam compression, premium Korean indie streetwear referencing Stephen Jones millinery structural aesthetic, cream paper background, soft natural light, realistic stiff cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Folded Structure\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of sand off-white structured 6-panel cap, front three-quarter view, crown compressed to 15mm flat silhouette with brim angled 7 degrees downward, no logo, architectural structured form emphasizing precise panel construction and seam compression, premium Korean indie streetwear referencing Stephen Jones millinery structural aesthetic, cream paper background, soft natural light, realistic stiff cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Folded Structure\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of sand off-white structured 6-panel cap, front three-quarter view, crown compressed to 15mm flat silhouette with brim angled 7 degrees downward, no logo, architectural structured form emphasizing precise panel construction and seam compression, premium Korean indie streetwear referencing Stephen Jones millinery structural aesthetic, cream paper background, soft natural light, realistic stiff cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery / no patches / no standard unstructured silhouette"
    }
  },
  {
    "id": "D08",
    "slug": "d08",
    "name": "Atelier One",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d08/d08-front.webp",
      "detail": "/assets/caps/d08/d08-detail.webp",
      "fit": "/assets/caps/d08/d08-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black structured 6-panel cap, front three-quarter view, Velcro-slot panel on front with interchangeable patch attached, two additional swappable patches in linen and corduroy displayed beside the cap on cream surface, third leather option also shown, premium Korean indie streetwear referencing Maison Michel atelier customization aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Atelier One\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black structured 6-panel cap, front three-quarter view, Velcro-slot panel on front with interchangeable patch attached, two additional swappable patches in linen and corduroy displayed beside the cap on cream surface, third leather option also shown, premium Korean indie streetwear referencing Maison Michel atelier customization aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Atelier One\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black structured 6-panel cap, front three-quarter view, Velcro-slot panel on front with interchangeable patch attached, two additional swappable patches in linen and corduroy displayed beside the cap on cream surface, third leather option also shown, premium Korean indie streetwear referencing Maison Michel atelier customization aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no permanent embroidery / no printed graphics / no single fixed front panel logo"
    }
  },
  {
    "id": "D10",
    "slug": "d10",
    "name": "Error Fold",
    "family": "D",
    "section": "Block 2 디자이너 스타일 잔여 9개 (D09 제외)",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/d10/d10-front.webp",
      "detail": "/assets/caps/d10/d10-detail.webp",
      "fit": "/assets/caps/d10/d10-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of dusty pink and grayish lavender mixed-panel unstructured 6-panel cap, front three-quarter view, each panel in different fabric—cotton twill, satin, mesh, and fleece—with intentional irregular stitch lines visible at seams, premium Korean indie streetwear referencing ADER ERROR deconstructed irregular construction aesthetic, cream paper background, soft natural light, realistic multi-material panel texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Error Fold\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of dusty pink and grayish lavender mixed-panel unstructured 6-panel cap, front three-quarter view, each panel in different fabric—cotton twill, satin, mesh, and fleece—with intentional irregular stitch lines visible at seams, premium Korean indie streetwear referencing ADER ERROR deconstructed irregular construction aesthetic, cream paper background, soft natural light, realistic multi-material panel texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Error Fold\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of dusty pink and grayish lavender mixed-panel unstructured 6-panel cap, front three-quarter view, each panel in different fabric—cotton twill, satin, mesh, and fleece—with intentional irregular stitch lines visible at seams, premium Korean indie streetwear referencing ADER ERROR deconstructed irregular construction aesthetic, cream paper background, soft natural light, realistic multi-material panel texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no uniform single-material panels / no clean machine-perfect seams / no embroidery or patches"
    }
  },
  {
    "id": "B01",
    "slug": "b01",
    "name": "Coastal Minimal",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b01/b01-front.webp",
      "detail": "/assets/caps/b01/b01-detail.webp",
      "fit": "/assets/caps/b01/b01-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of washed navy corduroy unstructured 5-panel cap, front three-quarter view, \"DEMEBETA\" tone-on-tone flat embroidery in matching navy thread on lower right front panel position, subtle self-color texture, premium quiet Korean indie streetwear referencing Noah NYC coastal minimal aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Coastal Minimal\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of washed navy corduroy unstructured 5-panel cap, front three-quarter view, \"DEMEBETA\" tone-on-tone flat embroidery in matching navy thread on lower right front panel position, subtle self-color texture, premium quiet Korean indie streetwear referencing Noah NYC coastal minimal aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Coastal Minimal\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of washed navy corduroy unstructured 5-panel cap, front three-quarter view, \"DEMEBETA\" tone-on-tone flat embroidery in matching navy thread on lower right front panel position, subtle self-color texture, premium quiet Korean indie streetwear referencing Noah NYC coastal minimal aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no contrasting color embroidery / no patches / no bold front graphics"
    }
  },
  {
    "id": "B02",
    "slug": "b02",
    "name": "Needlecord Archive",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b02/b02-front.webp",
      "detail": "/assets/caps/b02/b02-detail.webp",
      "fit": "/assets/caps/b02/b02-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of olive needlecord unstructured 6-panel cap, front three-quarter view, \"DB\" chain-stitch embroidery in dark thread on front panel, interior brim with woven label reading \"성수\" in small type, premium quiet Korean indie streetwear referencing Drake's archive textile aesthetic, cream paper background, soft natural light, realistic fine needlecord texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Needlecord Archive\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of olive needlecord unstructured 6-panel cap, front three-quarter view, \"DB\" chain-stitch embroidery in dark thread on front panel, interior brim with woven label reading \"성수\" in small type, premium quiet Korean indie streetwear referencing Drake's archive textile aesthetic, cream paper background, soft natural light, realistic fine needlecord texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Needlecord Archive\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of olive needlecord unstructured 6-panel cap, front three-quarter view, \"DB\" chain-stitch embroidery in dark thread on front panel, interior brim with woven label reading \"성수\" in small type, premium quiet Korean indie streetwear referencing Drake's archive textile aesthetic, cream paper background, soft natural light, realistic fine needlecord texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no puff embroidery / no exterior label / no reflective material"
    }
  },
  {
    "id": "B03",
    "slug": "b03",
    "name": "Raw Portrait Cap",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b03/b03-front.webp",
      "detail": "/assets/caps/b03/b03-detail.webp",
      "fit": "/assets/caps/b03/b03-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of charcoal unstructured 6-panel cap, front direct view, \"드메베타\" hangul flat embroidery in nearly matching charcoal tone-on-tone thread almost invisible on front panel, raw unstructured silhouette with relaxed crown, premium quiet Korean indie streetwear referencing NOMANUAL raw minimalist aesthetic, cream paper background, soft natural light, realistic mid-weight cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Raw Portrait Cap\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of charcoal unstructured 6-panel cap, front direct view, \"드메베타\" hangul flat embroidery in nearly matching charcoal tone-on-tone thread almost invisible on front panel, raw unstructured silhouette with relaxed crown, premium quiet Korean indie streetwear referencing NOMANUAL raw minimalist aesthetic, cream paper background, soft natural light, realistic mid-weight cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Raw Portrait Cap\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of charcoal unstructured 6-panel cap, front direct view, \"드메베타\" hangul flat embroidery in nearly matching charcoal tone-on-tone thread almost invisible on front panel, raw unstructured silhouette with relaxed crown, premium quiet Korean indie streetwear referencing NOMANUAL raw minimalist aesthetic, cream paper background, soft natural light, realistic mid-weight cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no high-contrast embroidery / no patches / no structured crown"
    }
  },
  {
    "id": "B04",
    "slug": "b04",
    "name": "Seoul Pigment",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b04/b04-front.webp",
      "detail": "/assets/caps/b04/b04-detail.webp",
      "fit": "/assets/caps/b04/b04-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of cream pigment-dyed garment-washed unstructured dad cap, front three-quarter view, \"β\" in Greek-style initial lettering flat embroidery on front panel, washed and faded pigment surface with uneven tonal variation, premium quiet Korean indie streetwear referencing INSILENCE pigment wash aesthetic, cream paper background, soft natural light, realistic washed cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Seoul Pigment\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of cream pigment-dyed garment-washed unstructured dad cap, front three-quarter view, \"β\" in Greek-style initial lettering flat embroidery on front panel, washed and faded pigment surface with uneven tonal variation, premium quiet Korean indie streetwear referencing INSILENCE pigment wash aesthetic, cream paper background, soft natural light, realistic washed cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Seoul Pigment\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of cream pigment-dyed garment-washed unstructured dad cap, front three-quarter view, \"β\" in Greek-style initial lettering flat embroidery on front panel, washed and faded pigment surface with uneven tonal variation, premium quiet Korean indie streetwear referencing INSILENCE pigment wash aesthetic, cream paper background, soft natural light, realistic washed cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no even solid color surface / no puff embroidery / no patches"
    }
  },
  {
    "id": "B05",
    "slug": "b05",
    "name": "SP Archive",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b05/b05-front.webp",
      "detail": "/assets/caps/b05/b05-detail.webp",
      "fit": "/assets/caps/b05/b05-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of off-white corduroy structured 6-panel cap, front direct view, \"DEMEBETA\" in gothic block lettering flat embroidery centered on front panel in off-white tone-on-tone thread, subtle self-color contrast, premium quiet Korean indie streetwear referencing thisisneverthat SP archive aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"SP Archive\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of off-white corduroy structured 6-panel cap, front direct view, \"DEMEBETA\" in gothic block lettering flat embroidery centered on front panel in off-white tone-on-tone thread, subtle self-color contrast, premium quiet Korean indie streetwear referencing thisisneverthat SP archive aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"SP Archive\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of off-white corduroy structured 6-panel cap, front direct view, \"DEMEBETA\" in gothic block lettering flat embroidery centered on front panel in off-white tone-on-tone thread, subtle self-color contrast, premium quiet Korean indie streetwear referencing thisisneverthat SP archive aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no contrasting color embroidery / no patches / no logo-heavy graphics"
    }
  },
  {
    "id": "B06",
    "slug": "b06",
    "name": "Post-Punk Quiet",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b06/b06-front.webp",
      "detail": "/assets/caps/b06/b06-detail.webp",
      "fit": "/assets/caps/b06/b06-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of black asymmetric unstructured 5-panel cap, front three-quarter view, small \"β\" symbol flat embroidery on front panel, no other graphics, asymmetric panel seam line visible on crown, premium quiet Korean indie streetwear referencing Brain Dead post-punk restraint aesthetic, cream paper background, soft natural light, realistic lightweight cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Post-Punk Quiet\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of black asymmetric unstructured 5-panel cap, front three-quarter view, small \"β\" symbol flat embroidery on front panel, no other graphics, asymmetric panel seam line visible on crown, premium quiet Korean indie streetwear referencing Brain Dead post-punk restraint aesthetic, cream paper background, soft natural light, realistic lightweight cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Post-Punk Quiet\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of black asymmetric unstructured 5-panel cap, front three-quarter view, small \"β\" symbol flat embroidery on front panel, no other graphics, asymmetric panel seam line visible on crown, premium quiet Korean indie streetwear referencing Brain Dead post-punk restraint aesthetic, cream paper background, soft natural light, realistic lightweight cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no additional wordmarks / no patches / no symmetric structured silhouette"
    }
  },
  {
    "id": "B07",
    "slug": "b07",
    "name": "Legacy A",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b07/b07-front.webp",
      "detail": "/assets/caps/b07/b07-detail.webp",
      "fit": "/assets/caps/b07/b07-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of burgundy unstructured dad hat, front three-quarter view, \"DB\" initials in large capital gothic-style flat embroidery on front panel in cream thread, antique brass metal buckle closure at rear, premium quiet Korean indie streetwear referencing Awake NY legacy collegiate aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Legacy A\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of burgundy unstructured dad hat, front three-quarter view, \"DB\" initials in large capital gothic-style flat embroidery on front panel in cream thread, antique brass metal buckle closure at rear, premium quiet Korean indie streetwear referencing Awake NY legacy collegiate aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Legacy A\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of burgundy unstructured dad hat, front three-quarter view, \"DB\" initials in large capital gothic-style flat embroidery on front panel in cream thread, antique brass metal buckle closure at rear, premium quiet Korean indie streetwear referencing Awake NY legacy collegiate aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no puff embroidery / no patches / no plastic buckle"
    }
  },
  {
    "id": "B08",
    "slug": "b08",
    "name": "Vintage American DB",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b08/b08-front.webp",
      "detail": "/assets/caps/b08/b08-detail.webp",
      "fit": "/assets/caps/b08/b08-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of duck canvas khaki structured 6-panel cap, front three-quarter view, small woven label on front panel with \"DB / 2021 / 성수\" text in two-color vintage Americana style, duck canvas surface with tight dense weave texture, premium quiet Korean indie streetwear referencing HUMAN MADE vintage American workwear aesthetic, cream paper background, soft natural light, realistic duck canvas texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Vintage American DB\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of duck canvas khaki structured 6-panel cap, front three-quarter view, small woven label on front panel with \"DB / 2021 / 성수\" text in two-color vintage Americana style, duck canvas surface with tight dense weave texture, premium quiet Korean indie streetwear referencing HUMAN MADE vintage American workwear aesthetic, cream paper background, soft natural light, realistic duck canvas texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Vintage American DB\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of duck canvas khaki structured 6-panel cap, front three-quarter view, small woven label on front panel with \"DB / 2021 / 성수\" text in two-color vintage Americana style, duck canvas surface with tight dense weave texture, premium quiet Korean indie streetwear referencing HUMAN MADE vintage American workwear aesthetic, cream paper background, soft natural light, realistic duck canvas texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no embroidery directly on cap / no reflective material / no bold graphic patches"
    }
  },
  {
    "id": "B09",
    "slug": "b09",
    "name": "Club De Meta",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b09/b09-front.webp",
      "detail": "/assets/caps/b09/b09-detail.webp",
      "fit": "/assets/caps/b09/b09-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of cream structured dad hat, front direct view, \"CLUB DEMEBETA\" in arch embroidery layout in navy thread centered on front panel in clean collegiate arch style, premium quiet Korean indie streetwear referencing Sporty & Rich club aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Club De Meta\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of cream structured dad hat, front direct view, \"CLUB DEMEBETA\" in arch embroidery layout in navy thread centered on front panel in clean collegiate arch style, premium quiet Korean indie streetwear referencing Sporty & Rich club aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Club De Meta\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of cream structured dad hat, front direct view, \"CLUB DEMEBETA\" in arch embroidery layout in navy thread centered on front panel in clean collegiate arch style, premium quiet Korean indie streetwear referencing Sporty & Rich club aesthetic, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no patches / no puff embroidery / no additional side graphics"
    }
  },
  {
    "id": "B10",
    "slug": "b10",
    "name": "Ivy Made in Seongsu",
    "family": "B",
    "section": "Block 3 비슷 브랜드 톤 10",
    "sourceFile": "PROMPTS_REMAINING_60.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/b10/b10-front.webp",
      "detail": "/assets/caps/b10/b10-detail.webp",
      "fit": "/assets/caps/b10/b10-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of olive and navy two-tone structured corduroy 6-panel cap with olive crown and navy brim, front three-quarter view, \"Made in Seongsu Seoul\" woven label on interior brim in small ivy-style serif lettering, clean exterior with no visible front graphic, premium quiet Korean indie streetwear referencing BEAMS Plus Ivy aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Ivy Made in Seongsu\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of olive and navy two-tone structured corduroy 6-panel cap with olive crown and navy brim, front three-quarter view, \"Made in Seongsu Seoul\" woven label on interior brim in small ivy-style serif lettering, clean exterior with no visible front graphic, premium quiet Korean indie streetwear referencing BEAMS Plus Ivy aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Ivy Made in Seongsu\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of olive and navy two-tone structured corduroy 6-panel cap with olive crown and navy brim, front three-quarter view, \"Made in Seongsu Seoul\" woven label on interior brim in small ivy-style serif lettering, clean exterior with no visible front graphic, premium quiet Korean indie streetwear referencing BEAMS Plus Ivy aesthetic, cream paper background, soft natural light, realistic fine-wale corduroy texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "no exterior embroidery or patches / no logo on front panel / no single-color construction"
    }
  },
  {
    "id": "N01",
    "slug": "n01",
    "name": "Seongsu Fisherman",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n01/n01-front.webp",
      "detail": "/assets/caps/n01/n01-detail.webp",
      "fit": "/assets/caps/n01/n01-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of an off-white fisherman beanie with a short rolled-up cuff, front view, simple unembellished knit fabric, the only detail is a single small scratched silver rivet placed at the rolled cuff edge, no embroidery, no text, no logo, premium quiet luxury Korean indie streetwear, cream paper background, soft natural light, realistic chunky knit texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Seongsu Fisherman\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of an off-white fisherman beanie with a short rolled-up cuff, front view, simple unembellished knit fabric, the only detail is a single small scratched silver rivet placed at the rolled cuff edge, no embroidery, no text, no logo, premium quiet luxury Korean indie streetwear, cream paper background, soft natural light, realistic chunky knit texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Seongsu Fisherman\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of an off-white fisherman beanie with a short rolled-up cuff, front view, simple unembellished knit fabric, the only detail is a single small scratched silver rivet placed at the rolled cuff edge, no embroidery, no text, no logo, premium quiet luxury Korean indie streetwear, cream paper background, soft natural light, realistic chunky knit texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "일반 비니 (롤업 컷프 명확). 리벳 누락 금지. 로고/텍스트 등장 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N02",
    "slug": "n02",
    "name": "Aero-Beta Cycling",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n02/n02-front.webp",
      "detail": "/assets/caps/n02/n02-detail.webp",
      "fit": "/assets/caps/n02/n02-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a charcoal gray cycling cap with a short flip-up brim, front view with the brim flipped up to reveal the underside, the cap exterior is completely blank with no logo, the brim underside has small fluorescent cream-colored \"BETA\" text screen-printed, premium minimal sports streetwear, cream paper background, soft natural light, realistic cotton fabric texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Aero-Beta Cycling\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a charcoal gray cycling cap with a short flip-up brim, front view with the brim flipped up to reveal the underside, the cap exterior is completely blank with no logo, the brim underside has small fluorescent cream-colored \"BETA\" text screen-printed, premium minimal sports streetwear, cream paper background, soft natural light, realistic cotton fabric texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Aero-Beta Cycling\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a charcoal gray cycling cap with a short flip-up brim, front view with the brim flipped up to reveal the underside, the cap exterior is completely blank with no logo, the brim underside has small fluorescent cream-colored \"BETA\" text screen-printed, premium minimal sports streetwear, cream paper background, soft natural light, realistic cotton fabric texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "일반 볼캡 (사이클링 캡 형태 명확 - 짧은 챙). 외부 로고 추가 금지. 챙 안쪽 BETA 텍스트 누락 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N03",
    "slug": "n03",
    "name": "Lamp-shade Bucket",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n03/n03-front.webp",
      "detail": "/assets/caps/n03/n03-detail.webp",
      "fit": "/assets/caps/n03/n03-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a mud brown deep-down oversized bucket hat with an exaggeratedly long drooping brim resembling a lampshade silhouette, front view, no embroidery, no text, no logo, the form itself is the design statement, premium quiet luxury Korean indie streetwear, cream paper background, soft natural light, realistic heavy cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Lamp-shade Bucket\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a mud brown deep-down oversized bucket hat with an exaggeratedly long drooping brim resembling a lampshade silhouette, front view, no embroidery, no text, no logo, the form itself is the design statement, premium quiet luxury Korean indie streetwear, cream paper background, soft natural light, realistic heavy cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Lamp-shade Bucket\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a mud brown deep-down oversized bucket hat with an exaggeratedly long drooping brim resembling a lampshade silhouette, front view, no embroidery, no text, no logo, the form itself is the design statement, premium quiet luxury Korean indie streetwear, cream paper background, soft natural light, realistic heavy cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "일반 버킷햇 (램프셰이드 실루엣 명확 - 챙이 길게 아래로). 장식 추가 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N04",
    "slug": "n04",
    "name": "Tech-Visor 2021",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n04/n04-front.webp",
      "detail": "/assets/caps/n04/n04-detail.webp",
      "fit": "/assets/caps/n04/n04-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a black tactical sun visor with the head strap replaced by techwear nylon webbing, three-quarter angle, magnetic buckle at the back, paracord adjuster cord, no logo on the brim, premium streetwear tech aesthetic, cream paper background, controlled studio lighting, realistic matte nylon texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Tech-Visor 2021\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a black tactical sun visor with the head strap replaced by techwear nylon webbing, three-quarter angle, magnetic buckle at the back, paracord adjuster cord, no logo on the brim, premium streetwear tech aesthetic, cream paper background, controlled studio lighting, realistic matte nylon texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Tech-Visor 2021\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a black tactical sun visor with the head strap replaced by techwear nylon webbing, three-quarter angle, magnetic buckle at the back, paracord adjuster cord, no logo on the brim, premium streetwear tech aesthetic, cream paper background, controlled studio lighting, realistic matte nylon texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "일반 캡 (선바이저 형태 - 크라운 없음). 마그네틱 버클/파라코드 누락 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N05",
    "slug": "n05",
    "name": "Aero Mesh Skater",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n05/n05-front.webp",
      "detail": "/assets/caps/n05/n05-detail.webp",
      "fit": "/assets/caps/n05/n05-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a sage green low-profile unstructured skater cap, front view, the three front panels are made of breathable mesh fabric while the rest is cotton twill (two materials clearly visible), back metal buckle strap features a small white woven \"DB\" label, premium minimal Korean indie streetwear, cream paper background, soft natural light, realistic mesh and twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Aero Mesh Skater\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a sage green low-profile unstructured skater cap, front view, the three front panels are made of breathable mesh fabric while the rest is cotton twill (two materials clearly visible), back metal buckle strap features a small white woven \"DB\" label, premium minimal Korean indie streetwear, cream paper background, soft natural light, realistic mesh and twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Aero Mesh Skater\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a sage green low-profile unstructured skater cap, front view, the three front panels are made of breathable mesh fabric while the rest is cotton twill (two materials clearly visible), back metal buckle strap features a small white woven \"DB\" label, premium minimal Korean indie streetwear, cream paper background, soft natural light, realistic mesh and twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "일반 스냅백 (로우프로파일 언스트럭쳐드 명확). 메쉬 패널 누락 금지. 전면 로고 추가 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N06",
    "slug": "n06",
    "name": "Jacquard Loom Bucket",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n06/n06-front.webp",
      "detail": "/assets/caps/n06/n06-detail.webp",
      "fit": "/assets/caps/n06/n06-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a cream ivory bucket hat made of jacquard-woven fabric where the \"DB\" monogram pattern is woven directly into the cloth itself, the pattern emerges only through angled light reflection on the textured weave, no embroidery, no printing, just the woven fabric, premium quiet luxury Korean indie streetwear, cream paper background, controlled directional light revealing the jacquard pattern, realistic woven texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Jacquard Loom Bucket\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a cream ivory bucket hat made of jacquard-woven fabric where the \"DB\" monogram pattern is woven directly into the cloth itself, the pattern emerges only through angled light reflection on the textured weave, no embroidery, no printing, just the woven fabric, premium quiet luxury Korean indie streetwear, cream paper background, controlled directional light revealing the jacquard pattern, realistic woven texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Jacquard Loom Bucket\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a cream ivory bucket hat made of jacquard-woven fabric where the \"DB\" monogram pattern is woven directly into the cloth itself, the pattern emerges only through angled light reflection on the textured weave, no embroidery, no printing, just the woven fabric, premium quiet luxury Korean indie streetwear, cream paper background, controlled directional light revealing the jacquard pattern, realistic woven texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "자수/프린트 등장 금지 (직조만). 패턴이 너무 선명하면 안 됨 (광반사로만 인식). 사람 등장 금지."
    }
  },
  {
    "id": "N07",
    "slug": "n07",
    "name": "Wavy Corduroy Camp",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n07/n07-front.webp",
      "detail": "/assets/caps/n07/n07-detail.webp",
      "fit": "/assets/caps/n07/n07-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of an olive dark 5-panel camp cap made entirely of wide-wale corduroy, each panel has its corduroy wale direction set differently (some horizontal, some vertical, some diagonal) creating a patchwork rhythm of textures, no embroidery or logo, the corduroy wale pattern itself is the design, cream paper background, soft natural light, realistic wide-wale corduroy texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Wavy Corduroy Camp\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of an olive dark 5-panel camp cap made entirely of wide-wale corduroy, each panel has its corduroy wale direction set differently (some horizontal, some vertical, some diagonal) creating a patchwork rhythm of textures, no embroidery or logo, the corduroy wale pattern itself is the design, cream paper background, soft natural light, realistic wide-wale corduroy texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Wavy Corduroy Camp\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of an olive dark 5-panel camp cap made entirely of wide-wale corduroy, each panel has its corduroy wale direction set differently (some horizontal, some vertical, some diagonal) creating a patchwork rhythm of textures, no embroidery or logo, the corduroy wale pattern itself is the design, cream paper background, soft natural light, realistic wide-wale corduroy texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "일반 솔리드 코듀로이 금지 (패널별 결 방향 다르게). 자수/로고 추가 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N08",
    "slug": "n08",
    "name": "Cloud Bouclé Hat",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n08/n08-front.webp",
      "detail": "/assets/caps/n08/n08-detail.webp",
      "fit": "/assets/caps/n08/n08-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of an oatmeal beige oversized knit bucket hat made entirely of bouclé yarn, the surface has a fluffy three-dimensional bubble texture, no logo, no text, the bouclé texture itself is the entire design, premium FW season Korean indie streetwear, cream paper background, soft natural light revealing the 3D yarn texture, realistic bouclé knit detail, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Cloud Bouclé Hat\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of an oatmeal beige oversized knit bucket hat made entirely of bouclé yarn, the surface has a fluffy three-dimensional bubble texture, no logo, no text, the bouclé texture itself is the entire design, premium FW season Korean indie streetwear, cream paper background, soft natural light revealing the 3D yarn texture, realistic bouclé knit detail, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Cloud Bouclé Hat\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of an oatmeal beige oversized knit bucket hat made entirely of bouclé yarn, the surface has a fluffy three-dimensional bubble texture, no logo, no text, the bouclé texture itself is the entire design, premium FW season Korean indie streetwear, cream paper background, soft natural light revealing the 3D yarn texture, realistic bouclé knit detail, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "매끄러운 원단 금지 (보클레 입체 표면 명확). 로고 추가 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N09",
    "slug": "n09",
    "name": "Sherpa Trooper",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n09/n09-front.webp",
      "detail": "/assets/caps/n09/n09-detail.webp",
      "fit": "/assets/caps/n09/n09-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a winter trooper hat with ear flaps, the outer shell is black crinkly nylon while the ear flaps are abundant ivory sherpa fleece, three-quarter angle showing both materials, extreme texture contrast between nylon and sherpa, no logo, premium FW Korean indie streetwear, cream paper background, soft natural light, realistic nylon sheen and sherpa fluff, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Sherpa Trooper\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a winter trooper hat with ear flaps, the outer shell is black crinkly nylon while the ear flaps are abundant ivory sherpa fleece, three-quarter angle showing both materials, extreme texture contrast between nylon and sherpa, no logo, premium FW Korean indie streetwear, cream paper background, soft natural light, realistic nylon sheen and sherpa fluff, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Sherpa Trooper\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a winter trooper hat with ear flaps, the outer shell is black crinkly nylon while the ear flaps are abundant ivory sherpa fleece, three-quarter angle showing both materials, extreme texture contrast between nylon and sherpa, no logo, premium FW Korean indie streetwear, cream paper background, soft natural light, realistic nylon sheen and sherpa fluff, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "이어플랩 누락 금지. 단일 소재 금지 (나일론+셰르파 대비 명확). 사람 등장 금지."
    }
  },
  {
    "id": "N10",
    "slug": "n10",
    "name": "Quiet Capsule",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n10/n10-front.webp",
      "detail": "/assets/caps/n10/n10-detail.webp",
      "fit": "/assets/caps/n10/n10-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a dusty rose 6-panel dad cap, three-quarter back angle showing the back adjuster strap, the entire exterior is completely blank with no logo, no text, no embroidery, the only signature detail is the back strap end wrapped tightly with thick burgundy thread, premium quiet flex Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Quiet Capsule\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a dusty rose 6-panel dad cap, three-quarter back angle showing the back adjuster strap, the entire exterior is completely blank with no logo, no text, no embroidery, the only signature detail is the back strap end wrapped tightly with thick burgundy thread, premium quiet flex Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Quiet Capsule\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a dusty rose 6-panel dad cap, three-quarter back angle showing the back adjuster strap, the entire exterior is completely blank with no logo, no text, no embroidery, the only signature detail is the back strap end wrapped tightly with thick burgundy thread, premium quiet flex Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "외부 자수/로고 등장 금지 (완전 무로고). 후면 스트랩 끝 실 감기 누락 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N11",
    "slug": "n11",
    "name": "Tonal Clash",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n11/n11-front.webp",
      "detail": "/assets/caps/n11/n11-detail.webp",
      "fit": "/assets/caps/n11/n11-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a deep navy 6-panel dad cap where the crown is made of matte wool felt and the brim is made of the exact same navy color but in glossy satin fabric, creating a subtle reflectance contrast between the two surfaces, no logo, no text, the material difference is the design, premium quiet luxury Korean indie streetwear, cream paper background, controlled side lighting emphasizing the matte/satin contrast, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Tonal Clash\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a deep navy 6-panel dad cap where the crown is made of matte wool felt and the brim is made of the exact same navy color but in glossy satin fabric, creating a subtle reflectance contrast between the two surfaces, no logo, no text, the material difference is the design, premium quiet luxury Korean indie streetwear, cream paper background, controlled side lighting emphasizing the matte/satin contrast, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Tonal Clash\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a deep navy 6-panel dad cap where the crown is made of matte wool felt and the brim is made of the exact same navy color but in glossy satin fabric, creating a subtle reflectance contrast between the two surfaces, no logo, no text, the material difference is the design, premium quiet luxury Korean indie streetwear, cream paper background, controlled side lighting emphasizing the matte/satin contrast, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "색상 대비 금지 (동색 유지). 자수/로고 추가 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N12",
    "slug": "n12",
    "name": "Blueprint 2021",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n12/n12-front.webp",
      "detail": "/assets/caps/n12/n12-detail.webp",
      "fit": "/assets/caps/n12/n12-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a white 5-panel camp cap with thin technical-drawing-style white lines printed across the exterior surface, the lines show the actual pattern cutting guides, stitching positions, and measurement numbers in millimeters as if the production blueprint was directly printed on the cap, premium archive concept Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Blueprint 2021\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a white 5-panel camp cap with thin technical-drawing-style white lines printed across the exterior surface, the lines show the actual pattern cutting guides, stitching positions, and measurement numbers in millimeters as if the production blueprint was directly printed on the cap, premium archive concept Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Blueprint 2021\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a white 5-panel camp cap with thin technical-drawing-style white lines printed across the exterior surface, the lines show the actual pattern cutting guides, stitching positions, and measurement numbers in millimeters as if the production blueprint was directly printed on the cap, premium archive concept Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "자수 추가 금지 (얇은 라인 프린트만). 라인이 너무 굵으면 안 됨 (테크 드로잉 펜선 두께). 사람 등장 금지."
    }
  },
  {
    "id": "N13",
    "slug": "n13",
    "name": "Zero-Waste Beta",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n13/n13-front.webp",
      "detail": "/assets/caps/n13/n13-detail.webp",
      "fit": "/assets/caps/n13/n13-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a 6-panel dad cap made entirely of patchwork from multiple seasons' fabric leftovers, each panel a different fabric color and texture (olive cotton, cream linen, navy denim, beige corduroy mix), side has a small embroidered \"1/50\" edition number, premium upcycle Korean indie streetwear, cream paper background, soft natural light, realistic mixed fabric textures, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Zero-Waste Beta\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a 6-panel dad cap made entirely of patchwork from multiple seasons' fabric leftovers, each panel a different fabric color and texture (olive cotton, cream linen, navy denim, beige corduroy mix), side has a small embroidered \"1/50\" edition number, premium upcycle Korean indie streetwear, cream paper background, soft natural light, realistic mixed fabric textures, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Zero-Waste Beta\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a 6-panel dad cap made entirely of patchwork from multiple seasons' fabric leftovers, each panel a different fabric color and texture (olive cotton, cream linen, navy denim, beige corduroy mix), side has a small embroidered \"1/50\" edition number, premium upcycle Korean indie streetwear, cream paper background, soft natural light, realistic mixed fabric textures, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "균일 원단 금지 (패치워크 명확). 에디션 번호 누락 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N14",
    "slug": "n14",
    "name": "Hidden Film Bucket",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n14/n14-front.webp",
      "detail": "/assets/caps/n14/n14-detail.webp",
      "fit": "/assets/caps/n14/n14-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a solid black bucket hat, three-quarter angle with the hat tilted slightly to reveal the interior lining, the exterior is completely blank with no logo, the entire interior crown lining is printed with a high-resolution black-and-white film photograph of a Seongsu Seoul back alley, premium collaboration Korean indie streetwear, cream paper background, soft natural light, realistic cotton exterior and detailed photo print interior, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Hidden Film Bucket\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a solid black bucket hat, three-quarter angle with the hat tilted slightly to reveal the interior lining, the exterior is completely blank with no logo, the entire interior crown lining is printed with a high-resolution black-and-white film photograph of a Seongsu Seoul back alley, premium collaboration Korean indie streetwear, cream paper background, soft natural light, realistic cotton exterior and detailed photo print interior, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Hidden Film Bucket\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a solid black bucket hat, three-quarter angle with the hat tilted slightly to reveal the interior lining, the exterior is completely blank with no logo, the entire interior crown lining is printed with a high-resolution black-and-white film photograph of a Seongsu Seoul back alley, premium collaboration Korean indie streetwear, cream paper background, soft natural light, realistic cotton exterior and detailed photo print interior, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "외부 로고 등장 금지. 내부 사진 누락 금지. 사진이 컬러면 안 됨 (흑백 필름). 사람 등장 금지."
    }
  },
  {
    "id": "N15",
    "slug": "n15",
    "name": "Dancheong Blackwork",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n15/n15-front.webp",
      "detail": "/assets/caps/n15/n15-detail.webp",
      "fit": "/assets/caps/n15/n15-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of an off-white 6-panel dad cap, three-quarter angle, intricate Korean traditional dancheong patterns reinterpreted in blackwork tattoo style printed across the side and back panels extending onto the brim, using dense fine black dot patterns, the front panel is mostly clean with the pattern starting from the sides, premium tattoo collaboration Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill with intricate detail, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Dancheong Blackwork\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of an off-white 6-panel dad cap, three-quarter angle, intricate Korean traditional dancheong patterns reinterpreted in blackwork tattoo style printed across the side and back panels extending onto the brim, using dense fine black dot patterns, the front panel is mostly clean with the pattern starting from the sides, premium tattoo collaboration Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill with intricate detail, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Dancheong Blackwork\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of an off-white 6-panel dad cap, three-quarter angle, intricate Korean traditional dancheong patterns reinterpreted in blackwork tattoo style printed across the side and back panels extending onto the brim, using dense fine black dot patterns, the front panel is mostly clean with the pattern starting from the sides, premium tattoo collaboration Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill with intricate detail, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "단청 색상 (빨강/파랑/노랑) 사용 금지 (블랙 도트만). 패턴 너무 단순하면 안 됨 (정교한 도트). 사람 등장 금지."
    }
  },
  {
    "id": "N16",
    "slug": "n16",
    "name": "Silver 925 Punk Pin",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n16/n16-front.webp",
      "detail": "/assets/caps/n16/n16-detail.webp",
      "fit": "/assets/caps/n16/n16-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a matte black 6-panel dad cap, front view, the front panel has no embroidery but instead features a single handcrafted 925 silver symbol pendant attached like a safety pin/piercing detachable accessory, the silver pendant has slightly oxidized patina, premium punk craft Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and oxidized silver texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Silver 925 Punk Pin\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a matte black 6-panel dad cap, front view, the front panel has no embroidery but instead features a single handcrafted 925 silver symbol pendant attached like a safety pin/piercing detachable accessory, the silver pendant has slightly oxidized patina, premium punk craft Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and oxidized silver texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Silver 925 Punk Pin\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a matte black 6-panel dad cap, front view, the front panel has no embroidery but instead features a single handcrafted 925 silver symbol pendant attached like a safety pin/piercing detachable accessory, the silver pendant has slightly oxidized patina, premium punk craft Korean indie streetwear, cream paper background, soft natural light, realistic cotton twill and oxidized silver texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "자수 추가 금지 (실버 펜던트만). 펜던트가 큰 정형 로고면 안 됨 (수제 펑크 감성). 사람 등장 금지."
    }
  },
  {
    "id": "N17",
    "slug": "n17",
    "name": "Splatter Reflect",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n17/n17-front.webp",
      "detail": "/assets/caps/n17/n17-detail.webp",
      "fit": "/assets/caps/n17/n17-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a black trucker cap, front view, the front panels have irregular splatter pattern made of 3M reflective material applied unevenly (like paint splatters), in daylight the splatter appears as subtle gray spots but the photo captures camera flash reflection making the splatter pattern bright and visible, premium streetwear with reflective tech, cream paper background, sharp flash lighting from camera, realistic cotton twill with reflective splatter, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Splatter Reflect\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a black trucker cap, front view, the front panels have irregular splatter pattern made of 3M reflective material applied unevenly (like paint splatters), in daylight the splatter appears as subtle gray spots but the photo captures camera flash reflection making the splatter pattern bright and visible, premium streetwear with reflective tech, cream paper background, sharp flash lighting from camera, realistic cotton twill with reflective splatter, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Splatter Reflect\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a black trucker cap, front view, the front panels have irregular splatter pattern made of 3M reflective material applied unevenly (like paint splatters), in daylight the splatter appears as subtle gray spots but the photo captures camera flash reflection making the splatter pattern bright and visible, premium streetwear with reflective tech, cream paper background, sharp flash lighting from camera, realistic cotton twill with reflective splatter, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "균일한 패턴 금지 (불규칙 스플래터). 일반 자수면 안 됨 (3M 리플렉티브 명확). 사람 등장 금지."
    }
  },
  {
    "id": "N18",
    "slug": "n18",
    "name": "Reversible Bucket DB",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n18/n18-front.webp",
      "detail": "/assets/caps/n18/n18-detail.webp",
      "fit": "/assets/caps/n18/n18-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph showing two versions of the same reversible bucket hat side by side, the A side is solid black with only a tiny minimal woven label, the B side is fully jacquard-patterned with archive typography all over, premium reversible Korean indie streetwear, cream paper background, soft natural light, both versions clearly visible, realistic cotton fabric texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Reversible Bucket DB\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph showing two versions of the same reversible bucket hat side by side, the A side is solid black with only a tiny minimal woven label, the B side is fully jacquard-patterned with archive typography all over, premium reversible Korean indie streetwear, cream paper background, soft natural light, both versions clearly visible, realistic cotton fabric texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Reversible Bucket DB\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph showing two versions of the same reversible bucket hat side by side, the A side is solid black with only a tiny minimal woven label, the B side is fully jacquard-patterned with archive typography all over, premium reversible Korean indie streetwear, cream paper background, soft natural light, both versions clearly visible, realistic cotton fabric texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "1개만 보이면 안 됨 (양면 둘 다 보이게). 같은 디자인 양면이면 안 됨 (대비 명확). 사람 등장 금지."
    }
  },
  {
    "id": "N19",
    "slug": "n19",
    "name": "Shape-Memory Wire Bucket",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n19/n19-front.webp",
      "detail": "/assets/caps/n19/n19-detail.webp",
      "fit": "/assets/caps/n19/n19-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph of a khaki olive bucket hat where the brim has been shaped into an asymmetric wavy form using internal shape-memory wire, front view, the brim is curved up on one side and down on the other in a sculptural way, no logo, premium tech-craft Korean indie streetwear, cream paper background, soft natural light, realistic cotton fabric showing the sculpted brim, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Shape-Memory Wire Bucket\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph of a khaki olive bucket hat where the brim has been shaped into an asymmetric wavy form using internal shape-memory wire, front view, the brim is curved up on one side and down on the other in a sculptural way, no logo, premium tech-craft Korean indie streetwear, cream paper background, soft natural light, realistic cotton fabric showing the sculpted brim, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Shape-Memory Wire Bucket\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph of a khaki olive bucket hat where the brim has been shaped into an asymmetric wavy form using internal shape-memory wire, front view, the brim is curved up on one side and down on the other in a sculptural way, no logo, premium tech-craft Korean indie streetwear, cream paper background, soft natural light, realistic cotton fabric showing the sculpted brim, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "평평한 챙 금지 (형상기억 와이어로 비대칭 변형). 로고 추가 금지. 사람 등장 금지."
    }
  },
  {
    "id": "N20",
    "slug": "n20",
    "name": "Modular Crown Cap",
    "family": "N",
    "section": "New 20 Styles",
    "sourceFile": "PROMPTS_20_NEW_PHOTOREALISTIC.md",
    "status": "prompt_ready",
    "assets": {
      "front": "/assets/caps/n20/n20-front.webp",
      "detail": "/assets/caps/n20/n20-detail.webp",
      "fit": "/assets/caps/n20/n20-fit.webp"
    },
    "prompts": {
      "front": "Photorealistic studio product photograph showing two configurations of a modular cap side by side, configuration A is a complete navy 6-panel ball cap, configuration B is the same cap with the crown panels separated via snap buttons revealing a cream colored sun visor base, premium modular Korean indie streetwear, cream paper background, soft natural light, snap buttons clearly visible on both configurations, realistic cotton twill texture, no model.",
      "detail": "Photorealistic macro detail product photograph for DEMEBETA cap design \"Modular Crown Cap\". Use the same materials, logo treatment, embroidery/patch/print technique, colors, and construction described here: Photorealistic studio product photograph showing two configurations of a modular cap side by side, configuration A is a complete navy 6-panel ball cap, configuration B is the same cap with the crown panels separated via snap buttons revealing a cream colored sun visor base, premium modular Korean indie streetwear, cream paper background, soft natural light, snap buttons clearly visible on both configurations, realistic cotton twill texture, no model. Crop tightly on the logo or key construction detail, show stitch depth, fabric weave, thread sheen, edge finishing, and real manufacturing texture on a cream paper studio background. No model, no hands, no extra text beyond the design itself.",
      "fit": "Photorealistic model fitting cut for DEMEBETA cap design \"Modular Crown Cap\". A Korean streetwear model wearing the exact cap design described here: Photorealistic studio product photograph showing two configurations of a modular cap side by side, configuration A is a complete navy 6-panel ball cap, configuration B is the same cap with the crown panels separated via snap buttons revealing a cream colored sun visor base, premium modular Korean indie streetwear, cream paper background, soft natural light, snap buttons clearly visible on both configurations, realistic cotton twill texture, no model. Editorial lookbook styling, neutral layered clothing, natural skin texture, relaxed pose, Seongsu quiet luxury mood, soft overcast daylight, Kodak Gold expired film tone, cap design clearly visible, no extra logos, no distorted typography, no celebrity likeness.",
      "negative": "1개 컨피그만 보이면 안 됨 (분리/결합 양쪽). 스냅버튼 누락 금지. 사람 등장 금지."
    }
  }
];

export const capProductionFamilies = [...new Set(capProductionItems.map((item) => item.family))];
export const capProductionSections = [...new Set(capProductionItems.map((item) => item.section))];
