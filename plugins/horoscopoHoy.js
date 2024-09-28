import axios from 'axios';
import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, usedPrefix }) => {
let link = "https://telegra.ph/file/cd132232c09831825aed2.jpg"
let caption = `🌠 \`INGRESE SU SIGNO\` 🌠

♈ .horoscopo aries
♉ .horoscopo tauro
♊ .horoscopo geminis
♋ .horoscopo cancer
♌ .horoscopo leo
♍ .horoscopo virgo
♎ .horoscopo libra
♏ .horoscopo escorpio
♐ .horoscopo sagitario
♑ .horoscopo capricornio
♒ .horoscopo acuario
♓ .horoscopo piscis`
if (command === 'horoscopo' && !text || command === 'horóscopo' && !text) {
return conn.reply(m.chat, caption, m)
} else if (command === 'horoscopo2' && !text || command === 'horóscopo2' && !text) {
return conn.sendButton(m.chat, null, null, link, [[`♈ ARIES ♈`, `.horoscopo aries`], [`♉ TAURO ♉`, `.horoscopo tauro`], [`♊ GEMINIS ♊`, `.horoscopo geminis`], [`♋ CANCER ♋`, `.horoscopo cancer`], [`♌ LEO ♌`, `.horoscopo leo`], [`♍ VIRGO ♍`, `.horoscopo virgo`], [`♎ LIBRA ♎`, `.horoscopo libra`], [`♏ ESCORPIO ♏`, `.horoscopo escorpio`], [`♐ SAGITARIO ♐`, `.horoscopo sagitario`], [`♑ CAPRICORNIO ♑`, `.horoscopo capricornio`], [`♒ ACUARIO ♒`, `.horoscopo acuario`], [`♓ PISCIS ♓`, `.horoscopo piscis`]], null, null, fkontak)
}
const signosZodiacales = ['aries', 'tauro', 'geminis', 'cancer', 'leo', 'virgo', 'libra', 'escorpio', 'sagitario', 'capricornio', 'acuario', 'piscis'];
if (!signosZodiacales.some(signo => text.toLowerCase().includes(signo.toLowerCase()))) return conn.reply(m.chat, `Signo inválido.`, fkontak);
let sign = text.trim().toLowerCase();
if (sign === 'escorpio') {
sign = 'escorpion';
}
try {
let response = await axios.get(`https://www.horoscopo.com/horoscopos/general-diaria-${sign}`);
let html = response.data;
let startIndex = html.indexOf('<p>') + '<p>'.length;
let endIndex = html.indexOf('</p>', startIndex);
let horoscope = html.substring(startIndex, endIndex);
let tes1 = horoscope.split`-`[0];
let tes2 = horoscope.split`-`[1];
let teks = `*📅 FECHA:*\n* ${tes1}\n\n${tes2}`
let emoji = '';
switch (text.toLowerCase()) {
    case 'aries':
        emoji = "♈";
        break;
    case 'tauro':
        emoji = "♉";
        break;
    case 'geminis':
        emoji = "♊";
        break;
    case 'cancer':
        emoji = "♋";
        break;
    case 'leo':
        emoji = "♌";
        break;
    case 'virgo':
        emoji = "♍";
        break;
    case 'libra':
        emoji = "♎";
        break;
    case 'escorpio':
        emoji = "♏";
        break;
    case 'sagitario':
        emoji = "♐";
        break;
    case 'capricornio':
        emoji = "♑";
        break;
    case 'acuario':
        emoji = "♒";
        break;
    case 'piscis':
        emoji = "♓";
        break;
    default:
        break;
}
m.react(emoji)
let link = "https://telegra.ph/file/cd132232c09831825aed2.jpg"
let kz = await conn.sendMessage(m.chat, { 
text: teks, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": await(await fetch(link)).buffer(), 
"title": `${emoji}HORÓSCOPO ${text.toUpperCase()}${emoji}`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": link, 
}
}
}, { quoted: fkontak })
conn.sendMessage(m.chat, { react: { text: "🌠", key: kz.key }})
} catch (error) {
conn.reply(m.chat, `Hubo un error al obtener la predicción para ${sign}.`, m);
console.error('Error al obtener la predicción:', error);
}
};
handler.command = ['horoscopo', 'horóscopo', 'horoscopo2', 'horóscopo2'];
handler.group = true;
handler.botAdmin = true
export default handler 
