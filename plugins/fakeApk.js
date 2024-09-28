let handler = async (m, { conn, text, command }) => {

const doc = ['vnd.android.package-archive'];
const document = doc[Math.floor(Math.random() * doc.length)];
let name = await conn.getName(m.sender)
const buttonMessage= {
    'document': {url: `https://youtu.be/a9jxNusr0tE`},
    'mimetype': `application/${document}`,
    'fileName': `WhatsApp_Hack.apk`,
    'fileLength': 99999999999,
    'pageCount': 98342,
    'contextInfo': {
      'isForwarded': false,
      },
    'caption': null,
    'headerType': 6};
await conn.sendMessage(m.chat, buttonMessage, {quoted: null});
}
handler.command = ['kg']
handler.rowner = true
export default handler