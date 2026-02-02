// Script to automatically fix all asset paths in DYNALANDINGPAGE.tsx
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/DYNALANDINGPAGE.tsx');

// Read file
let content = fs.readFileSync(filePath, 'utf8');

// Add import if not exists
if (!content.includes("import getAssetPath from '../utils/assetPath'")) {
  content = content.replace(
    "} from './landing';",
    "} from './landing';\nimport getAssetPath from '../utils/assetPath';"
  );
}

// Replace all src="/..." with src={getAssetPath("/...")}
// This regex matches src="/" followed by any characters until the closing quote
content = content.replace(
  /src=["'](\/([\w\-@.]+)\.(\w+))["']/g,
  (match, fullPath) => `src={getAssetPath("${fullPath}")}`
);

// Write back
fs.writeFileSync(filePath, content, 'utf8');

console.log('✅ Fixed all asset paths in DYNALANDINGPAGE.tsx');
console.log('   - Added getAssetPath import');
console.log('   - Replaced all src="/..." patterns');
