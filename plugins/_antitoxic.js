const toxicRegex = /jhdkdofjskslsldjxjsl|dnslsjfjwkwjsjdkwkkddk/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://i.imgur.com/5Q1MqGD.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await m.reply(`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}\n\n${lenguajeGB['smsToxic1']()}\n\n${lenguajeGB['smsToxic3']()} *${user.warn}/4* ⚠️`, false, { mentions: [m.sender] })}
if (user.warn >= 4) {
user.warn = 0
await m.reply(`*@${m.sender.split`@`[0]} ${lenguajeGB['smsToxic7']()}*`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
return !1
}
