let handler = async (m, { conn, isOwner }) => {
let users = Object.entries(global.db.data.users)
.filter(([jid, userData]) => userData[m.chat] && userData[m.chat].inGroup && userData[m.chat].inGroup.silenciar);
let caption = `
👥 \`USUARIOS SILENCIADOS\` 👥

│ *Total : ${users.length} Usuarios* ${users.length > 0 ? '\n' + users.map(([jid], i) => `
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}`.trim();
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) });
}
handler.command = /^silenciados$/i;
handler.rowner = true;
export default handler;