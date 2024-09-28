import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) return conn.reply(m.chat, `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽 𝚅𝙸́𝙳𝙴𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉 𝙿𝙰𝚁𝙰 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙽 𝙰𝚄𝙳𝙸𝙾`, m)
await conn.sendPresenceUpdate('recording', m.chat)
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `𝙉𝙊 𝙎𝙀 𝙇𝙊𝙂𝙍𝙊 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍`
if (!media && !/audio/.test(mime)) throw `𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙰 𝙰𝚄𝙳𝙸𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾.`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙰 𝙰𝚄𝙳𝙸𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾.`
if (!audio.data && !/video/.test(mime)) throw `𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝙰 𝙰𝚄𝙳𝙸𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾.`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
