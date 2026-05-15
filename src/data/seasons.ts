export interface Season {
  slug: string;
  code: string;
  label: string;
  pieceCount: number;
  releaseDate: string;
  note: string;
  color: string;
}

export const seasons: Season[] = [
  {
    slug: 'ss26',
    code: 'SS26',
    label: 'Spring/Summer 2026',
    pieceCount: 12,
    releaseDate: '2026.03',
    note: '성수 골목의 빛과 그림자. 빛바랜 올리브와 더스티 핑크가 공존하는 시즌.',
    color: '#8B9B7A',
  },
  {
    slug: 'fw25',
    code: 'FW25',
    label: 'Fall/Winter 2025',
    pieceCount: 10,
    releaseDate: '2025.09',
    note: '아카이브 필름 컬러. 버건디와 딥 차콜이 중심.',
    color: '#722F37',
  },
  {
    slug: 'ss25',
    code: 'SS25',
    label: 'Spring/Summer 2025',
    pieceCount: 9,
    releaseDate: '2025.03',
    note: '클린 베이스에 모노 엠브로이더리. 절제의 시즌.',
    color: '#D4B5B0',
  },
  {
    slug: 'fw24',
    code: 'FW24',
    label: 'Fall/Winter 2024',
    pieceCount: 11,
    releaseDate: '2024.09',
    note: '밀리터리 카키와 워시드 블랙의 레이어링.',
    color: '#5C6650',
  },
  {
    slug: 'ss24',
    code: 'SS24',
    label: 'Spring/Summer 2024',
    pieceCount: 8,
    releaseDate: '2024.03',
    note: '크림 베이스. 첫 번째 패치 시리즈.',
    color: '#C8A882',
  },
  {
    slug: 'aw21',
    code: 'AW21',
    label: 'Autumn/Winter 2021 (창립)',
    pieceCount: 6,
    releaseDate: '2021.10',
    note: '브랜드 첫 시즌. 성수에서의 시작.',
    color: '#3D3530',
  },
];

export const seasonDesigns: Record<string, { id: string; name: string; color: string }[]> = {
  ss26: [
    { id: 'DMB-SS26-001', name: 'Seongsu Alley Trucker', color: '#8B9B7A' },
    { id: 'DMB-SS26-002', name: 'Dusty Archive Snap', color: '#D4B5B0' },
    { id: 'DMB-SS26-003', name: 'Olive Film Daddy', color: '#555D50' },
    { id: 'DMB-SS26-004', name: 'Expired Roll Trucker', color: '#C8A882' },
    { id: 'DMB-SS26-005', name: 'Quiet Layer Snap', color: '#9A9590' },
    { id: 'DMB-SS26-006', name: 'Linen Mesh Five', color: '#EDE8DC' },
    { id: 'DMB-SS26-007', name: 'Archive Khaki Snap', color: '#A09070' },
    { id: 'DMB-SS26-008', name: 'Grain & Salt Trucker', color: '#B8AD9E' },
  ],
};
