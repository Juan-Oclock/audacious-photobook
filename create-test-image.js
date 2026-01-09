const fs = require('fs');
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNk+M9Qz0AEYBxVSF+FAAC+MwE9F5DHIQAAAABJRU5ErkJggg==', 'base64');
fs.writeFileSync('public/test-image.png', png);
console.log('Created test image');
