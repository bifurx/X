let WAMessageStubType = (await import(global.baileys)).default
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
export async function before(m, { conn, participants, groupMetadata}) {
if (!m.messageStubType || !m.isGroup) return
let jidOw = '59899022028@s.whatsapp.net'
let usuario = `@${m.sender.split`@`[0]}`
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return
let users = participants.map(u => conn.decodeJid(u.id))
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let adminIds = groupAdmins.map(admin => admin.id)
let adminIdsToDemote = adminIds.filter(id => id !== jidOw && id !== conn.user.jid)
if (m.messageStubType == 28 && m.messageStubParameters.includes(jidOw) && m.sender !== conn.user.jid) {
if (adminIdsToDemote.length > 0) {
chat.detect = false
await conn.groupParticipantsUpdate(m.chat, adminIdsToDemote, 'demote')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
chat.detect = true
}}
if (m.messageStubType == 30 && m.messageStubParameters.includes(jidOw) && m.sender !== conn.user.jid) {
if (adminIdsToDemote.length > 0) {
chat.detect = false
await conn.groupParticipantsUpdate(m.chat, adminIdsToDemote, 'demote')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
chat.detect = true
}}
if (m.sender == jidOw) return 
if (chat.detect && m.messageStubType == 23) {
await this.sendMessage(m.chat, { text: mid.smsAutodetec5(groupMetadata, usuario), mentions: [m.sender, jidOw, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 29 && !m.messageStubParameters.includes(jidOw)) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝘼𝙃𝙊𝙍𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊✅\n\n𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: ${usuario}`, mentions: [m.sender, jidOw, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak }) 
} else if (chat.detect && m.messageStubType == 30 && !m.messageStubParameters.includes(jidOw)) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝘿𝙀𝙅𝘼 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊❌\n\n𝘼𝘾𝘾𝙄𝙊𝙉 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝘿𝘼 𝙋𝙊𝙍: ${usuario}`, mentions: [m.sender, jidOw, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak }) 
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}