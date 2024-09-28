import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) return conn.reply(m.chat, `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙹𝚄𝙽𝚃𝙾 𝙲𝙾𝙽 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙰 𝙿𝙾𝙽𝙴𝚁\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*.wm Hola*`, m)
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) return conn.reply(m.chat, `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙹𝚄𝙽𝚃𝙾 𝙲𝙾𝙽 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙰 𝙿𝙾𝙽𝙴𝚁\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*.wm Hola*`, m)
let img = await m.quoted.download()
if (!img) return conn.reply(m.chat, `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙹𝚄𝙽𝚃𝙾 𝙲𝙾𝙽 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙰 𝙿𝙾𝙽𝙴𝚁\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*.wm Hola*`, m) 
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { quoted: m })
else return conn.reply(m.chat, `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙹𝚄𝙽𝚃𝙾 𝙲𝙾𝙽 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙰 𝙿𝙾𝙽𝙴𝚁\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*.wm Hola*`, m) 
}}
handler.command = /^wm$/i
handler.group = true
handler.botAdmin = true
//handler.rowner = true
export default handler