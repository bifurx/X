let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return 
let persona1
let persona2

const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
    
if (numberMatches) {
persona1 = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
persona2 = numberMatches[1].replace('@', '') + '@s.whatsapp.net';

} else {
persona1 = m.mentionedJid[0]
persona2 = m.mentionedJid[1]
}
    
let ayg = global.db.data.users[persona1]
let beb = global.db.data.users[persona2]
    
ayg.marry = persona2
beb.marry = persona1
const parts = text.split('|') 
const time = parseInt(parts[1].trim()) 

ayg.marryTime = +new Date() - time
beb.marryTime = +new Date() - time
    
let kz = await conn.reply(m.chat, `💞 *¡Felicidades!* 💞\n\n*@${persona1.split("@")[0]}* ha aceptado la propuesta de matrimonio de *@${persona2.split`@`[0]}*.\n\n🎉 *¡Oficialmente están casados!* 🎉\n\nQue su amor siga creciendo y floreciendo cada día más. 🌸`, m, { contextInfo: { mentionedJid: [ persona1, persona2 ]}})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💗", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️‍🔥", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩵", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💚", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💛", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩷", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️", key: kz.key }})
await delay(3000)
conn.sendMessage(m.chat, { react: { text: "💗", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️‍🔥", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩵", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💚", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "💛", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "🩷", key: kz.key }})
await delay(700)
conn.sendMessage(m.chat, { react: { text: "❤️", key: kz.key }})
};
handler.command = /^setmarry$/i;
export default handler;