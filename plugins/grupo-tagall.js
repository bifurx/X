let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {

if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
if (m.chat === '120363316167679155@g.us' && !isOwner) return
if (!db.data.chats[m.chat].menciones && !isOwner) return conn.reply(m.chat, `Comandos de menciones deshabilitados.`, m)
const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)
let htextos = `${text ? text : "_no_establecido_"}`
let oi = `*MENSAJE:* ${htextos}`
let teks = `*😾HOLAAAAAAAAAA😾*\n\n${oi}\n\n${readMore}`
// Lista de jids a excluir
    const excludeJids = ['59898303505@s.whatsapp.net']; // Agrega más jids aquí

    for (let mem of participants) {
        if (!excludeJids.includes(mem.id)) { // Verifica si el jid no está en la lista de excluidos
            teks += `@${mem.id.split('@')[0]} `
        }
    }

    // Filtra las menciones excluyendo los jids en la lista
    conn.sendMessage(m.chat, { 
        text: teks, 
        mentions: participants
            .filter(a => !excludeJids.includes(a.id))
            .map(a => a.id) 
    }, { quoted: m })
}
handler.command = ['tagall', 'todos']
handler.group = true
handler.botAdmin = true
//handler.admin = true
export default handler
