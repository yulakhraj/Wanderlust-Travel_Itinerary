const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../src/components/Location');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/<div className="min-h-screen flex flex-col">/g, '<div className="w-full">');
  content = content.replace(/<main className="flex-grow relative">/g, '<main className="w-full">');
  content = content.replace(/className="absolute inset-0 z-0"/g, 'className="hidden"');
  content = content.replace(/<div className="absolute inset-0 z-10 bg-blue-900 bg-opacity-40" \/>/g, '<div className="hidden" />');
  content = content.replace(/<div className="relative z-20 container mx-auto px-4 py-8">/g, '<div className="w-full">');
  content = content.replace(/<div className="max-w-4xl mx-auto bg-white bg-opacity-40 rounded-lg p-8 shadow-lg">/g, '<div className="w-full">');
  
  fs.writeFileSync(filePath, content);
  console.log(`Refactored safely ${file}`);
});
