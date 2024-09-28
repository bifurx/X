let handler = async (m, { conn, text, command, usedPrefix, args }) => {
if (!db.data.chats[m.chat].game) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
let pp = 'https://media.istockphoto.com/id/460171067/es/foto/sacudir-el-bot%C3%B3n.jpg?s=612x612&w=0&k=20&c=TsX1krTyz8oyRNhpcbri4dguh3WyAZwYOwMu2T68S2A='
let textos = `\`\`\`CARA O CRUZ\n\nPUEDES ELEGIR LA OPCION USADO LOS COMANDO\n\n${usedPrefix + command} cara\n${usedPrefix + command} cruz\`\`\``
if (!args[0]) return await conn.sendMessage(m.chat, { image: { url: pp }, caption: textos, quoted: fkontak })
var astro = Math.random()
if (astro < 0.50) {//34
    astro = 'cara'
} else if (astro > 0.50){//34
astro = 'cruz' 
}
if (text == astro) {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙞𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙞𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙞𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
}else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}} else if (text == 'cruz') {
if (astro == 'cruz') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who)  

m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
} else if (text == 'cara') {
if (astro == 'cara') {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙂𝘼𝙉𝘼𝘿𝙊! 🎉 ]━━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
} else {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender 
let name = conn.getName(who) 

m.reply(`╭━━━━[ 𝙃𝘼 𝙋𝙀𝙍𝘿𝙄𝘿𝙊! 🤡 ]━━⬣\n┃${name.toUpperCase()} 𝙀𝙡𝙚𝙜𝙞𝙤́: ${text}\n┃𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤: ${astro}\n╰━━━━━━[ ${vs} ]━━━━━⬣`)
}
}}
handler.command = /^(suerte)$/i
handler.group = true
handler.botAdmin = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
