export type MaterialCategory = '자수기법' | '원단' | '부자재' | '컬러웨이';

export interface Material {
  id: string;
  name: string;
  nameEn: string;
  category: MaterialCategory;
  description: string;
  color: string;
  usedIn: string[]; // design serials
}

export const materials: Material[] = [
  { id: 'm001', name: '새틴 스티치', nameEn: 'Satin Stitch', category: '자수기법', description: '실이 평행하게 빽빽이 채워지는 기본 자수 기법. 광택감이 특징.', color: '#D4B5B0', usedIn: ['DMB-SS26-001', 'DMB-FW25-001'] },
  { id: 'm002', name: '체인스티치', nameEn: 'Chain Stitch', category: '자수기법', description: '고리 형태로 연결되는 체인 구조. 빈티지 느낌 강함.', color: '#8B9B7A', usedIn: ['DMB-SS26-001', 'DMB-SS26-006'] },
  { id: 'm003', name: '3D 퍼프', nameEn: '3D Puff Embroidery', category: '자수기법', description: '폼 소재 위에 자수. 입체적 볼륨감.', color: '#555D50', usedIn: ['DMB-SS26-002', 'DMB-FW25-004'] },
  { id: 'm004', name: 'PU 라벨', nameEn: 'PU Label', category: '부자재', description: '폴리우레탄 소재 라벨. 내구성 우수. 미니멀 엠보 로고에 적합.', color: '#2C2C2C', usedIn: ['DMB-FW25-002', 'DMB-SS25-003'] },
  { id: 'm005', name: '우븐 라벨', nameEn: 'Woven Label', category: '부자재', description: '직조 방식 라벨. 고급감. DEMEBETA 주력 마감.', color: '#C0A880', usedIn: ['DMB-SS26-002', 'DMB-FW25-003'] },
  { id: 'm006', name: '메탈 핀', nameEn: 'Metal Pin', category: '부자재', description: '황동 핀. 이니셜 또는 로고 각인. 시즌 한정 부착.', color: '#B89968', usedIn: ['DMB-FW25-001', 'DMB-AW21-001'] },
  { id: 'm007', name: '코튼 트윌', nameEn: 'Cotton Twill', category: '원단', description: '사선 직조 면 원단. 내구성과 드레이프 밸런스 우수.', color: '#EDE8DC', usedIn: ['DMB-SS26-001', 'DMB-AW21-001'] },
  { id: 'm008', name: '워시드 캔버스', nameEn: 'Washed Canvas', category: '원단', description: '워싱 처리로 소프트해진 캔버스. 빈티지 텍스처.', color: '#D4C9B0', usedIn: ['DMB-SS26-002', 'DMB-FW25-002'] },
  { id: 'm009', name: '코듀로이', nameEn: 'Corduroy', category: '원단', description: '골덴 직물. 폴/윈터 시즌 주력 소재.', color: '#8A8580', usedIn: ['DMB-FW25-002', 'DMB-FW25-004'] },
  { id: 'm010', name: '올리브 컬러웨이', nameEn: 'Faded Olive', category: '컬러웨이', description: '--accent-olive: #555D50. SS26 대표 컬러. 퇴색된 군용 올리브.', color: '#555D50', usedIn: ['DMB-SS26-001', 'DMB-SS26-003'] },
  { id: 'm011', name: '버건디 컬러웨이', nameEn: 'Archive Burgundy', category: '컬러웨이', description: '--accent-burgundy: #722F37. FW25 시그니처. 빛바랜 와인 레드.', color: '#722F37', usedIn: ['DMB-FW25-001', 'DMB-FW25-003'] },
  { id: 'm012', name: '더스티 핑크', nameEn: 'Dusty Rose', category: '컬러웨이', description: '--accent-dusty: #D4B5B0. SS26 서브 컬러. 퇴색된 핑크 베이지.', color: '#D4B5B0', usedIn: ['DMB-SS26-002', 'DMB-SS25-001'] },
];

export const categories: MaterialCategory[] = ['자수기법', '원단', '부자재', '컬러웨이'];
