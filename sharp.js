const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// User Default Image
const targetUser = path.resolve(__dirname, 'src/public/images');
const destinationUser = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destinationUser)) {
  fs.mkdirSync(destinationUser);
}

fs.readdirSync(targetUser).forEach((image) => {
  if (image.includes('user-default')) {
    // Convert image size, width 128px, and prefix -small.jpg
    sharp(`${targetUser}/${image}`)
      .resize(128)
      .toFile(path.resolve(
        __dirname,
        `${destinationUser}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  }
});

// Hero Image
const targetHero = path.resolve(__dirname, 'src/public/images/hero-image');
const destinationHero = path.resolve(__dirname, 'dist/images/hero');

if (!fs.existsSync(destinationHero)) {
  fs.mkdirSync(destinationHero);
}

fs.readdirSync(targetHero).forEach((image) => {
  // Convert image size, width 1350px, and prefix -large.jpg
  sharp(`${targetHero}/${image}`)
    .resize(1350)
    .toFile(path.resolve(
      __dirname,
      `${destinationHero}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
    ));

  // Convert image size, width 960px, and prefix -medium.jpg
  sharp(`${targetHero}/${image}`)
    .resize(960)
    .toFile(path.resolve(
      __dirname,
      `${destinationHero}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`,
    ));

  // Convert image size, width 480px, and prefix -small.jpg
  sharp(`${targetHero}/${image}`)
    .resize(480)
    .toFile(path.resolve(
      __dirname,
      `${destinationHero}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
    ));
});

// Favorite Page Empty Image
const targetFavorite = path.resolve(__dirname, 'src/public/images/favorite');
const destinationFavorite = path.resolve(__dirname, 'dist/images/favorite');

if (!fs.existsSync(destinationFavorite)) {
  fs.mkdirSync(destinationFavorite);
}

fs.readdirSync(targetFavorite).forEach((image) => {
  // Convert image size, width 1500px, and prefix -large.png
  sharp(`${targetFavorite}/${image}`)
    .resize(1500)
    .toFile(path.resolve(
      __dirname,
      `${destinationFavorite}/${image.split('.').slice(0, -1).join('.')}-large.png`,
    ));

  // Convert image size, width 900px, and prefix -medium.png
  sharp(`${targetFavorite}/${image}`)
    .resize(900)
    .toFile(path.resolve(
      __dirname,
      `${destinationFavorite}/${image.split('.').slice(0, -1).join('.')}-medium.png`,
    ));

  // Convert image size, width 480px, and prefix -small.png
  sharp(`${targetFavorite}/${image}`)
    .resize(480)
    .toFile(path.resolve(
      __dirname,
      `${destinationFavorite}/${image.split('.').slice(0, -1).join('.')}-small.png`,
    ));
});
