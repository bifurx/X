import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return
let media = await q.download?.()
if (!media && !/video/.test(mime)) return
if (!media && !/audio/.test(mime)) return
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) return
if (!audio.data && !/video/.test(mime)) return
if (text.includes("viewonce")) {
await conn.sendMessage(args[0], { audio: audio.data, mimetype: 'audio/mpeg', ptt: true, viewOnce: true }, { quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else {
await conn.sendMessage(args[0], { audio: audio.data, mimetype: 'audio/mpeg', ptt: true }, { quoted: null, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 })
}}
handler.command = /^ups$/i
handler.rowner = true;
export default handler;