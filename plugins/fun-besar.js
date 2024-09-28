let handler = async (m, { conn, command, text }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null)
if (who === conn.user.jid) return conn.reply(m.chat, `AY NO QUE ASCO, SALÍ DE ACÁ🤨`, m)
if (!who) return conn.reply(m.chat, `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 𝙰 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙱𝙴𝚂𝙰𝚁👄`, m)
let pasan = global.db.data.users[m.sender].pasangan
let pasax = global.db.data.users[who].pasangan
if (global.db.data.users[m.sender].pasangan != "" && global.db.data.users[global.db.data.users[m.sender].pasangan].pasangan == m.sender && global.db.data.users[m.sender].pasangan != who) return conn.reply(m.chat, `*SOS INFIEL!? @${pasan.split`@`[0]} MIRÁ..🤨*`, m, { contextInfo: { mentionedJid: [ pasan ] }})
if (pasax && m.sender !== pasax) return conn.reply(m.chat, `*@${who.split`@`[0]} TIENE PAREJA, RESPETE..🤨*`, m, { contextInfo: { mentionedJid: [ who ] }})
let teks = `${pickRandom([ `¡Muah! 💋 Beso virtual enviado con cariño.`, `¡Besoo enviado! 💋`, `¡Hermoso beso virtual para ti! 💋` ])}`.trim()
let tekss = `
${teks}

*💌Lo recibe:* @${who.split`@`[0]}

*😚De parte de:* @${m.sender.split("@")[0]}
`.trim()
let tek1 = `@${who.split`@`[0]} rechazó el beso y le corrió la cara a @${m.sender.split("@")[0]} 🤣`
let tekxx = [tekss, tek1].getRandom()
let react
if (tekxx.includes('Lo recibe')) {
    react = "💋"
} else react = "🤣"
let kz = await conn.reply(m.chat, tekxx, m, { contextInfo: { mentionedJid: [ who, m.sender ]}})
conn.sendMessage(m.chat, { react: { text: react, key: kz.key }})
}
handler.command = /^(kiss|beso|besar)/i
handler.group = true
handler.botAdmin = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}