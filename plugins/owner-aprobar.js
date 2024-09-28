let handler = async (m, { conn, isAdmin, isOwner}) => {
if (m.sender !== '59899022028@s.whatsapp.net') return conn.reply(m.chat, `No tienes permisos suficientes.`, m)
global.db.data.chats[m.chat].aprobado = true 
m.react("☑️")
}
handler.command = ['aprobar']
export default handler;
