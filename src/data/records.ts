export interface Record {
  id: string;
  serial: string;
  name: string;
  season: string;
  material: string;
  technique: string;
  status: 'RELEASED' | 'ARCHIVED' | 'SAMPLE';
  specs: {
    closure: string;
    brim: string;
    panels: string;
    fit: string;
  };
  color: string;
}

export const records: Record[] = [
  { id: 'r001', serial: 'DMB-SS26-001', name: 'Seongsu Alley Trucker', season: 'SS26', material: '100% Cotton Twill', technique: 'Chain Stitch Embroidery', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#8B9B7A' },
  { id: 'r002', serial: 'DMB-SS26-002', name: 'Dusty Archive Snap', season: 'SS26', material: 'Washed Canvas', technique: '3D Puff Embroidery', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#D4B5B0' },
  { id: 'r003', serial: 'DMB-FW25-001', name: 'Burgundy Film Cap', season: 'FW25', material: 'Wool Blend', technique: 'Woven Label', status: 'RELEASED', specs: { closure: 'Fitted', brim: 'Pre-curved', panels: '6-panel', fit: 'Mid' }, color: '#722F37' },
  { id: 'r004', serial: 'DMB-FW25-002', name: 'Dark Room Daddy', season: 'FW25', material: 'Corduroy', technique: 'PU Label', status: 'RELEASED', specs: { closure: 'Strap', brim: 'Unstructured', panels: '5-panel', fit: 'Low' }, color: '#2E2E2E' },
  { id: 'r005', serial: 'DMB-SS25-001', name: 'Mono Arch Trucker', season: 'SS25', material: 'Mesh Back / Twill Front', technique: 'Tonal Embroidery', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#F0EBE0' },
  { id: 'r006', serial: 'DMB-FW24-001', name: 'Military Layer Five', season: 'FW24', material: 'Cotton Canvas', technique: 'Patch + Embroidery', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '5-panel', fit: 'High' }, color: '#5C6650' },
  { id: 'r007', serial: 'DMB-SS24-001', name: 'Cream Patch Daddy', season: 'SS24', material: '100% Cotton', technique: 'Woven Patch', status: 'RELEASED', specs: { closure: 'Strap', brim: 'Soft', panels: '6-panel', fit: 'Low' }, color: '#EDE8DC' },
  { id: 'r008', serial: 'DMB-AW21-001', name: 'Origin Trucker', season: 'AW21', material: 'Cotton Twill', technique: 'Basic Embroidery', status: 'ARCHIVED', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#3D3530' },
  { id: 'r009', serial: 'DMB-SS26-003', name: 'Olive Film Daddy', season: 'SS26', material: 'Ripstop Nylon', technique: 'Silicon Label', status: 'RELEASED', specs: { closure: 'Strap', brim: 'Unstructured', panels: '6-panel', fit: 'Low' }, color: '#555D50' },
  { id: 'r010', serial: 'DMB-FW25-003', name: 'Expired Roll Snap', season: 'FW25', material: 'Washed Twill', technique: 'Distressed Print', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#C8A882' },
  // 20 more records
  { id: 'r011', serial: 'DMB-SS26-004', name: 'Linen Archive Five', season: 'SS26', material: 'Linen Blend', technique: 'Chain Stitch', status: 'SAMPLE', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#D4C9B0' },
  { id: 'r012', serial: 'DMB-FW24-002', name: 'Shadow Mesh Trucker', season: 'FW24', material: 'Mesh Back', technique: 'Rubber Label', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#4A5568' },
  { id: 'r013', serial: 'DMB-SS25-002', name: 'Pale Blue Snap', season: 'SS25', material: 'Cotton Canvas', technique: 'Print', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'Mid' }, color: '#8BACC4' },
  { id: 'r014', serial: 'DMB-FW24-003', name: 'Rust Archive Dad', season: 'FW24', material: 'Pigment Dyed Cotton', technique: 'Embroidery', status: 'ARCHIVED', specs: { closure: 'Strap', brim: 'Soft', panels: '6-panel', fit: 'Low' }, color: '#A0522D' },
  { id: 'r015', serial: 'DMB-SS24-002', name: 'Sage Tonal Trucker', season: 'SS24', material: 'Twill', technique: 'Tonal Embroidery', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#8F9E83' },
  { id: 'r016', serial: 'DMB-AW21-002', name: 'First Snap', season: 'AW21', material: 'Cotton Twill', technique: 'Basic Print', status: 'ARCHIVED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#B8AD9E' },
  { id: 'r017', serial: 'DMB-SS26-005', name: 'Quiet Layer Snap', season: 'SS26', material: 'Washed Canvas', technique: 'Tonal Embroidery', status: 'SAMPLE', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'Mid' }, color: '#9A9590' },
  { id: 'r018', serial: 'DMB-FW25-004', name: 'Film Noir Daddy', season: 'FW25', material: 'Corduroy', technique: 'Woven Label', status: 'RELEASED', specs: { closure: 'Strap', brim: 'Soft', panels: '6-panel', fit: 'Low' }, color: '#1A1A1A' },
  { id: 'r019', serial: 'DMB-SS25-003', name: 'Dusty Ecru Snap', season: 'SS25', material: '100% Cotton', technique: 'Patch', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#E8E0CC' },
  { id: 'r020', serial: 'DMB-FW24-004', name: 'Birch Woven Daddy', season: 'FW24', material: 'Cotton Twill', technique: 'Woven Label', status: 'ARCHIVED', specs: { closure: 'Strap', brim: 'Soft', panels: '6-panel', fit: 'Low' }, color: '#D2C8B4' },
  { id: 'r021', serial: 'DMB-SS24-003', name: 'Vintage Khaki Snap', season: 'SS24', material: 'Washed Twill', technique: 'Embroidery', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#A09070' },
  { id: 'r022', serial: 'DMB-AW21-003', name: 'Origin Daddy', season: 'AW21', material: 'Cotton Canvas', technique: 'Basic Embroidery', status: 'ARCHIVED', specs: { closure: 'Strap', brim: 'Soft', panels: '6-panel', fit: 'Low' }, color: '#3D4F6B' },
  { id: 'r023', serial: 'DMB-SS26-006', name: 'Grain & Salt Trucker', season: 'SS26', material: 'Mesh Back / Twill', technique: 'Chain Stitch', status: 'SAMPLE', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#C8A882' },
  { id: 'r024', serial: 'DMB-FW25-005', name: 'Deep Teal Archive', season: 'FW25', material: 'Cotton Canvas', technique: '3D Puff', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#3A6B6B' },
  { id: 'r025', serial: 'DMB-SS25-004', name: 'Milk Coffee Daddy', season: 'SS25', material: '100% Cotton', technique: 'Tonal Label', status: 'RELEASED', specs: { closure: 'Strap', brim: 'Soft', panels: '6-panel', fit: 'Low' }, color: '#C0A880' },
  { id: 'r026', serial: 'DMB-FW24-005', name: 'Aged Denim Snap', season: 'FW24', material: 'Denim', technique: 'Patch', status: 'ARCHIVED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'Mid' }, color: '#6B7FA0' },
  { id: 'r027', serial: 'DMB-SS24-004', name: 'Raw White Snap', season: 'SS24', material: '100% Cotton', technique: 'Woven Label', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#F5F0E8' },
  { id: 'r028', serial: 'DMB-AW21-004', name: 'Founding Trucker', season: 'AW21', material: 'Cotton Twill', technique: 'Embroidery', status: 'ARCHIVED', specs: { closure: 'Snap', brim: 'Pre-curved', panels: '5-panel', fit: 'Mid' }, color: '#7A7570' },
  { id: 'r029', serial: 'DMB-SS26-007', name: 'Archive Khaki Snap', season: 'SS26', material: 'Washed Canvas', technique: 'Embroidery', status: 'SAMPLE', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'Mid' }, color: '#A09070' },
  { id: 'r030', serial: 'DMB-FW25-006', name: 'Burgundy Wool Snap', season: 'FW25', material: 'Wool Blend', technique: 'Chain Stitch', status: 'RELEASED', specs: { closure: 'Snap', brim: 'Flat', panels: '6-panel', fit: 'High' }, color: '#722F37' },
];
