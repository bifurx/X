let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin, isOwner }) => {
if (isNaN(args[0])) return m.reply(`[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 𝙳𝙴 𝙿𝙰𝙸́𝚂\n\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*${usedPrefix + command} 598*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`𝙽𝙾 𝙷𝙰𝚈 𝙽𝙸𝙽𝙶𝚄́𝙽 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝙽𝚃𝙴 𝙲𝙾𝙽 𝙴𝙻 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 +${lol}`)
let numeros = ps.map(v=> '➥ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
if (command === 'listanum') {
conn.reply(m.chat, `⚠️ 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎 𝘾𝙊𝙉 𝙀𝙇 𝙋𝙍𝙀𝙁𝙄𝙅𝙊 +${lol} 𝙌𝙐𝙀 𝙀𝙎𝙏𝘼𝙉 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 ⚠️\n\n` + numeros.join`\n`, m, { mentions: ps })
}
if (command === 'kicknum') {
if (!bot.restrict) return 
if (!isBotAdmin) return         
conn.reply(m.chat, `⚠️𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘾𝙄𝙊́𝙉 𝙄𝙉𝙄𝘾𝙄𝘼𝘿𝘼.⚠️\n\n❌𝙎𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝘼́ 𝙐𝙉 𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀 𝘾𝘼𝘿𝘼 5 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎.`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} 𝙔𝘼 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙊 𝙃𝘼 𝘼𝘽𝘼𝙉𝘿𝙊𝙉𝘼𝘿𝙊 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(5000)
} else return m.reply(`${lenguajeGB['smsAvisoFG']()}`)}
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler
