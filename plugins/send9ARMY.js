let handler = async (m, { conn, text }) => {

if (m.sender !== '59899022028@s.whatsapp.net') return

if (!m.quoted) return

let destino = '120363231967502326@g.us'

conn.sendMessage(destino, { forward: m.quoted.fakeObj, mentions: null })

}

handler.command = ['send9']

handler.rowner = true

export default handler