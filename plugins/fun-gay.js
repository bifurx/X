let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let ava
ava = await conn.profilePictureUrl(who, 'image').catch(_ => null);
if (!ava) return conn.reply(m.chat, '*EL USUARIO NO TIENE FOTO VISIBLE PARA TODOS*', m)
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {  
avatar: ava,   
}), 'error.png', `*🏳️‍🌈🏳️‍🌈*`, m)   
};
handler.command = /^(gay)$/i
handler.group = true
handler.botAdmin = true
export default handler