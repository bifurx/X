import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
await conn.fetchBlocklist().then(async data => {
let txt = `📛 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦\n\n*Total :* ${data.length}\n\n╭━━━[ *BLOQUEADOS* ]━━━⬣\n`
for (let i of data) {
txt += `┃🚫 @${i.split("@")[0]}\n`
}
txt += "╰━━━━━━━⬣"
return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
})} 
handler.command = ['bloqueados'] 
handler.rowner = true
export default handler
