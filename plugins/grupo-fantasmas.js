let areJidsSameUser =  (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
} else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
if(total == 0) return conn.reply(m.chat, `𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙊 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎.`, m) 
m.reply(`*[ ⚠️ 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊𝙎 ⚠️ ]*\n\n𝙂𝙍𝙐𝙋𝙊: ${await conn.getName(m.chat)}\n*𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* ${sum}\n\n*[ 👻 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝙽𝙾𝚃𝙰: 𝙴𝚂𝚃𝙾 𝙿𝚄𝙴𝙳𝙴 𝙽𝙾 𝚂𝙴𝚁 𝟷𝟶𝟶% 𝙰𝙲𝙴𝚁𝚃𝙰𝙳𝙾.*`, null, { mentions: sider }) 
  break   
case "kickxxfantasmas":  
        if(total == 0) return conn.reply(m.chat, `𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙊 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎.`, m) 
       await m.reply(`⚠️ 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘾𝙄𝙊𝙉 𝘿𝙀 𝙄𝙉𝘼𝘾𝙏𝙄𝙑𝙊𝙎 ⚠️\n\n𝙂𝙍𝙐𝙋𝙊: ${await conn.getName(m.chat)}\n𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀𝙎: ${sum}\n\n[ 👻 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊𝙎 👻 ]\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*𝙀𝙇 𝘽𝙊𝙏 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝘼 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝙈𝙀𝙉𝘾𝙄𝙊𝙉𝘼𝘿𝘼, 𝙀𝙈𝙋𝙀𝙕𝘼𝘿𝙊 𝙀𝙇 20 𝙎𝙀𝙂𝙐𝙉𝘿𝙊, 𝙔 𝘾𝘼𝘿𝘼 10 𝙎𝙀𝙂𝙐𝙉𝘿𝙊𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍𝘼 𝙐𝙉 𝙉𝙐́𝙈𝙀𝙍𝙊*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       try {
         let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
       let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid)
       for (let user of users)
           if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin)
        {
        let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        kickedGhost.concat(res)
       await delay(1 * 10000)
       }} finally{
       }
break            
}}
handler.command = /^(fantasmas|kickxxfantasmas)$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))