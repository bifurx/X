let handler = async (m, { conn, text }) => {
global.db.data.chats[text].isBanned = true
m.react("☑️")
}
handler.command = /^bcx$/i
handler.rowner = true
export default handler