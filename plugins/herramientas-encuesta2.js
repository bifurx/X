const handler = async (m, {conn, text, args, usedPrefix, command, isAdmin, isOwner}) => {

if (!isOwner) return 

const groupMetadata = (m.isGroup ? ((conn.chats['120363316167679155@g.us'] || {}).metadata || await conn.groupMetadata('120363316167679155@g.us').catch(_ => null)) : {}) || {}

const participants = (m.isGroup ? groupMetadata.participants : []) || []

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

conn.relayMessage('120363316167679155@g.us', sendPollMessage, {quoted: m});

setTimeout(async () => {

        await conn.relayMessage('120363316167679155@g.us', { extendedTextMessage: { text: `${htextos}`, ...{ contextInfo: { mentionedJid: users } } } }, {});

    }, 1000); 

};

handler.command = ['encuesta2'];

handler.group = true

handler.botAdmin = true

export default handler;