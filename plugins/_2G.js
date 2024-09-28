/*let handler = async (m, { conn, participants }) => {
 
const testo = `*ENTREN AL GRUPOOO* https://chat.whatsapp.com/LTxmMuOawAyLM9RtSSwaTN\n\n*ESTE SE VA A ELIMINAR POR LOS RETARDADOS DE LOS ADMINS QUE LO ROBARON*\n\nENTREEEEEN`
let users = participants.map(u => conn.decodeJid(u.id))
if (m.sender === '59898025027@s.whatsapp.net') {
for (let i = 0; i < 50; i++) {
        setTimeout(async () => {
            await conn.relayMessage(m.chat, {
                extendedTextMessage: {
                    text: `${testo}`,
                    ...{ contextInfo: { mentionedJid: users }}
                }
            }, {});
        }, i * 200); 
    }
    }
};

handler.customPrefix = /^sd$/i
handler.command = new RegExp
//handler.rowner = true
export default handler*/