const fs = require('fs');
const path = require('path');

// Create icons directory
const iconsDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate simple PNG icons using SVG
const svgToDataUrl = (svg) => {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

// Brand gold SVG - crescent moon with star
const brandSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#a4722c"/>
  <circle cx="256" cy="256" r="140" fill="#ffffff" opacity="0.9"/>
  <circle cx="290" cy="256" r="140" fill="#a4722c"/>
  <polygon points="256,180 265,210 298,210 274,230 283,260 256,240 229,260 238,230 214,210 247,210" fill="#c9973a"/>
</svg>`;

// Create ICO (favicon)
const icoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#a4722c"/>
  <circle cx="16" cy="16" r="8.5" fill="#ffffff" opacity="0.9"/>
  <circle cx="18.5" cy="16" r="8.5" fill="#a4722c"/>
  <polygon points="16,10.5 18.5,15 22,15 19,17 20.5,21.5 16,19 11.5,21.5 13,17 10,15 13.5,15" fill="#c9973a" transform="scale(0.6) translate(5,5)"/>
</svg>`;

// For now, save SVGs as placeholder icons - in production, use sharp to convert to PNG
console.log('✅ Icons directory created at:', iconsDir);
console.log('ℹ️  For production: install sharp and convert SVGs to PNG');
console.log('ℹ️  Using brand color: #a4722c (gold-brown)');

// Create simple PNG images by saving SVG files as reference
fs.writeFileSync(path.join(iconsDir, 'brand.svg'), brandSvg);
fs.writeFileSync(path.join(iconsDir, 'favicon.svg'), icoSvg);

console.log('✅ SVG sources created. For PNG generation, run:');
console.log('   npm install sharp --save-dev');
console.log('   node convert-svg-to-png.js');
