import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply(`[❗] 𝙰𝙶𝚁𝙴𝙶𝚄𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝙰 𝙲𝚁𝙴𝙰𝚁 𝙴𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁`)
   if (!text) return m.reply('𝙔 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊?')
   if (text.length > 50) return m.reply('𝙈𝘼𝙓𝙄𝙈𝙊 50 𝙇𝙀𝙏𝙍𝘼𝙎!')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/0b1a7795b585e16407554.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '')
}
handler.command = /^qc$/i
handler.group = true
handler.botAdmin = true
//handler.rowner = true
export default handler
