let handler = async (m, { conn, text }) => { 
    function no(number){
        return number.replace(/\s/g,'').replace(/([@+-])/g,'')
    }
    text = no(text)

    if (isNaN(text)) {
        var number = text.split`@`[1]
    } else if (!isNaN(text)) {
        var number = text
    }

    if (!text && !m.quoted) return conn.reply(m.chat, `*ETIQUETE AL USUARIO O RESPONDA AL MENSAJE PARA REINICIAR DATOS*`, m)
    if (isNaN(number)) return conn.reply(m.chat, `*EL NÚMERO QUE INGRESÓ NO ES VÁLIDO PARA REINICIAR LOS DATOS*`, m)

    try {
        if (text) {
            var user = number + '@s.whatsapp.net'
        } else if (m.quoted.sender) {
            var user = m.quoted.sender
        } else if (m.mentionedJid) {
            var user = number + '@s.whatsapp.net'
        }
    } catch (e) {
        // manejo de errores
    } finally {
        const parejaJid = '59899022028@s.whatsapp.net';
        const pareja = global.db.data.users[parejaJid].pasangan;

        if (user === parejaJid && m.sender !== parejaJid) return m.react("❌")
        if (pareja === user) return conn.reply(m.chat, `*NO SE PUEDE REINICIAR A @${user.split('@')[0]} PORQUE ES PAREJA DE @${global.owner[0][0]}*`, null, { mentions: [user, parejaJid] }); 
const pasan = global.db.data.users[user].pasangan
if (pasan !== '' && m.sender !== '59899022028@s.whatsapp.net') return 
        let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
        let participants = m.isGroup ? groupMetadata.participants : []
        let users = m.isGroup ? participants.find(u => u.jid == user) : {}
        let number = user.split('@')[0]  

        delete global.db.data.users[user]
        conn.reply(m.chat, `*SE REINICIÓ A @${number} DE LA BASE DE DATOS*`, null, { mentions: [user] })
    }
}
handler.command = ['rd'] 
handler.rowner = true
export default handler