import { createHash } from 'crypto' 
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants, groupMetadata }) => {
if (!m.quoted) return conn.reply(m.chat, `Responda al mensaje que quiere reportar.`,m)
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
try {
} catch (e) {
} finally {
let str =
`*[ ⚠️ ] 𝗥𝗘𝗣𝗢𝗥𝗧𝗘 𝗘𝗫𝗜𝗧𝗢𝗦𝗢 [ ⚠️ ]*

*🔴 LLAMANDO ADMINS 🔴*

*👇🏻ADMINS DEL GRUPO👇🏻*
${listAdmin}

*《 - - - - 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 - - - - 》*`.trim()
    conn.reply(m.chat, str, m, { mentions: [...groupAdmins.map(v => v.id)] }) 
  }
}
handler.command = /^reportar$/i
handler.group = true
handler.botAdmin = true
export default handler
