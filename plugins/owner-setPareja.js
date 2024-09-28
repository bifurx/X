let handler = async (m, { conn, text, command, usedPrefix }) => {
if (m.sender !== '59899022028@s.whatsapp.net') return 
let persona1
let persona2

const numberRegex = /@[0-9]+/g;
const numberMatches = text.match(numberRegex);
    
if (numberMatches) {
persona1 = numberMatches[0].replace('@', '') + '@s.whatsapp.net';
persona2 = numberMatches[1].replace('@', '') + '@s.whatsapp.net';
} else {
persona1 = m.mentionedJid[0]
persona2 = m.mentionedJid[1]
}
let users = global.db.data.users;
if (!users[persona1]) {
users[persona1] = {
pasangan: '',
pasanganTime: -1,
marry: '',
marryTime: -1,
historialp: [],
}}
if (!users[persona2]) {
users[persona2] = {
pasangan: '',
pasanganTime: -1,
marry: '',
marryTime: -1,
historialp: [],
}}
let ayg = global.db.data.users[persona1]
let beb = global.db.data.users[persona2]
const esParejaAntiguaParaM = ayg.historialp && ayg.historialp.includes(persona2);

if (esParejaAntiguaParaM) {
ayg.historialp = ayg.historialp.filter(id => id !== persona2);
beb.historialp = beb.historialp.filter(id => id !== persona1);
}
    
ayg.pasangan = persona2
beb.pasangan = persona1
const parts = text.split('|') 
const time = parseInt(parts[1].trim()) 

ayg.pasanganTime = +new Date() - time
beb.pasanganTime = +new Date() - time
    
let kz = await conn.reply(m.chat, `@${persona1.split("@")[0]} ❤️ @${persona2.split`@`[0]}\n\n😍𝙁𝙀𝙇𝙄𝘾𝙄𝙏𝘼𝘾𝙄𝙊𝙉𝙀𝙎😍\n\n😊𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 𝙴𝚂𝚃𝙰́𝙽 𝙴𝙽 𝚄𝙽𝙰 𝚁𝙴𝙻𝙰𝙲𝙸𝙾́𝙽.\n\n𝚀𝚄𝙴 𝙳𝚄𝚁𝙴 𝙿𝙾𝚁 𝚂𝙸𝙴𝙼𝙿𝚁𝙴 𝚂𝚄 𝙰𝙼𝙾𝚁 𝚈 𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳❤️`, fkontak, {contextInfo: { mentionedJid: [ persona1, persona2 ] }});
conn.sendMessage(m.chat, { react: { text: "❤️", key: kz.key }})
};
handler.command = /^setpareja$/i;
handler.rowner = true
export default handler;