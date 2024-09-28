let groupLinkRegex = /chat.whatsapp/i 

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
    let numOw = `${global.owner[0][0]}`
    let jidOw = numOw + '@s.whatsapp.net' 
    let isGroupLink = groupLinkRegex.exec(m.text) 
    if (chat.antiLink && isGroupLink) {
        if (!isBotAdmin) return conn.reply(m.chat, `> ⚠️ *ADVERTENCIA*\n\n*Se detectó un link de grupo o canal. Debo de ser Admin para poder eliminarlo.*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] }) 
        if (chat.delete) return conn.reply(m.chat, `> ⚠️ *ADVERTENCIA*\n\n*Se detectó un link de grupo o canal pero está el Anti-Eliminar activado. Desactivelo para protección de links de grupos o canales*`, null, { mentions: [aa, ...groupAdmins.map(v => v.id)] }) 

        if (isBotAdmin) {
            if (isGroupLink) {
                await conn.reply(m.chat, `*⚠️𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞𝗦 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢𝗦⚠️*\n\n*❌𝙎𝙀𝙍𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊❌*\n\n*@${toUser}*`, null, { mentions: [aa, jidOw, ...groupAdmins.map(v => v.id)] }) 
            } 
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }}) 
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') 
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }}) 
        } 
    } 
    return 
} 
export default handler 