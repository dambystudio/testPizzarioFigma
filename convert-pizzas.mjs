import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function convertPizzas() {
    const dir = 'public/src/assets/icons';
    for (let i = 1; i <= 5; i++) {
        const input = path.join(dir, `pizza${i}.jpg`);
        const output = path.join(dir, `pizza${i}.webp`);
        if (fs.existsSync(input)) {
            await sharp(input)
                .webp({ quality: 80 })
                .toFile(output);
            console.log(`Converted ${input} to ${output}`);
        } else {
            console.log(`Missing ${input}`);
        }
    }
}

convertPizzas().catch(console.error);
