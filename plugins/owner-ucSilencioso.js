let handler = async (m, { conn, text }) => {
global.db.data.chats[text].isBanned = false
m.react("☑️")
}
handler.command = /^ucx$/i
handler.rowner = true
export default handler