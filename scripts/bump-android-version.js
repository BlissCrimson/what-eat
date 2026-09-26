const fs = require('fs');
const path = require('path');

const version = process.argv[2];
if (!version) {
    console.error('Keine Version übergeben.');
    process.exit(1);
}

const [major, minor, patch] = version.split('.').map(Number);
const versionCode = major * 10000 + minor * 100 + patch;

const gradlePath = path.join(__dirname, '..', 'android', 'app', 'build.gradle');
let content = fs.readFileSync(gradlePath, 'utf8');

content = content.replace(/versionCode \d+/, `versionCode ${versionCode}`);
content = content.replace(/versionName "[^"]*"/, `versionName "${version}"`);

fs.writeFileSync(gradlePath, content);
console.log(`Android version aktualisiert: versionName=${version}, versionCode=${versionCode}`);