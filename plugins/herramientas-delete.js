import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, isAdmin, isOwner }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin && !isOwner) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
if (!m.quoted) return conn.reply(m.chat, `[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙳𝙴𝙻 𝙲𝙷𝙰𝚃`, m)
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}}
handler.command = /^del$/i
handler.group = true
handler.botAdmin = true
//handler.admin = true
export default handler
