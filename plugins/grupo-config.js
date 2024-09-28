let handler = async (m, { conn, participants, groupMetadata }) => {
const { isBanned, welcome, detect, antiver, antiLink, antiLink2, antiInstagram, antitoxic, modoadmin, modohorny, menciones, delete: del } = global.db.data.chats[m.chat]
    let text = `
[⚙️] 𝙲𝙾𝙽𝙵𝙸𝙶 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾 [⚙️]

*Nombre:* ${groupMetadata.subject}

${groupMetadata.id}

*Configuración de grupo:*
 ${isBanned ? '✅' : '❌'} BanChat
 ${welcome ? '✅' : '❌'} Welcome
 ${detect ? '✅' : '❌'} Detect
 ${antiver ? '✅' : '❌'} Anti Ver Una Vez
 ${del ? '✅' : '❌'} Anti Eliminar Mensajes
 ${modoadmin ? '✅' : '❌'} Modo Admin
 ${modohorny ? '✅' : '❌'} Modo Adulto
 ${antiLink ? '✅' : '❌'} AntiLinks Grupos WhatsApp
 ${antiLink2 ? '✅' : '❌'} ANTI LINKS FULL
 ${antiInstagram ? '✅' : '❌'} AntiLinks Instagram
 ${menciones ? '✅' : '❌'} Uso de .tagall y ht
 ${antitoxic ? '✅' : '❌'} AntiToxic`.trim()
conn.fakeReply(m.chat, text, '0@s.whatsapp.net', 'CONFIG')
}
handler.command = /^config$/i
handler.group = true
handler.botAdmin = true
export default handler
