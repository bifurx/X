let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, 𝚈𝙰 𝙴𝚂 𝙷𝙾𝚁𝙰 𝙳𝙴 𝚀𝚄𝙴 𝚃𝙴 💍 𝙲𝙰𝚂𝙴𝚂 𝙲𝙾𝙽 ${toM(b)}, 𝙻𝙸𝙽𝙳𝙰 𝙿𝙰𝚁𝙴𝙹𝙰💓*`, null, {
mentions: [a, b]
})}
handler.command = ['formarpareja','formarparejas']
handler.group = true
handler.botAdmin = true
export default handler
