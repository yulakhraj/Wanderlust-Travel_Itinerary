const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../src/components/Location');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const startMarker = '<div className="max-w-4xl mx-auto bg-white bg-opacity-40 rounded-lg p-8 shadow-lg">';
  const startIndex = content.indexOf(startMarker);
  
  if (startIndex === -1) {
    console.log(`Could not find start marker in ${file}`);
    return;
  }
  
  const contentStart = startIndex + startMarker.length;
  
  const endRegex = /<\/div>\s*<\/div>\s*<\/main>\s*<\/div>\s*\);\s*export default/m;
  const match = content.match(endRegex);
  
  if (!match) {
    console.log(`Could not find end marker in ${file}`);
    return;
  }
  
  const innerContent = content.substring(contentStart, match.index).trim();
  
  const compName = file.replace('.js', '');
  const newContent = `import React from 'react';

const ${compName} = () => (
  <>
    ${innerContent}
  </>
);

export default ${compName};
`;

  fs.writeFileSync(filePath, newContent);
  console.log(`Refactored ${file}`);
});
