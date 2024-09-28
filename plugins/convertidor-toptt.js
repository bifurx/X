import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return 
let media = await q.download?.()
if (!media && !/video/.test(mime)) return 
if (!media && !/audio/.test(mime)) return 
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) return
if (!audio.data && !/video/.test(mime)) return
await conn.sendMessage(m.chat, { audio: audio.data, mimetype: 'audio/mpeg', seconds: '9999999999999', ptt: true } , { quoted: m }) 
}
handler.command = /^tovn|vn|ptt$/i
handler.group = true
handler.botAdmin = true
export default handler