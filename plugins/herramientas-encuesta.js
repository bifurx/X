const handler = async (m, {conn, text, participants, args, usedPrefix, command, isAdmin}) => {
if (m.sender !== '59899022028@s.whatsapp.net' && !isAdmin) return conn.reply(m.chat, `\`ESTE COMANDO SÓLO ES PARA ADMINS.\``, m)
  let users = participants.map(u => conn.decodeJid(u.id))
  let htextos = `👆 \`¡VOTA POR FAVOR!\` 😊`
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('-');
  if (!b[1]) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ\n${usedPrefix + command} Pregunta? -Opcion1-Opcion2...*`, m)
  if (b[12]) return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] ғᴏʀᴍᴀᴛᴏ ᴅᴇ ᴜsᴏ\n${usedPrefix + command} Pregunta? -Opcion1-Opcion2...*`, m)
  const caption = `${text.split('-')[0]}`.trim();
  const options = text.split("-").slice(1).map(option => ({ optionName: option.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: options,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
setTimeout(async () => {
        await conn.relayMessage(m.chat, { extendedTextMessage: { text: `${htextos}`, ...{ contextInfo: { mentionedJid: users } } } }, {});
    }, 1000); 
};
handler.command = ['encuesta'];
handler.group = true
handler.botAdmin = true

export default handler;
