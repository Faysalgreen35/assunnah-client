const fs = require('fs');
const path = require('path');

// Create icons directory
const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Simple PNG file generator - creates solid color PNG with brand color
// PNG header + IHDR chunk for a 1x1 transparent pixel that we'll scale
const createSimplePNG = (width, height) => {
  // Minimal valid PNG: 1x1 pixel
  // PNG signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk (image header) - width=width, height=height, bitDepth=8, colorType=2 (RGB)
  const ihdr = Buffer.alloc(25);
  ihdr.writeUInt32BE(13, 0); // chunk length
  ihdr.write('IHDR', 4);
  ihdr.writeUInt32BE(width, 8);
  ihdr.writeUInt32BE(height, 12);
  ihdr[16] = 8; // bit depth
  ihdr[17] = 2; // color type RGB
  ihdr[18] = 0; // compression
  ihdr[19] = 0; // filter
  ihdr[20] = 0; // interlace

  // Calculate CRC for IHDR
  const crc32 = (buf) => {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buf.length; i++) {
      crc = crc ^ buf[i];
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ ((crc & 1) ? 0xEDB88320 : 0);
      }
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  };

  const ihdrCrc = Buffer.alloc(4);
  ihdrCrc.writeUInt32BE(crc32(ihdr.slice(4, 20)), 0);

  // IDAT chunk (image data) - gold color #a4722c = RGB(164, 114, 44)
  const pixelData = Buffer.alloc(height * (width * 3 + 1) + 2);
  let pos = 0;
  pixelData[pos++] = 0x78; // zlib header
  pixelData[pos++] = 0x9c;

  // Minimal IDAT - for simplicity, create base64 encoded minimal PNG

  // For now, return a simple placeholder - in practice, users should generate proper icons
  return null;
};

// For simplicity, create SVG icons that can be used directly
const svgIcon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192">
  <defs>
    <style>
      .gold { fill: #a4722c; }
      .light { fill: #ffffff; opacity: 0.95; }
      .accent { fill: #c9973a; }
    </style>
  </defs>
  <rect width="192" height="192" class="gold"/>
  <circle cx="96" cy="96" r="56" class="light"/>
  <circle cx="108" cy="96" r="56" class="gold"/>
  <polygon points="96,72 102,84 119,84 107,92 113,104 96,96 79,104 85,92 73,84 90,84" class="accent" transform="scale(1.2) translate(-20,-15)"/>
</svg>`;

// Create SVG versions
fs.writeFileSync(path.join(iconsDir, 'icon-192.svg'), svgIcon(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512.svg'), svgIcon(512));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-192.svg'), svgIcon(192));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512.svg'), svgIcon(512));

// Create apple touch icon SVG
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.svg'), svgIcon(180));

// Create favicon
fs.writeFileSync(path.join(iconsDir, 'favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#a4722c"/>
  <circle cx="16" cy="16" r="9" fill="#ffffff" opacity="0.95"/>
  <circle cx="18" cy="16" r="9" fill="#a4722c"/>
  <polygon points="16,10 18,14 22,14 19,17 20,21 16,18 12,21 13,17 10,14 14,14" fill="#c9973a"/>
</svg>`);

console.log('✅ SVG icons created in public/icons/');
console.log('ℹ️  For production PNG conversion:');
console.log('   npm install --save-dev sharp');
console.log('   node convert-svg-to-png.js');
console.log('');
console.log('📝 To generate proper icons from Figma/design:');
console.log('   1. Export 192x192 and 512x512 PNG icons from your design tool');
console.log('   2. Place them in public/icons/');
console.log('   3. Update manifest.json with correct icon references');
