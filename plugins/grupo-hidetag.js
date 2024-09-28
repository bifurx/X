let generateWAMessageFromContent = (await import(global.baileys)).default

let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {

if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin && !isOwner) 
return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
if (m.chat === '120363316167679155@g.us' && !isOwner) return
if (!db.data.chats[m.chat].menciones && !isOwner) 
return conn.reply(m.chat, `Comandos de menciones deshabilitados.`, m)

if (!text && !m.quoted) 
return conn.reply(m.chat, `[❗] ᴘᴏɴɢᴀ ᴜɴ ᴛᴇxᴛᴏ ᴏ ʀᴇꜱᴘᴏɴᴅᴀ ᴀ ᴜɴ ᴍᴇɴꜱᴀᴊᴇ ᴅᴇ ᴛᴇxᴛᴏ/ɪᴍᴀɢᴇɴ/ᴠɪᴅᴇᴏ/ᴀᴜᴅɪᴏ/ꜱᴛɪᴄᴋᴇʀ\n\nᴇꜱᴛᴏ ʀᴇᴇɴᴠÍᴀ ᴇʟ ᴄᴏɴᴛᴇɴɪᴅᴏ ᴘᴇʀᴏ ᴄᴏɴ ᴜɴᴀ ᴍᴇɴᴄɪÓɴ ᴏᴄᴜʟᴛᴀ ᴀ ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴘᴀʀᴛɪᴄɪᴘᴀɴᴛᴇꜱ ᴅᴇʟ ɢʀᴜᴘᴏ`, m)

    const groupAdmins = participants.filter(p => p.admin)
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'

    const participantsToMention = m.chat === '120363231967502326@g.us'
        ? participants.filter(u => conn.decodeJid(u.id) !== owner).map(u => conn.decodeJid(u.id))
        : participants.map(u => conn.decodeJid(u.id))

    try { 
        if (!isOwner) {
        conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participantsToMention }, {quoted: m})
} else if (isOwner) {
    conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participantsToMention })
    }
    } catch {  
        if (!isOwner) {
        conn.sendMessage(m.chat, { text: text ? text : '', mentions: participantsToMention }, {quoted: m}, { ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 })
            } else if (isOwner) {
                conn.sendMessage(m.chat, { text: text ? text : '', mentions: participantsToMention }, { ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 })
                }
    }
}
handler.customPrefix = /^h/i
handler.command = /^t$/i
handler.group = true
//handler.botAdmin = true
export default handler