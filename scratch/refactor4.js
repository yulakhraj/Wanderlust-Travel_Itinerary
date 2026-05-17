const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../src/components/Location');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/text-gray-800/g, 'text-slate-300');
  content = content.replace(/text-gray-700/g, 'text-slate-400');
  content = content.replace(/text-gray-600/g, 'text-slate-400'); // if any
  content = content.replace(/text-blue-700/g, 'text-white drop-shadow-md');
  content = content.replace(/text-blue-600/g, 'text-emerald-400 drop-shadow-md');
  content = content.replace(/border-blue-300/g, 'border-white/10');
  content = content.replace(/bg-blue-600/g, 'bg-emerald-500 text-[#0B0F19] shadow-[0_0_15px_rgba(16,185,129,0.3)]');
  content = content.replace(/hover:bg-blue-700 text-white/g, 'hover:bg-emerald-400 text-[#0B0F19]');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated text colors in ${file}`);
});
