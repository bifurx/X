const handler = async (m, {conn}) => {
const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
if (who === conn.user.jid) return conn.reply(m.chat, '*NO, YO NO VOY PRESO😂👿',m)
if (!who) return conn.reply(m.chat, '[❗] MENCIONE A UNA PERSONA O RESPONDA A UN MENSAJE.', m)
let ava = await conn.profilePictureUrl(who, 'image').catch(_ => null);
if (!ava) return conn.reply(m.chat, '*EL USUARIO NO TIENE FOTO VISIBLE PARA TODOS.*', m)
let years = `${pickRandom(['2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'])}`
let razon = `${pickRandom(['SER TAN PUTA','SER TAN LIND@😍','SER TAN IMBECIL🙄','SER TAN PAJER@🤣','ACOSADOR🤢','INFIEL','GAY🏳️‍🌈🌈','TROLA','CARGAR TANTA BELLEZA😍','SER TAN FE@🤮','CHUPAR TANTAS VERGAS🍆'])}`
conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/jail', { avatar: ava }), 'hornycard.png', `*CUMPLIRÁ LA PENA DE ${years} AÑOS POR ${razon}*`, fkontak);
};
handler.command = /^(carcel|cárcel|preso|presa)$/i;
handler.group = true
handler.botAdmin = true
export default handler;

function pickRandom(list) {

return list[Math.floor(Math.random() * list.length)]}