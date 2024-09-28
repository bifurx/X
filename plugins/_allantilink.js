import fetch from 'node-fetch'  

const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com|t.me/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com|x.com/i 
const isLinkDc = /discord.com|discord.gg/i 
const isLinkTh = /threads.net/i 
const isLinkTch = /twitch.tv/i
  
let handler = m => m
handler.before = async function (m, { conn, participants, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (isAdmin || isOwner || isROwner || m.fromMe) return
if (m.isBaileys && m.fromMe) return 
if (!m.isGroup) return 
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
const groupAdmins = participants.filter(p => p.admin)
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
const isAntiLinkDc = isLinkDc.exec(m.text)
const isAntiLinkTh = isLinkTh.exec(m.text)
const isAntiLinkTch = isLinkTch.exec(m.text)
 
if (chat.antiTiktok && isAntiLinkTik) {  
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mTiktok} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}
    
if (chat.antiYoutube && isAntiLinkYt) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mYoutube} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}
    
if (chat.antiTelegram && isAntiLinkTel) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mTelegram} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}
    
if (chat.antiFacebook && isAntiLinkFb) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mFacebook} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}
    
if (chat.antiInstagram && isAntiLinkIg) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mInstagram} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}
    
if (chat.antiTwitter && isAntiLinkTw) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mX} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}

if (chat.antiDiscord && isAntiLinkDc) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mDiscord} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}

if (chat.antiThreads && isAntiLinkTh) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mThreads} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}

if (chat.antiTwitch && isAntiLinkTch) {
if (chat.delete) return m.reply(mid.mAdvertencia + mid.mAntiDelete)   
if (isBotAdmin) {
await conn.reply(m.chat, `${mid.mAdvertencia + mid.mTwitch} *@${toUser}*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] })
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}}
return 
}
export default handler
