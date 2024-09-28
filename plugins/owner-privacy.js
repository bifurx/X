let handler = async (m, { conn, command }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return
//'all' // 'contacts' | 'contact_blacklist'
if (command == 'abrir') {
conn.reply(m.chat, '*[Se configuró el bot como público. Cualquiera puede añadir el bot a grupos.]*', m)
await conn.updateGroupsAddPrivacy('all')
m.react("☑️")
} else if (command == 'cerrar') {
conn.reply(m.chat, '*[Se configuró el bot como privado. No se podrá añadirlo a grupos.]*', m)
await conn.updateGroupsAddPrivacy('contacts')
m.react("☑️")
} else return
}
handler.command = ['abrir', 'cerrar']
handler.rowner = true
export default handler
