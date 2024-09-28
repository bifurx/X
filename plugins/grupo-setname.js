let handler  = async (m, { conn, args, text }) => {
if (!text) return conn.reply(m.chat, `INGRESE EL NUEVO NOMBRE`, fkontak, m)
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) { 
console.log(`error`)
}}
handler.command = /^(setname|newnombre|nuevonombre)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler 
