/*let handler = m => m 
handler.before = async function (m, { conn, isOwner } ) {
if (m.chat.endsWith('@s.whatsapp.net') && !isOwner && m.sender !== '59893449461@s.whatsapp.net') {
let caption = `*[❗] HOLA @${m.sender.split('@')[0]} SOY UN BOT.*\n\n*📝LOS MENSAJES ESTAN PROHIBIDOS.*\n\n*[⛔SERÁS BLOQUEADO⛔]*`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })
await conn.updateBlockStatus(m.sender, 'block')
}
return !0 
}
export default handler*/