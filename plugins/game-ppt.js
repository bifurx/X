const handler = async (m, {conn, text, command, usedPrefix, args}) => {
if (!db.data.chats[m.chat].game) return conn.reply(m.chat, `Juegos deshabilitados.`, m)
const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';
if (!args[0]) return conn.reply(m.chat, `*𝐏𝐢𝐞𝐝𝐫𝐚 🗿, 𝐏𝐚𝐩𝐞𝐥 📄 𝐨 𝐓𝐢𝐣𝐞𝐫𝐚 ✂️*\n\n*—◉ 𝚙𝚞𝚎𝚍𝚎𝚜 𝚞𝚜𝚊𝚛 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜:*\n*◉ ${usedPrefix + command} piedra*\n*◉ ${usedPrefix + command} papel*\n*◉ ${usedPrefix + command} tijera*`, m);
  let astro = Math.random();
  if (astro < 0.34) {
    astro = 'piedra';
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'tijera';
  } else {
    astro = 'papel';
  }
  const textm = text.toLowerCase();
  if (textm == astro) {

    m.reply(`*🔰 Empate!*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
  } else if (text == 'papel') {
    if (astro == 'piedra') {

      m.reply(`*🥳 GANASTE! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    } else {

      m.reply(`*☠️ PERDISTE! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    }
  } else if (text == 'tijera') {
    if (astro == 'papel') {

      m.reply(`*🥳 GANASTE! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    } else {

      m.reply(`*☠️ PERDISTE! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    }
  } else if (textm == 'tijera') {
    if (astro == 'papel') {

      m.reply(`*🥳 GANASTE! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    } else {

      m.reply(`*☠️ PERDISTE! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    }
  } else if (textm == 'papel') {
    if (astro == 'piedra') {

      m.reply(`*🥳 GANASTE! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    } else {

      m.reply(`*☠️ PERDISTE! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    }
  } else if (textm == 'piedra') {
    if (astro == 'tijera') {

      m.reply(`*🥳 GANASTE! 🎉*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    } else {

      m.reply(`*☠️ PERDISTE! ❌*\n\n*👉🏻 Tu: ${textm}*\n*👉🏻 El Bot: ${astro}*`);
    }
  }

};
handler.command = /^(ppt)$/i;
handler.group = true
handler.botAdmin = true
export default handler;
