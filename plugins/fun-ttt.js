import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!db.data.chats[m.chat].game) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
if (text) return conn.fakeReply(m.chat, '[❗] YA NO ES NECESARIO PONER NOMBRE A LA SALA.\n\nSOLAMENTE PONER:\n* .ttt', '0@s.whatsapp.net', '')
conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return conn.sendButton(m.chat, `[ ❌ ] YA HAY UNA SALA CREADA A LA ESPERA DE UN SEGUNDO JUGADOR.`, null, null, [[`ELIMINAR SALA`, `.delttt`]], null, null, m)
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : '1')) 
if (room) {
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `❌ 𝙅𝙐𝙀𝙂𝙊 𝙏𝙍𝙀𝙎 𝙀𝙉 𝙍𝘼𝙔𝘼 ⭕
🫂 𝙅𝙐𝙂𝘼𝘿𝙊𝙍𝙀𝙎 *:*
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
𝙏𝙐𝙍𝙉𝙊 𝘿𝙀 *:* 
@${room.game.currentTurn.split('@')[0]}
`.trim()
if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })   
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
let caption = `❌ 𝙅𝙐𝙀𝙂𝙊 𝙏𝙍𝙀𝙎 𝙀𝙉 𝙍𝘼𝙔𝘼 ⭕

                ✅2️⃣⭕
                4️⃣⭕6️⃣
                ⭕8️⃣✅

[ ⌛ ] 𝙴𝚂𝙿𝙴𝚁𝙰𝙽𝙳𝙾 𝙰𝙻 𝚂𝙴𝙶𝚄𝙽𝙳𝙾 𝙹𝚄𝙶𝙰𝙳𝙾𝚁.`
await conn.sendButton(m.chat, caption, null, null, [[`🕹️ Ser segundo jugador!`, `.ttt ${text}`], [`Eliminar Sala`, `.delttt`]], null, null, fkontak)}
conn.game[room.id] = room
}
handler.command = /^ttt$/i
handler.group = true
handler.botAdmin = true
export default handler
