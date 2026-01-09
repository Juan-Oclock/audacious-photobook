const fs = require('fs');
// Red 10x10 PNG
const red = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mP8z8DwHwMRgHFUIfUFANQJBgFV4oQqAAAAAElFTkSuQmCC', 'base64');
fs.writeFileSync('public/test-image-2.png', red);
// Blue 10x10 PNG
const blue = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkYPj/nwENMI4qpL4AACtgAwG67Hj3AAAAAElFTkSuQmCC', 'base64');
fs.writeFileSync('public/test-image-3.png', blue);
console.log('Created 2 more test images');
