let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
if (!text) return m.reply(`[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙿𝙾𝚁 𝙴𝙻 𝙲𝚄𝙰𝙻 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰 𝙻𝙰 𝙿𝚁𝙴𝚂𝙴𝙽𝙲𝙸𝙰 𝙳𝙴 𝙻𝙾𝚂 𝙰𝙳𝙼𝙸𝙽𝙸𝚂.`)
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*𝙈𝙀𝙉𝙎𝘼𝙅𝙀:* _${pesan}_`
let textoA = `*[⛔]* 𝗣𝗥𝗘𝗦𝗘𝗡𝗖𝗜𝗔 𝗗𝗘 𝗔𝗗𝗠𝗜𝗡𝗦 *[⛔]*\n\n👉🏻 ${oi}\n\n`
let textoB = 
`${listAdmin}\n*⊱──────────────────⊰*`.trim()
await conn.reply(m.chat, textoA + textoB, m, { mentions: [...groupAdmins.map(v => v.id)] }) 
}
handler.command = /^admins$/i
handler.group = true
handler.botAdmin = true
export default handler
