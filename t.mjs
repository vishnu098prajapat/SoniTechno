import postcss from 'postcss'
import tw from 'tailwindcss'
import fs from 'fs'
const css = fs.readFileSync('src/index.css','utf8')
try {
  const r = await postcss([tw({})]).process(css,{from:'src/index.css'})
  console.log('OK bytes', r.css.length)
} catch(e){ console.log('FAIL:', e.message) }
