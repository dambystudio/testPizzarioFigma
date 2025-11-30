import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';

const ICONS_DIR = './public/src/assets/icons';

// Immagini da convertire in WebP con le dimensioni ottimali
const imagesToOptimize = [
  { name: 'fotoPizzaBrasileHome.png', width: 800, quality: 80 },
  { name: 'pizzariologo 1_9.png', width: 600, quality: 85 },
  { name: 'bandieraBrasile.png', width: 300, quality: 80 },
  { name: 'fotoPizzaIconaDisegnata.png', width: 100, quality: 80 },
  { name: 'IconaTelefono.png', width: 100, quality: 80 },
  { name: 'fotoPomodoro.png', width: 100, quality: 80 },
  { name: 'mascheraCarnevale.png', width: 150, quality: 80 },
  { name: 'poligonoVerde.png', width: 100, quality: 80 },
  { name: 'logoDambyStudio.png', width: 150, quality: 85 },
];

// Pizze da convertire in WebP
const pizzasToOptimize = [
  { name: 'pizza1.avif', width: 500, quality: 80 },
  { name: 'pizza2.jpeg', width: 500, quality: 80 },
  { name: 'pizza3.jpeg', width: 500, quality: 80 },
  { name: 'pizza4.avif', width: 500, quality: 80 },
  { name: 'pizza5.jpeg', width: 500, quality: 80 },
];

async function optimizeImage(filename, width, quality) {
  const inputPath = join(ICONS_DIR, filename);
  const { name } = parse(filename);
  const outputPath = join(ICONS_DIR, `${name}.webp`);
  
  try {
    const info = await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);
    
    const originalStats = await stat(inputPath);
    const savings = ((originalStats.size - info.size) / originalStats.size * 100).toFixed(1);
    
    console.log(`✅ ${filename} → ${name}.webp`);
    console.log(`   ${(originalStats.size / 1024).toFixed(1)}KB → ${(info.size / 1024).toFixed(1)}KB (−${savings}%)`);
    console.log(`   Dimensioni: ${info.width}x${info.height}`);
    console.log('');
  } catch (error) {
    console.error(`❌ Errore con ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Ottimizzazione immagini in WebP...\n');
  
  for (const img of [...imagesToOptimize, ...pizzasToOptimize]) {
    await optimizeImage(img.name, img.width, img.quality);
  }
  
  console.log('✨ Ottimizzazione completata!');
}

main();
