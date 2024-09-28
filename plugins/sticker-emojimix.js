import { sticker } from '../lib/sticker.js'
let MessageType = (await import(global.baileys)).default
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `[❗] 𝙳𝙴𝙱𝙴 𝚄𝚂𝙰𝚁 𝙳𝙾𝚂 𝙴𝙼𝙾𝙹𝙸𝚂 𝚈 𝙴𝙽 𝙴𝙻 𝙼𝙴𝙳𝙸𝙾 𝙿𝙾𝙽𝙴𝚁 "*+*"\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n*${usedPrefix + command}* 😭+😄`, m)
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}}
handler.command = /^emojimix$/i
handler.group = true
handler.botAdmin = true
export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})
