let handler = async (m, { conn, text, command, usedPrefix }) => {
const convertToMilliseconds = (timeText) => {
let totalMilliseconds = 0;
let regex = /(\d+)\s*(minutos|horas)/g;
let match;
while ((match = regex.exec(timeText)) !== null) {
let value = parseFloat(match[1]);
let unit = match[2];
if (unit === 'minutos') {
totalMilliseconds += value * 60 * 1000;
} else if (unit === 'horas') {
totalMilliseconds += value * 60 * 60 * 1000;
}}
return totalMilliseconds;
};
let result = convertToMilliseconds(text);
if (result === 0) {
return conn.reply(m.chat, 'Formato incorrecto. Usa .ms x horas y/o y minutos', m);
}
conn.reply(m.chat, `${result}`, m);
}
handler.command = ['ms']
handler.rowner = true
export default handler