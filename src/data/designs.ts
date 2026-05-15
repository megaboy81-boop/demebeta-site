export interface Design {
  id: string;
  name: string;
  type: 'T' | 'N' | 'H' | 'J' | 'B' | 'D' | 'L';
  color: string;
  technique: string;
  image_placeholder: string;
}

export const designs: Design[] = [
  // T 시리즈 (Trucker / 5-panel)
  { id: 'T01', name: 'Archive Trucker 01', type: 'T', color: 'Faded Olive', technique: 'Mesh Back', image_placeholder: '#8B9B7A' },
  { id: 'T02', name: 'Archive Trucker 02', type: 'T', color: 'Stone Cream', technique: 'Embroidery', image_placeholder: '#D4C9B0' },
  { id: 'T03', name: 'Archive Trucker 03', type: 'T', color: 'Washed Navy', technique: 'Patch', image_placeholder: '#4A5568' },
  { id: 'T04', name: 'Archive Trucker 04', type: 'T', color: 'Vintage Tan', technique: 'Print', image_placeholder: '#C8A882' },
  { id: 'T05', name: 'Archive Trucker 05', type: 'T', color: 'Mud Gray', technique: 'Tone-on-Tone', image_placeholder: '#7A7570' },
  { id: 'T06', name: 'Archive Trucker 06', type: 'T', color: 'Desert Rose', technique: 'Embroidery', image_placeholder: '#C4987A' },
  { id: 'T07', name: 'Archive Trucker 07', type: 'T', color: 'Raw Denim', technique: 'Washed', image_placeholder: '#3D4F6B' },
  { id: 'T08', name: 'Archive Trucker 08', type: 'T', color: 'Cream White', technique: 'Mesh Back', image_placeholder: '#EDE8DC' },
  { id: 'T09', name: 'Archive Trucker 09', type: 'T', color: 'Forest Fade', technique: 'Distressed', image_placeholder: '#5A6B54' },
  { id: 'T10', name: 'Archive Trucker 10', type: 'T', color: 'Charcoal', technique: 'Embroidery', image_placeholder: '#2D2D2D' },

  // N 시리즈 (New Era / Snapback)
  { id: 'N01', name: 'Quiet Snap 01', type: 'N', color: 'Off White', technique: 'Tonal Embroidery', image_placeholder: '#F0EBE0' },
  { id: 'N02', name: 'Quiet Snap 02', type: 'N', color: 'Warm Black', technique: 'Woven Label', image_placeholder: '#1A1A1A' },
  { id: 'N03', name: 'Quiet Snap 03', type: 'N', color: 'Vintage Stone', technique: 'Patch', image_placeholder: '#B8AD9E' },
  { id: 'N04', name: 'Quiet Snap 04', type: 'N', color: 'Faded Gold', technique: 'Embroidery', image_placeholder: '#B89968' },
  { id: 'N05', name: 'Quiet Snap 05', type: 'N', color: 'Pale Blue', technique: 'Print', image_placeholder: '#8BACC4' },
  { id: 'N06', name: 'Quiet Snap 06', type: 'N', color: 'Rust', technique: 'Distressed', image_placeholder: '#A0522D' },
  { id: 'N07', name: 'Quiet Snap 07', type: 'N', color: 'Sage', technique: 'Tonal', image_placeholder: '#8F9E83' },
  { id: 'N08', name: 'Quiet Snap 08', type: 'N', color: 'Sand', technique: 'Woven Label', image_placeholder: '#D4B896' },
  { id: 'N09', name: 'Quiet Snap 09', type: 'N', color: 'Military', technique: 'Patch', image_placeholder: '#5C6650' },
  { id: 'N10', name: 'Quiet Snap 10', type: 'N', color: 'Ecru', technique: 'Embroidery', image_placeholder: '#E8E0CC' },
  { id: 'N11', name: 'Quiet Snap 11', type: 'N', color: 'Warm Ivory', technique: 'Print', image_placeholder: '#F2EAD8' },
  { id: 'N12', name: 'Quiet Snap 12', type: 'N', color: 'Faded Black', technique: 'Tonal Embroidery', image_placeholder: '#2E2E2E' },
  { id: 'N13', name: 'Quiet Snap 13', type: 'N', color: 'Dusty Pink', technique: 'Woven Label', image_placeholder: '#C4A098' },
  { id: 'N14', name: 'Quiet Snap 14', type: 'N', color: 'Birch', technique: 'Patch', image_placeholder: '#D2C8B4' },
  { id: 'N15', name: 'Quiet Snap 15', type: 'N', color: 'Vintage Khaki', technique: 'Embroidery', image_placeholder: '#A09070' },
  { id: 'N16', name: 'Quiet Snap 16', type: 'N', color: 'Washed Gray', technique: 'Distressed', image_placeholder: '#9A9590' },
  { id: 'N17', name: 'Quiet Snap 17', type: 'N', color: 'Deep Teal', technique: 'Print', image_placeholder: '#3A6B6B' },
  { id: 'N18', name: 'Quiet Snap 18', type: 'N', color: 'Milk Coffee', technique: 'Tonal', image_placeholder: '#C0A880' },
  { id: 'N19', name: 'Quiet Snap 19', type: 'N', color: 'Raw White', technique: 'Woven Label', image_placeholder: '#F5F0E8' },
  { id: 'N20', name: 'Quiet Snap 20', type: 'N', color: 'Aged Denim', technique: 'Patch', image_placeholder: '#6B7FA0' },
];

export const typeLabels: Record<Design['type'], string> = {
  T: 'Trucker',
  N: 'Snapback',
  H: 'Headwear',
  J: 'Jacket',
  B: 'Beanie',
  D: 'Daddy Cap',
  L: 'Lifestyle',
};
