let handler = async (m, { conn, groupMetadata }) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return

await m.reply('*❗SE DESPIDE EL BOT❗*')
const delay = time => new Promise(res=>setTimeout(res,time));
let id = `${groupMetadata.id}`.trim()
await delay(2000) 
await conn.groupLeave(id) 
}
handler.command = /^leave$/i
handler.group = true
handler.rowner = true
export default handler