const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../src/components/Location');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const startRegex = /<div className="min-h-screen flex flex-col">[\s\S]*?<div className="max-w-4xl mx-auto bg-white bg-opacity-40 rounded-lg p-8 shadow-lg">/m;
  const endRegex = /<\/div>\s*<\/div>\s*<\/main>\s*<\/div>\s*\);\s*export/m;
  
  if (!startRegex.test(content) || !endRegex.test(content)) {
    console.log(`Failed to match in ${file}`);
    return;
  }
  
  let newContent = content.replace(startRegex, '<>');
  newContent = newContent.replace(endRegex, '  </>\n);\n\nexport');
  
  fs.writeFileSync(filePath, newContent);
  console.log(`Refactored ${file}`);
});
