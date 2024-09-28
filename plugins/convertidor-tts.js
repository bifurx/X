import gtts from 'node-gtts'
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
const defaultLang = 'es'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text
let res
try { res = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) return conn.reply(m.chat, `[❗] INGRESE UN TEXTO PARA CONVERTIR A AUDIO`, m)
await conn.sendPresenceUpdate('recording', m.chat)
res = await tts(text, defaultLang)
} finally {
if (res) await conn.sendMessage(m.chat, { audio: res, mimetype: 'audio/mpeg', seconds: '9999999999999', ptt: true } , { quoted: m }) 
}}
handler.command = /^g?tts|totts$/i
handler.group = true
handler.botAdmin = true
export default handler

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
