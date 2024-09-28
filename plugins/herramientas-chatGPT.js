import fetch from 'node-fetch';
import axios from 'axios';
import translate from '@vitalets/google-translate-api';
import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
//if (m.sender !== '59899022028@s.whatsapp.net') return conn.reply(m.chat, '*[❗] No está funcionando..*', m)
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) return conn.reply(m.chat, '[❗] INGRESE UNA PREGUNTA PARA CHATGPT', m)
let lang = 'es'

if (command == 'iavoz') {
try {
conn.sendPresenceUpdate('recording', m.chat);
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gptweb?text=${text}`)
let res = await gpt.json()
let resAudio = await tts(res.data, lang)
await conn.sendMessage(m.chat, { audio: resAudio, mimetype: 'audio/mpeg', ptt: true } , { quoted: m }) 
} catch {
try {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/chatgpt?q=${text}`)
let res = await gpt.json()
let resAudio = await tts(res.data, lang)
await conn.sendMessage(m.chat, { audio: resAudio, mimetype: 'audio/mpeg', ptt: true } , { quoted: m }) 
} catch {
}}}

if (command == 'ia' || command == 'chatgpt' || command == 'ai') {
try {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gptweb?text=${text}`)
let res = await gpt.json()
await m.reply(res.gpt)
} catch {
try {
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/chatgpt?q=${text}`)
let res = await gpt.json()
await m.reply(res.data)
} catch {
}}}

if (command == 'ia2') {
conn.sendPresenceUpdate('composing', m.chat);
let gpt = await fetch(`https://deliriusapi-official.vercel.app/ia/gptweb?text=${text}`) 
let res = await gpt.json()
await m.reply(res.gpt)
}
}
handler.command = ['iavoz', 'chatgpt', 'ai', 'ia', 'ia2']
handler.group = true
handler.botAdmin = true
export default handler;

function tts(text, lang = 'es') {
console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(readFileSync(filePath))
unlinkSync(filePath)
})
} catch (e) { reject(e) }
})}