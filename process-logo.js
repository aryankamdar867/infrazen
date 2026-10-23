const sharp = require('sharp');
const fs = require('fs');

async function process() {
  console.log('Processing logo...');
  
  // 1. Trim surrounding white space
  const trimmed = sharp('public/infrazen-logo.jpg').trim({
    background: '#FFFFFF',
    threshold: 10
  });

  const trimmedMeta = await trimmed.metadata();
  console.log('Trimmed dimensions:', trimmedMeta.width, 'x', trimmedMeta.height);
  
  await trimmed.png().toFile('public/infrazen-logo-trimmed.png');
  console.log('Saved public/infrazen-logo-trimmed.png');

  // 2. Crop the Emblem / Icon mark only
  // From 1024x1024, the emblem is roughly in the top 60%
  // Let's inspect the vertical distribution or crop the top 58% of trimmed image
  const emblemHeight = Math.floor(trimmedMeta.height * 0.58);
  await sharp('public/infrazen-logo-trimmed.png')
    .extract({
      left: 0,
      top: 0,
      width: trimmedMeta.width,
      height: emblemHeight
    })
    .trim({ background: '#FFFFFF', threshold: 10 })
    .png()
    .toFile('public/infrazen-logo-emblem.png');
  console.log('Saved public/infrazen-logo-emblem.png');

  // 3. Make transparent background versions
  // By turning pure white (>245 in RGB) into transparent alpha
  const { data, info } = await sharp('public/infrazen-logo-trimmed.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelCount = info.width * info.height;
  for (let i = 0; i < pixelCount; i++) {
    const r = data[i * 4];
    const g = data[i * 4 + 1];
    const b = data[i * 4 + 2];
    // If pixel is white or nearly white (background)
    if (r > 240 && g > 240 && b > 240) {
      data[i * 4 + 3] = 0; // Transparent
    } else if (r > 220 && g > 220 && b > 220) {
      // Soft antialiasing transition
      const factor = (240 - Math.min(r, g, b)) / 20;
      data[i * 4 + 3] = Math.round(255 * factor);
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  })
    .png()
    .toFile('public/infrazen-logo-transparent.png');
  console.log('Saved public/infrazen-logo-transparent.png');

  // Also transparent emblem
  const emb = await sharp('public/infrazen-logo-emblem.png')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const embPixels = emb.info.width * emb.info.height;
  for (let i = 0; i < embPixels; i++) {
    const r = emb.data[i * 4];
    const g = emb.data[i * 4 + 1];
    const b = emb.data[i * 4 + 2];
    if (r > 240 && g > 240 && b > 240) {
      emb.data[i * 4 + 3] = 0;
    } else if (r > 220 && g > 220 && b > 220) {
      const factor = (240 - Math.min(r, g, b)) / 20;
      emb.data[i * 4 + 3] = Math.round(255 * factor);
    }
  }

  await sharp(emb.data, {
    raw: {
      width: emb.info.width,
      height: emb.info.height,
      channels: 4
    }
  })
    .png()
    .toFile('public/infrazen-emblem-transparent.png');
  console.log('Saved public/infrazen-emblem-transparent.png');
}

process().catch(console.error);
