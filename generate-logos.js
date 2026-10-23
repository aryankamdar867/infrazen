const sharp = require('sharp');

async function run() {
  console.log('Generating crisp transparent logo assets...');

  // Load raw buffer of original logo
  const original = await sharp('public/infrazen-logo.jpg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = original;

  // Function to make white background transparent
  function makeTransparent(buffer, width, height) {
    const output = Buffer.alloc(width * height * 4);
    for (let i = 0; i < width * height; i++) {
      const r = buffer[i * 3];
      const g = buffer[i * 3 + 1];
      const b = buffer[i * 3 + 2];
      output[i * 4] = r;
      output[i * 4 + 1] = g;
      output[i * 4 + 2] = b;

      // Soft alpha threshold for clean edges
      const brightness = (r + g + b) / 3;
      if (brightness >= 242) {
        output[i * 4 + 3] = 0; // Fully transparent
      } else if (brightness > 225) {
        const factor = (242 - brightness) / 17;
        output[i * 4 + 3] = Math.round(255 * factor);
      } else {
        output[i * 4 + 3] = 255; // Fully opaque
      }
    }
    return output;
  }

  // 1. Full tight crop: left 130, top 205, width 765, height 605
  const fullCroppedRaw = await sharp('public/infrazen-logo.jpg')
    .extract({ left: 130, top: 205, width: 765, height: 605 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const fullTransp = makeTransparent(fullCroppedRaw.data, fullCroppedRaw.info.width, fullCroppedRaw.info.height);
  await sharp(fullTransp, {
    raw: { width: fullCroppedRaw.info.width, height: fullCroppedRaw.info.height, channels: 4 }
  })
    .png()
    .toFile('public/infrazen-logo-full.png');
  console.log('Created public/infrazen-logo-full.png (765x605)');

  // 2. Emblem only: left 335, top 205, width 410, height 355
  const emblemRaw = await sharp('public/infrazen-logo.jpg')
    .extract({ left: 335, top: 205, width: 410, height: 355 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const emblemTransp = makeTransparent(emblemRaw.data, emblemRaw.info.width, emblemRaw.info.height);
  await sharp(emblemTransp, {
    raw: { width: emblemRaw.info.width, height: emblemRaw.info.height, channels: 4 }
  })
    .png()
    .toFile('public/infrazen-emblem.png');
  console.log('Created public/infrazen-emblem.png (410x355)');

  // 3. Text block only: left 130, top 595, width 765, height 135
  const textRaw = await sharp('public/infrazen-logo.jpg')
    .extract({ left: 130, top: 595, width: 765, height: 135 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const textTransp = makeTransparent(textRaw.data, textRaw.info.width, textRaw.info.height);
  await sharp(textTransp, {
    raw: { width: textRaw.info.width, height: textRaw.info.height, channels: 4 }
  })
    .png()
    .toFile('public/infrazen-text.png');
  console.log('Created public/infrazen-text.png (765x135)');

  // 4. Create horizontal lockup:
  // Composite emblem on the left (height ~140, width ~162), and text on the right (height ~110, width ~620)
  // Total canvas: height 160, width 840
  const resizedEmblem = await sharp('public/infrazen-emblem.png')
    .resize({ height: 140, fit: 'contain' })
    .toBuffer({ resolveWithObject: true });

  const resizedText = await sharp('public/infrazen-text.png')
    .resize({ height: 105, fit: 'contain' })
    .toBuffer({ resolveWithObject: true });

  const horizontalLockup = await sharp({
    create: {
      width: resizedEmblem.info.width + 25 + resizedText.info.width + 10,
      height: 150,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: resizedEmblem.data, top: 5, left: 5 },
      { input: resizedText.data, top: Math.floor((150 - resizedText.info.height) / 2), left: resizedEmblem.info.width + 25 }
    ])
    .png()
    .toFile('public/infrazen-logo-horizontal.png');

  console.log('Created public/infrazen-logo-horizontal.png');
}

run().catch(console.error);
