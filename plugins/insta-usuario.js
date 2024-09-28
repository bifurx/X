import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, command }) => {
if (!text) return conn.reply(m.chat, '⚠️Debes poner tu usuario de Instagram Y SIN "@".\n\n*Ejemplo:*\n*👉.ig _usuario_*', m);
if (m.mentionedJid && m.mentionedJid[0]) return conn.reply(m.chat, '⚠️No puedes mencionar a alguien.', m);
if (text.startsWith('@')) return conn.reply(m.chat, '⚠️Debes ponerlo sin el "@"', m);
if (text.startsWith('_') && text.endsWith('_')) return conn.reply(m.chat, 'No funciona con usuarios que empiezan y terminan con "_" (guión bajo)😔', m)
m.react("🤳")
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/1af5d76a06d74180fac0d.jpg')
//let provi = ["https://telegra.ph/file/68c65199ac7fa3dc34b73.jpg", "https://telegra.ph/file/1af5d76a06d74180fac0d.jpg"].getRandom()
let media = await(await fetch(pp)).buffer()
let link = await uploadImage(media)
let name = await conn.getName(who)
let instagramUrl = `https://www.instagram.com/${text}`;
let str = `☝️ \`𝙏𝙊𝘾𝘼 𝙇𝘼 𝙁𝙊𝙏𝙊\` ☝️

*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
👤𝙄𝙂 𝙙𝙚: *@${m.sender.split("@")[0]}*

*✨𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* @${text}

👇 \`𝘛𝘢𝘮𝘣𝘪𝘦́𝘯 𝘦𝘭 𝘭𝘪𝘯𝘬 𝘢𝘣𝘢𝘫𝘰\`📌

*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*
${instagramUrl} 

*▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔*`

await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": await(await fetch(link)).buffer(), 
"title": `🙂 ${text} 🙂`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": link, 
"sourceUrl": `${instagramUrl}`,
}
}
}, { quoted: fkontak })
}
handler.command = /^ig$/i
handler.group = true
handler.botAdmin = true
export default handler