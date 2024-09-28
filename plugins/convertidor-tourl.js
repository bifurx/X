import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝚅𝙸𝙳𝙴𝙾.`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `👉𝙀𝙉𝙇𝘼𝘾𝙀:\n${link}\n⏳𝙀𝙓𝙋𝙄𝙍𝘼𝘾𝙄𝙊𝙉: ${isTele ? '𝙉𝙊 𝙀𝙓𝙋𝙄𝙍𝘼' : '𝘿𝙀𝙎𝘾𝙊𝙉𝙊𝘾𝙄𝘿𝙊'}`
conn.reply(m.chat, caption, m)
}
handler.command = /^(tourl|upload)$/i
handler.group = true
handler.botAdmin = true
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
