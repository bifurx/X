const handler = async (m, {args, usedPrefix, command}) => {
if (!db.data.chats[m.chat].game) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
const fa = `
*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁*

*📌 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:* 
*${usedPrefix + command} 100*`.trim();
  if (!args[0]) return conn.reply(m.chat, fa, m);
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date - users.lastslot < 10000) return conn.reply(m.chat, `*⏳ 𝙴𝚂𝙿𝙴𝚁𝙴 ${msToTime(time - new Date())} 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙰𝙿𝙾𝚂𝚃𝙰𝚁*`, m);
  const emojis = ['😍', '💩', '❤️'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `*𝙶𝙰𝙽𝙰𝚂𝚃𝙴! 🎁 +${apuesta + apuesta} 𝚇𝙿*`;
  } else if (a == b || a == c || b == c) {
    end = `*🔮 𝙲𝙰𝚂𝙸 𝙻𝙾 𝙻𝙾𝙶𝚁𝙰𝚂!, 𝚂𝙸𝙶𝚄𝙴 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾*\n*𝚃𝙾𝙼𝙰 +10 XP*`;
  } else {
    end = `*❌ 𝙿𝙴𝚁𝙳𝙸𝚂𝚃𝙴 -${apuesta} 𝚇𝙿*`;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
🎰 | *SLOTS* 
────────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
────────
🎰 | ${end}`);
};
handler.command = ['slot'];
handler.group = true
handler.botAdmin = true
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}

