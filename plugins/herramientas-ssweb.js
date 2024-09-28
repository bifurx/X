import fetch from 'node-fetch' 
const handler = async (m, {conn, text, args}) => {   
if (!args[0]) return conn.reply(m.chat, `[❗] INGRESE UN LINK DE UNA WEB.`, m);  
try {
const ss = await (await fetch(`https://image.thum.io/get/fullpage/${args[0]}`)).buffer();
conn.sendFile(m.chat, ss, '', '', m);
} catch (e) {
console.log(e)
}}; 
handler.command = /^ss$/i; 
handler.group = true
handler.botAdmin = true
export default handler
