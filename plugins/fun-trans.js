const handler = async (m, {conn}) => {
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
if (!who) return conn.reply(m.chat, '[❗] MENCIONE A UNA PERSONA O RESPONDA A UN MENSAJE.', m)
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/transgender', { avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'), }), 'hornycard.png', '*🏳️‍⚧️🤨*', m);
};
handler.command = /^(trans|traba|travesti)$/i;
handler.group = true
handler.botAdmin = true
export default handler;
