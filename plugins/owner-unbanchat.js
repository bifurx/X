let handler = async (m, { conn, isAdmin, isOwner}) => {
//if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
global.db.data.chats[m.chat].isBanned = false 
m.react("☑️")
}
handler.command = ['uc', 'unbanchat']
handler.group = true
handler.rowner = true
export default handler;
