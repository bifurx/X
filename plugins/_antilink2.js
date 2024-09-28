let linkRegex = /\b((https?:\/\/|www\.)?[\w-]+\.[\w-]+(?:\.[\w-]+)*(\/[\w\.\-\/]*)?)\b/i
let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, isOwner, isROwner, participants }) {
if (!m.isGroup) return 
if (m.fromMe) return
if (isAdmin || isOwner || isROwner || !isBotAdmin) return
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`
const groupAdmins = participants.filter(p => p.admin)
const isGroupLink = linkRegex.exec(m.text) 
let numOw = `${global.owner[0][0]}`
let jidOw = numOw + '@s.whatsapp.net'
if (chat.antiLink2 && isGroupLink !== null) {
if (chat.delete) return conn.sendMessage(m.chat, { text: `> ⚠️ *ADVERTENCIA*\n\n*Se detectó un link pero está el Anti-Eliminar activado. Desactivelo para protección de links*`, mentions: [m.sender, ...groupAdmins.map(v => v.id)] }, { quoted: m }) 
if (isBotAdmin) {
await conn.sendMessage(m.chat, { text: `*[❗] 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘𝗧𝗘𝗖𝗧𝗔𝗗𝗢 [❗]*\n\n*${user}*`, mentions: [m.sender, jidOw, ...groupAdmins.map(v => v.id)] })    
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
//let remove = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//if (remove[0].status === '404') return
}}
return 
}
export default handler
