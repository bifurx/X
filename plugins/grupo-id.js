let handler = async (m, { conn, groupMetadata }) => {
let text = `${groupMetadata.id}`.trim()
conn.fakeReply(m.chat, text, '0@s.whatsapp.net', 'ID DE GRUPO')
}
handler.command = /^id$/i
handler.group = true
handler.botAdmin = true
handler.rowner = true
export default handler
