import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, isOwner, isAdmin }) => {

if (m.quoted && m.quoted.mtype == 'viewOnceMessageV2' && m.sender !== m.quoted.sender && !isAdmin && !isOwner) return conn.reply(m.chat, 'Los stickers a mensajes de "Ver Una Vez" solo se puede hacer a los tuyos propios', m)


if (m.quoted && m.quoted.sender === '59899022028@s.whatsapp.net' && m.sender !== '59899022028@s.whatsapp.net') return
/*if (m.quoted && m.quoted.mtype === 'viewOnceMessageV2' && !isOwner && m.quoted && m.quoted.sender === conn.user.jid) { 
let vn = 'https://qu.ax/FMFb.opus'
conn.sendPresenceUpdate('recording', m.chat)   
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
return
}*/
    
//para viewonce en todos los grupos
//if (m.quoted && m.quoted.mtype == 'viewOnceMessageV2' && m.sender !== m.quoted.sender && !isOwner && !isAdmin) return conn.reply(m.chat, '[❌] LOS STICKERS A MENSAJES DE "VER UNA VEZ" SOLAMENTE SE PUEDE A LOS TUYOS PROPIOS.', m)
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('𝙴𝙻 𝚅𝙸́𝙳𝙴𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙳𝚄𝚁𝙰𝚁 𝙼𝙰́𝚂 𝙳𝙴 *7* 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂')
      let img = await q.download?.()
      if (!img) throw `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽, 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙶𝙸𝙵.`
      let out
      try {
        stiker = await sticker(img, false)
      } catch (e) {
        console.error(e)
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
          if (typeof out !== 'string') out = await uploadImage(img)
          stiker = await sticker(false, out)
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0])
      else return m.reply('URL invalido')
      } else {
      return conn.reply(m.chat, '[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽, 𝚅𝙸𝙳𝙴𝙾 𝙾 𝙶𝙸𝙵.', m)
    }
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp')
  }
}
handler.command = ['s', 'sticker', 'stiker']
//handler.group = true
//handler.botAdmin = true
export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
