/*import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command, isOwner}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup && !isOwner) return conn.reply(m.chat, `Comandos +18 deshabilitados`, m)
if (!text) throw `[❗] 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*${usedPrefix + command} Sexo*`
try {
const vids_ = {from: m.sender, urls: [],};
if (!global.videoListXXX) {
global.videoListXXX = [];
}
if (global.videoListXXX[0]?.from == m.sender) {
global.videoListXXX.splice(0, global.videoListXXX.length);
}
const res = await xnxxsearch(text);
const json = res.result;
let cap = `🔍 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 𝘿𝙀 𝙇𝘼 𝘽𝙐𝙎𝙌𝙐𝙀𝘿𝘼 : ${text.toUpperCase()}\n\n••••••••••••••••••••••••••••••••••••`;
let count = 1;
for (const v of json) {
const linkXXX = v.link;
vids_.urls.push(linkXXX);
cap += `\n❉ 𝙊𝙋𝘾𝙄𝙊𝙉 : *(${count})*\n❉ 𝙏𝙄𝙏𝙐𝙇𝙊: ${v.title}\n❉ 𝙇𝙄𝙉𝙆: ${v.link}\n❉ 𝙄𝙉𝙁𝙊: ${v.info}`
cap += '\n\n' + '••••••••••••••••••••••••••••••••••••' + '\n\n'
count++;
}
m.reply(cap);
global.videoListXXX.push(vids_);
} catch {
throw e;
}}
handler.command = /^xnxxlinks$/i
handler.group = true
handler.botAdmin = true
export default handler

async function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = [];
      const url = [];
      const desc = [];
      const results = [];
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb').each(function(c, d) {
          url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb-under').each(function(c, d) {
          desc.push($(d).find('p.metadata').text());
          $(d).find('a').each(function(e, f) {
            title.push($(f).attr('title'));
          });
        });
      });
      for (let i = 0; i < title.length; i++) {
        results.push({title: title[i], info: desc[i], link: url[i]});
      }
      resolve({code: 200, status: true, result: results});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}*/