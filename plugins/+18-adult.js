/*import axios from "axios"
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
               
let handler = async (m, {usedPrefix, command, conn, isOwner}) => {
let frep = { contextInfo: { externalAdReply: {title: wm, body: lenguajeGB.smsCont18Porn2(), sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(img16)).buffer() }}}
let user = global.db.data.users[m.sender]
if (!db.data.chats[m.chat].modohorny && m.isGroup && !isOwner) return conn.reply(m.chat, `Comandos +18 deshabilitados`, m)
try{ 
if (command == 'pornololi' || command == 'nsfwloli') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwloli.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornopies' || command == 'nsfwfoot') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwfoot.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornoass' || command == 'nsfwass') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwass.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornobdsm' || command == 'nsfwbdsm') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwbdsm.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornocum' || command == 'nsfwcum') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwcum.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornoero' || command == 'nsfwero') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwero.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornodominar' || command == 'nsfwfemdom') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwfemdom.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornoglass' || command == 'nsfwglass') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfwglass.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornohentai' || command == 'nsfwhentai') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/hentai.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornorgia' || command == 'nsfworgy') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/nsfworgy.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornotetas' || command == 'nsfwboobs') {
let resError = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/tetas.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
await conn.sendFile(m.chat, res, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornobooty' || command == 'nsfwbooty') {
let resError = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/booty.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
await conn.sendFile(m.chat, res, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornoecchi' || command == 'nsfwecchi') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/ecchi.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornofurro' || command == 'nsfwfurry') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/furro.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornotrapito' || command == 'nsfwtrap') { 
let res = await fetch(`https://api.waifu.pics/nsfw/trap`)
let json = await res.json()
let enlace = json.url
await conn.sendFile(m.chat, res, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornolesbiana' || command == 'nsfwlesbian') {
let resError = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/imagenlesbians.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
await conn.sendFile(m.chat, res, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornobragas' || command == 'nsfwpanties') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/panties.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornopene' || command == 'nsfwpenis') {
let resError = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/pene.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
await conn.sendFile(m.chat, res, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'porno' || command == 'porn') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/porno.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
await conn.sendFile(m.chat, res, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornorandom' || command == 'pornrandom') {
let rawjsonn = ['https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/porno.json'] 
let rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())]  
let res = (await axios.get(rawjson)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornopechos' || command == 'nsfwbreasts') {
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/pechos.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]
await conn.sendFile(m.chat, enlace, null, `hola`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornoyaoi' || command == 'nsfwyaoi') {
let res = (await axios.get(`https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/Yaoi.json`)).data 
let enlace = await res[Math.floor(res.length * Math.random())]
let link = enlace.image
if (link.slice(-3) == 'gif') {
let stickerr = await sticker(false, link, global.packname, global.author)
await conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: lenguajeGB.smsCont18PornP2(), body: wm, mediaType: 2, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(img16)).buffer()}}}, { quoted: m })
await conn.sendFile(m.chat, null, null, `${lenguajeGB['smsCont18Porn']()}\n${lenguajeGB['smsBotonM7']()} » ${user.premiumTime > 0 ? '✅' : '❌'}`, null, null, {viewOnce: true}, m)
}else{
await conn.sendFile(m.chat, link, null, `${lenguajeGB['smsCont18Porn']()}\n${lenguajeGB['smsBotonM7']()} » ${user.premiumTime > 0 ? '✅' : '❌'}`, null, null, {viewOnce: true}, m)}}
  
if (command == 'pornoyaoi2' || command == 'nsfwyaoi2') {
let res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`)
let json = await res.json()
let enlace = json.link
if (enlace.slice(-3) == 'gif') {
let stickerr = await sticker(false, enlace, global.packname, global.author)
await conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: lenguajeGB.smsCont18PornP2(), body: wm, mediaType: 2, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(img16)).buffer()}}}, { quoted: m })
await conn.sendFile(m.chat, null, null, `${lenguajeGB['smsCont18Porn']()}\n${lenguajeGB['smsBotonM7']()} » ${user.premiumTime > 0 ? '✅' : '❌'}`, null, null, {viewOnce: true}, m)}}
  
if (command == 'pornoyuri' || command == 'nsfwyuri') { 
let res = (await axios.get(`https://raw.githubusercontent.com/GataNina-Li/GataBot-MD/master/src/JSON/yuri.json`)).data  
let enlace = await res[Math.floor(res.length * Math.random())]  
await conn.sendFile(m.chat, enlace, null, `${lenguajeGB['smsCont18Porn']()}\n${lenguajeGB['smsBotonM7']()} » ${user.premiumTime > 0 ? '✅' : '❌'}`, null, null, {viewOnce: true}, m)}
  
if (command == 'pornoyuri2' || command == 'nsfwyuri2') {
let res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`)
let json = await res.json()
let link = json.link
if (link.slice(-3) == 'gif') {
let stickerr = await sticker(false, link, global.packname, global.author)
await conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: lenguajeGB.smsCont18PornP2(), body: wm, mediaType: 2, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(img16)).buffer()}}}, { quoted: m })
await conn.sendFile(m.chat, null, null, `${lenguajeGB['smsCont18Porn']()}\n${lenguajeGB['smsBotonM7']()} » ${user.premiumTime > 0 ? '✅' : '❌'}`, null, null, {viewOnce: true}, m)
}else{
await conn.sendFile(m.chat, link, null, `${lenguajeGB['smsCont18Porn']()}\n${lenguajeGB['smsBotonM7']()} » ${user.premiumTime > 0 ? '✅' : '❌'}`, null, null, {viewOnce: true}, m)}}

if (command == 'pornopack' || command == 'nsfwpack') { 
let list = global.pack 
let link = list[Math.floor(Math.random() * list.length)]
await conn.sendFile(m.chat, link, null, `hola`, null, null, {viewOnce: true}, m)}

if (command == 'pornopackchica' || command == 'nsfwpackgirl') { 
let list = global.packgirl 
let link = list[Math.floor(Math.random() * list.length)]
await conn.sendFile(m.chat, link, null, `hola`, null, null, {viewOnce: true}, m)}

if (command == 'pornopackchico' || command == 'nsfwpackmen') { 
let list = global.packmen 
let link = list[Math.floor(Math.random() * list.length)]
await conn.sendFile(m.chat, link, null, `hola`, null, null, {viewOnce: true}, m)}
} catch (e) {
console.log(`error`)
console.log(e)}
}  
handler.command = ['pornololi', 'nsfwloli', 'pornopies', 'nsfwfoot', 'pornoass', 'nsfwass', 'pornobdsm', 'nsfwbdsm', 'pornocum', 'nsfwcum', 'pornoero', 'nsfwero', 'pornodominar', 'nsfwfemdom', 'pornoglass', 'nsfwglass', 'pornohentai', 'nsfwhentai', 'pornorgia', 'nsfworgy', 'pornotetas', 'nsfwboobs', 'pornobooty', 'nsfwbooty', 'pornoecchi', 'nsfwecchi', 'pornofurro', 'nsfwfurry', 'pornotrapito', 'nsfwtrap', 'pornolesbiana', 'nsfwlesbian', 'pornobragas', 'nsfwpanties', 'pornopene', 'nsfwpenis', 'porno', 'porn', 'pornorandom', 'pornrandom', 'pornopechos', 'nsfwbreasts', 'pornoyaoi', 'nsfwyaoi', 'pornoyaoi2', 'nsfwyaoi2', 'pornoyuri', 'nsfwyuri',
'pornoyuri2', 'nsfwyuri2', 'pornopack', 'nsfwpack', 'pornopackchica', 'nsfwpackgirl', 'pornopackchico', 'nsfwpackmen']
handler.group = true
handler.botAdmin = true
export default  handler

global.pack = [
  "https://i.imgur.com/XbW7FO2.jpg",
  "https://i.imgur.com/ciuzM98.jpg",
  "https://i.imgur.com/uHsrrrx.jpg",
  "https://i.imgur.com/PVi8YDi.jpg",
  "https://i.imgur.com/FLC3ZXE.jpg",
  "https://i.imgur.com/54m52tX.jpg",
  "https://i.imgur.com/OsxYPgQ.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/zdHVFEI.jpg",
  "https://i.imgur.com/kAplnSG.jpg",
  "https://i.imgur.com/15UiO8o.jpg",
  "https://i.imgur.com/qjjyr6G.jpg",
  "https://i.imgur.com/bQZRhBU.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/0MhmmF4.jpg",
  "https://i.imgur.com/2MX4wvq.jpg",
  "https://i.imgur.com/HYL5ggu.jpg",
  "https://i.imgur.com/7ZjOD2a.jpg",
  "https://i.imgur.com/zbEUy3m.jpg",
  "https://i.imgur.com/tZ6vlg6.jpg",
  "https://i.imgur.com/jdPns8O.jpg",
  "https://i.imgur.com/VyjBQHT.jpg",
  "https://i.imgur.com/ozAGqBD.jpg",
  "https://i.imgur.com/DsSj9S1.jpg",
  "https://i.imgur.com/KYHpjNc.jpg"]


global.packgirl = [
  "https://i.imgur.com/mwLJaxU.jpg",
  "https://i.imgur.com/9ptmlPl.jpg",
  "https://i.imgur.com/38tVliz.jpg",
  "https://i.imgur.com/2NqCKE3.jpg",
  "https://i.imgur.com/pveviMG.jpg",
  "https://i.imgur.com/d71dnkv.jpg",
  "https://i.imgur.com/cr7Ypj1.jpg",
  "https://i.imgur.com/jAxzCj4.jpg",
  "https://i.imgur.com/xokuFLf.jpg",
  "https://i.imgur.com/Hi4zLaf.jpg",
  "https://i.imgur.com/OlaQtwW.jpg",
  "https://i.imgur.com/Dm4GLuF.jpg",
  "https://i.imgur.com/k6Y2E9b.jpg",
  "https://i.imgur.com/1rk7jdu.jpg",
  "https://i.imgur.com/TFmEVPc.jpg",
  "https://i.imgur.com/0XefLlJ.jpg",
  "https://i.imgur.com/bwa9LYZ.jpg",
  "https://i.imgur.com/WgrpTmg.jpg",
  "https://i.imgur.com/Z5f5YAw.jpg",
  "https://i.imgur.com/xEuBtPO.jpg",
  "https://i.imgur.com/NA0fHxn.jpg",
  "https://i.imgur.com/InueCKQ.jpg",
  "https://i.imgur.com/3syOcHe.jpg",
  "https://i.imgur.com/N1dgels.jpg",
  "https://i.imgur.com/IxKAJaV.jpg",
  "https://i.imgur.com/8VrxL1d.jpg",
  "https://i.imgur.com/8B4Y0bG.jpg",
  "https://i.imgur.com/wgkGOjF.jpg",
  "https://i.imgur.com/765Wi6q.jpg",
  "https://i.imgur.com/5joeWnm.jpg",
  "https://i.imgur.com/71fjmmM.jpg",
  "https://i.imgur.com/cAuKeyZ.jpg",
  "https://i.imgur.com/SDZ2Hs5.jpg",
  "https://i.imgur.com/skkEyqI.jpg",
  "https://i.imgur.com/6dXFsBW.jpg",
  "https://i.imgur.com/6CeG9ZX.jpg"]


global.packmen = [
  "https://i.imgur.com/TK0qLAu.jpg",
  "https://i.imgur.com/q8lKT40.jpg",
  "https://i.imgur.com/OwWdL9u.jpg",
  "https://i.imgur.com/Er7WiQo.jpg",
  "https://i.imgur.com/u4y0q4P.jpg",
  "https://i.imgur.com/y8y4PPr.jpg",
  "https://i.imgur.com/qgfLlRY.jpg",
  "https://i.imgur.com/irgyUTD.jpg",
  "https://i.imgur.com/uXrqfBl.jpg",
  "https://i.imgur.com/lgXjetf.jpg",
  "https://i.imgur.com/81QLh8s.jpg",
  "https://i.imgur.com/R3AlYe1.jpg",
  "https://i.imgur.com/a2Myr3F.jpg",
  "https://i.imgur.com/Wp9cgGw.jpg",
  "https://i.imgur.com/ggKUnxt.jpg",
  "https://i.imgur.com/eCJNWBl.jpg",
  "https://i.imgur.com/6lcrBQB.jpg",
  "https://i.imgur.com/eSSbXJ1.jpg",
  "https://i.imgur.com/tNyvzyO.jpg"]*/