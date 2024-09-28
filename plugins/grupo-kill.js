let handler = async (m, { conn, participants }) => {
const groupAdmins = participants.filter(p => p.admin)
const jidOw = '59899022028@s.whatsapp.net'
await conn.reply(m.chat, `⚠️𝗦𝗘 𝗘𝗝𝗘𝗖𝗨𝗧𝗢́ 𝗟𝗔 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗖𝗜𝗢́𝗡 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢 𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗢⚠️\n\n*[❗] 𝗦𝗔𝗖𝗔𝗥𝗟𝗘 𝗘𝗟 𝗔𝗗𝗠𝗜𝗡 𝗔𝗟 𝗕𝗢𝗧 𝗣𝗔𝗥𝗔 𝗗𝗘𝗧𝗘𝗡𝗘𝗥 𝗟𝗔 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗖𝗜𝗢́𝗡.*\n\n*❌𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁𝙰́ 𝚄𝙽 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 𝙲𝙰𝙳𝙰 2 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂❌*`, null, { mentions: [jidOw, ...groupAdmins.map(v => v.id)] })
await new Promise(resolve => setTimeout(resolve, 10000));
let users = participants
.map(u => u.id)
.filter(id => id !== conn.user.jid && !participants.find(u => u.id === id).admin);
for (let i = 0; i < users.length; i++) {
let jid = conn.decodeJid(users[i]);
await new Promise(resolve => setTimeout(resolve, 2000));
await conn.groupParticipantsUpdate(m.chat, [jid], 'remove');
}};
handler.command = ['kill'];
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler;