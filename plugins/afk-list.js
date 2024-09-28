let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
if (!user) return conn.reply(m.chat, `[❗] NO SE ENCONTRARON DATOS DEL USUARIO.`, m)
let afkList = []
for (let jid in user) {
if (jid.endsWith('@g.us')) {
let inGroup = user[jid].inGroup
if (inGroup && inGroup.afk > -1) {
let groupName = await conn.getName(jid) 
let afkDuration = `${(new Date - inGroup.afk).toTimeString()}`
afkList.push({
groupName: groupName, 
afkReason: inGroup.afkReason,
afkTime: afkDuration
})
}}}
if (afkList.length === 0) {
return conn.reply(m.chat, `[❗] NO TIENES AFK ACTIVO EN NINGÚN GRUPO.`, m)
}
let afkMessage = '🟢 *AFK ACTIVOS:* 🟢'
for (let afk of afkList) {
afkMessage += `\n\n*Grupo:* ${afk.groupName}\n*Razón:* ${afk.afkReason || 'No especificada'}\n*Tiempo inactivo:* ${afk.afkTime}`
}
conn.reply(m.chat, afkMessage, m)
}
handler.command = /^afklist$/i
handler.rowner = true
export default handler