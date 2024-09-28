import similarity from 'similarity';

let handler = m => m;
handler.before = async function (m) {
if (m.fromMe) return 
  const thresholdLong = 0.5; 
  const thresholdShort = 0.72; 
  if (/pista/i.test(m.text)) return;
  const id = m.chat;
  if (!m.quoted || !m.quoted.fromMe) return !0;
    
  if (/^ⷮ/i.test(m.quoted.text)) {
    this.tekateki = this.tekateki ? this.tekateki : {};
    if (!(id in this.tekateki)) return m.reply('[❌] Ese acertijo ya ha terminado!');
    if (m.quoted.id == this.tekateki[id][0].id) {
      const json = JSON.parse(JSON.stringify(this.tekateki[id][1]));
      const response = json.response.toLowerCase().trim();
      const isLong = response.length >= 9;
      const threshold = isLong ? thresholdLong : thresholdShort;

      if (m.text.toLowerCase() == response || similarity(m.text.toLowerCase(), response) >= threshold) {
        m.react("✅");
        m.reply(`*✅𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔!*\n* *${json.response}*`);
        clearTimeout(this.tekateki[id][3]);
        delete this.tekateki[id];
      } else if (!isLong) {
        m.reply(`Casi lo logras!`);
      } else {
        m.react("❌");
      }
    }
  } else if (/𝗖𝗔𝗡𝗖𝗜𝗢𝗡/i.test(m.quoted.text)) {
    this.tebaklagu = this.tebaklagu ? this.tebaklagu : {};
    if (!(id in this.tebaklagu)) return m.reply('[❌] El juego ha terminado');
    if (m.quoted.id == this.tebaklagu[id][0].id) {
      const json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]));
      const response = json.response.toLowerCase().trim();
      const isLong = response.length >= 15;
      const threshold = isLong ? thresholdLong : thresholdShort;

      if (m.text.toLowerCase() == response || similarity(m.text.toLowerCase(), response) >= threshold) {
        m.react("✅");
        m.reply(`*✅𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗖𝗢𝗥𝗥𝗘𝗖𝗧𝗔!*\n* *🎵${json.question} - ${json.response}*`);
        clearTimeout(this.tebaklagu[id][3]);
        delete this.tebaklagu[id];
      } else {
        m.react("❌");
      }
    }
  }
  return !0;
};
export default handler;