let handler = async (m, { conn }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let res = await conn.groupRevokeInvite(m.chat)
conn.reply(m.chat, lenguajeGB.smsRestGp(), + '\n\n*https://chat.whatsapp.com/' + res + '*', fkontak, m)}
handler.command = /^rl$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler
