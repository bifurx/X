import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁𝙻𝙾 𝙰 𝙸𝙼𝙰𝙶𝙴𝙽.`
if (!m.quoted) return conn.reply(m.chat, notStickerMessage, m)
const q = m.quoted || m;
const mime = q.mediaType || '';
if (!/sticker/.test(mime)) return conn.reply(m.chat, notStickerMessage, m)
const media = await q.download();
const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
await conn.sendFile(m.chat, out, 'error.jpg', null, m);
}
handler.command = ['toimg', 'img', 'jpg']
handler.group = true
handler.botAdmin = true
export default handler