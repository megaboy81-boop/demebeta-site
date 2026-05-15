export type BetaStatus = 'FAIL' | 'ON_HOLD' | 'CANDIDATE';

export interface BetaItem {
  id: string;
  serial: string;
  name: string;
  status: BetaStatus;
  reason: string;
  color: string;
  technique: string;
}

export const betaItems: BetaItem[] = [
  { id: 'b001', serial: 'BETA-THERMO-001', name: 'THERMO_INK v1', status: 'FAIL', reason: '열반응 잉크 내구성 기준 미달. 30회 세탁 후 박락 90%', color: '#722F37', technique: 'Thermochromic Print' },
  { id: 'b002', serial: 'BETA-UV-001', name: 'UV_ARCH v1', status: 'FAIL', reason: 'UV 반응 코팅 기술적 구현 불가 (국내 업체 미보유)', color: '#3A6B6B', technique: 'UV Reactive Coating' },
  { id: 'b003', serial: 'BETA-DISSOLVE-001', name: 'DISSOLVE_STITCH', status: 'ON_HOLD', reason: '수용성 자수 시험 중. 결과 2026Q3 예정', color: '#D4B5B0', technique: 'Water-Soluble Embroidery' },
  { id: 'b004', serial: 'BETA-REFLECTIVE-001', name: 'REFLECT_LAYER', status: 'CANDIDATE', reason: '재귀반사 원단 샘플 긍정적. 다음 시즌 검토', color: '#9A9590', technique: 'Retroreflective Fabric' },
  { id: 'b005', serial: 'BETA-NEON-001', name: 'NEON_CHAIN v1', status: 'FAIL', reason: '네온 체인스티치 → 브랜드 아이덴티티 부합 X', color: '#C8A882', technique: 'Neon Chain Stitch' },
  { id: 'b006', serial: 'BETA-LASER-001', name: 'LASER_CUT_PATCH', status: 'ON_HOLD', reason: '레이저 커팅 패치. 단가 과다 (1개당 ₩18,000)', color: '#555D50', technique: 'Laser Cut Patch' },
  { id: 'b007', serial: 'BETA-CARBON-001', name: 'CARBON_LABEL', status: 'CANDIDATE', reason: '탄소 섬유 라벨. 질감 독특. 소량 생산 가능성 검토 중', color: '#2E2E2E', technique: 'Carbon Fiber Label' },
  { id: 'b008', serial: 'BETA-WASHI-001', name: 'WASHI_PANEL', status: 'FAIL', reason: '화지 원단 패널. 방수 처리 불가. 실용성 X', color: '#EDE8DC', technique: 'Washi Paper Panel' },
];
