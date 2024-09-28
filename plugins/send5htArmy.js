let handler = async (m, { conn, text }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return
if (!m.quoted) return
let destino = '120363231967502326@g.us'

    const groupMetadata = (conn.chats[destino] || {}).metadata || await conn.groupMetadata(destino).catch(_ => null) || {}
    const participants = groupMetadata.participants || []
    const groupAdmins = participants.filter(p => p.admin)
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || destino.split`-`[0] + '@s.whatsapp.net'
    
    const participantsToMention = participants.filter(u => conn.decodeJid(u.id) !== owner).map(u => conn.decodeJid(u.id))

    conn.sendMessage(destino, { forward: m.quoted.fakeObj, mentions: participantsToMention })
}

handler.command = ['send5']
handler.rowner = true
export default handler