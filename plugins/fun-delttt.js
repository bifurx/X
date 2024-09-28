let MessageType = (await import(global.baileys)).default
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return await conn.reply(m.chat, `[❗] 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝙿𝙰𝚁𝚃𝙸𝙳𝙰\n\n💫𝙸𝙽𝙸𝙲𝙸𝙰𝚁 𝙿𝙰𝚁𝚃𝙸𝙳𝙰:\n${usedPrefix}ttt`, m)
delete conn.game[room.id]
await conn.sendButton(m.chat, `𝙇𝘼 𝙎𝘼𝙇𝘼 𝙁𝙐𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝘼`, null, null, [[`🕹️ JUGAR!`, `.ttt`]], null, null, m)
}
handler.command = /^delttt$/i
handler.group = true
handler.botAdmin = true
export default handler
