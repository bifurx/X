let handler = async (m, { text, args, usedPrefix, command, conn }) => { 
//if (m.sender !== '59899022028@s.whatsapp.net') return 
const parts = text.split('|') 
if (!parts) return 
const hax = parts[0].trim() 
const time = parseInt(parts[1].trim()) 
const jid = parts[2].trim() 
let user = global.db.data.users[m.sender] 
let inGroup = user[jid].inGroup;
inGroup.afk = +new Date() - time
inGroup.afkReason = hax
let teks = `⚠️ *ADVERTENCIA* ⚠️
*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
*[❗] NO ETIQUETEN A @${m.sender.split("@")[0]}* *ESTARÁ INACTIVO(A)*\n\n*[❔] RAZÓN:* ${hax ? hax : ''}`
await conn.reply(m.chat, teks, fkontak, { contextInfo: { mentionedJid: [ m.sender ]}})
}
handler.command = /^afk5/i 
handler.rowner = true 
export default handler 
