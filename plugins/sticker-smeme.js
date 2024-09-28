import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return conn.reply(m.chat, `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰́𝙶𝙴𝙽\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .smeme hola soy meme`, m)
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Error`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme)
    if (stiker) await conn.sendFile(m.chat, stiker, '', m, '', { asSticker: 1 })
}
handler.command = /^(smeme)$/i
handler.group = true
handler.botAdmin = true
export default handler