import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command, isAdmin, isOwner }) => {
if (!isAdmin && !isOwner) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
let group = m.chat
try {
await conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m)
} catch (e) {
await conn.reply(m.chat, `error`)
console.log(e)
}} 
handler.command = /^enlace|link$/i
handler.group = true
handler.botAdmin = true

export default handler