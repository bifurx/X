import { generateWAMessageFromContent } from '@whiskeysockets/baileys';
let { downloadContentFromMessage } = (await import(global.baileys))
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'   
import fetch from 'node-fetch'
import './plugins/_content.js'
 
/**
 * @type {import('@adiwajshing/baileys')}  
 */
const { proto } = (await import('@whiskeysockets/baileys')).default
const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
clearTimeout(this)
resolve()
}, ms))

/**
 * Handle messages upsert
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {
this.msgqueque = this.msgqueque || [];
this.uptime = this.uptime || Date.now();
if (!chatUpdate) {
return
}
if (!chatUpdate || !chatUpdate.messages) {
return
} else {
this.pushMessage(chatUpdate.messages).catch(console.error)
}
let m = chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m) {
return;
}
if (global.db.data == null) await global.loadDatabase()
/*------------------------------------------------*/	     
if (global.chatgpt.data === null) await global.loadChatgptDB()
/*------------------------------------------------*/	
try {
m = smsg(this, m) || m
if (!m)
return
m.exp = 0
m.limit = false
m.money = false
try {
// TODO: use loop to insert data instead of this
let user = global.db.data.users[m.sender]
/*------------------------------------------------*/	            
let chatgptUser = global.chatgpt.data.users[m.sender];
if (typeof chatgptUser !== "object")
global.chatgpt.data.users[m.sender] = [];		
/*------------------------------------------------*/
if (typeof user !== 'object')
global.db.data.users[m.sender] = {}

if (user) {
if (!user.registered) {
if (!('name' in user)) user.name = m.name
}
    
if (!isNumber(user.afk)) user.afk = -1
if (!isNumber(user.antispam)) user.antispam = 0
if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
if (!isNumber(user.spam)) user.spam = 0
if (!isNumber(user.marryTime)) user.marryTime = -1
if (!isNumber(user.pasanganTime)) user.pasanganTime = -1
if (!isNumber(user.warn)) user.warn = 0
if (!Array.isArray(user.historialp)) {
    user.historialp = [];
}
if (!user[m.chat]) {
user[m.chat] = {
inGroup: {
afk: -1,
afkReason: '',
silenciar: false,
}
}
}
} else
global.db.data.users[m.sender] = {
afk: -1,
afkReason: '',
name: m.name,
antispam: 0,
antispamlastclaim: 0,
silenciar: false,
listanegra: false,
listanegrareason: '',
banned: false,
BannedReason: '',
Banneduser: false,
pasangan: '',
pasanganTime: -1,
marry: '',
marryTime: -1,
warn: 0,
}
let akinator = global.db.data.users[m.sender].akinator
if (typeof akinator !== 'object')
global.db.data.users[m.sender].akinator = {}
if (akinator) {
if (!('sesi' in akinator)) akinator.sesi = false
if (!('server' in akinator)) akinator.server = null
if (!('frontaddr' in akinator)) akinator.frontaddr = null
if (!('session' in akinator)) akinator.session = null
if (!('signature' in akinator)) akinator.signature = null
if (!('question' in akinator)) akinator.question = null
if (!('progression' in akinator)) akinator.progression = null
if (!('step' in akinator)) akinator.step = null
if (!('soal' in akinator)) akinator.soal = null
} else
global.db.data.users[m.sender].akinator = {
sesi: false,
server: null,
frontaddr: null,
session: null,
signature: null,
question: null,
progression: null,
step: null, 
soal: null
}   		
let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object')
global.db.data.chats[m.chat] = {}

if (chat) {
if (!('isBanned' in chat)) chat.isBanned = false         
if (!('welcome' in chat)) chat.welcome = false           
if (!('detect' in chat)) chat.detect = true               
if (!('sWelcome' in chat)) chat.sWelcome = ''          
if (!('sBye' in chat)) chat.sBye = ''                    
if (!('sPromote' in chat)) chat.sPromote = ''             
if (!('sDemote' in chat)) chat.sDemote = '' 
if (!('sCondition' in chat)) chat.sCondition = JSON.stringify([{ grupo: { usuario: [], condicion: [], admin: '' }, prefijos: []}])
if (!('delete' in chat)) chat.delete = false                   
if (!('modohorny' in chat)) chat.modohorny = false       
if (!('menciones' in chat)) chat.menciones = true       
if (!('stickers' in chat)) chat.stickers = false            
if (!('autosticker' in chat)) chat.autosticker = false      
if (!('audios' in chat)) chat.audios = false               
if (!('antiver' in chat)) chat.antiver = false 
if (!('antiPorn' in chat)) chat.antiPorn = false     
if (!('antiLink' in chat)) chat.antiLink = true     
if (!('antiLink2' in chat)) chat.antiLink2 = false
if (!('antiTiktok' in chat)) chat.antiTiktok = false
if (!('antiYoutube' in chat)) chat.antiYoutube = false
if (!('antiTelegram' in chat)) chat.antiTelegram = false
if (!('antiFacebook' in chat)) chat.antiFacebook = false
if (!('antiInstagram' in chat)) chat.antiInstagram = false
if (!('antiTwitter' in chat)) chat.antiTwitter = false
if (!('antiDiscord' in chat)) chat.antiDiscord = false
if (!('antiThreads' in chat)) chat.antiThreads = false
if (!('antiTwitch' in chat)) chat.antiTwitch = false
if (!('antifake' in chat)) chat.antifake = false
if (!('reaction' in chat)) chat.reaction = false    
if (!('viewonce' in chat)) chat.viewonce = false       
if (!('modoadmin' in chat)) chat.modoadmin = false    
if (!('antitoxic' in chat)) chat.antitoxic = true
if (!('game' in chat)) chat.game = true
if (!('simi' in chat)) chat.simi = false
if (!('antiTraba' in chat)) chat.antiTraba = false
if (!('autolevelup' in chat)) chat.autolevelup = false
if (!isNumber(chat.expired)) chat.expired = 0
} else
global.db.data.chats[m.chat] = {
isBanned: false,
welcome: false,
detect: true,
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '', 
sCondition: JSON.stringify([{ grupo: { usuario: [], condicion: [], admin: '' }, prefijos: []}]), 
delete: false,
modohorny: false,
menciones: true,
stickers: false,
autosticker: false,
audios: false,
antiver: false,
antiPorn: false,
antiLink: true,
antiLink2: false,
antiTiktok: false,
antiYoutube: false,
antiTelegram: false,
antiFacebook: false,
antiInstagram: false,
antiTwitter: false,
antiDiscord: false,
antiThreads: false,
antiTwitch: false,
antifake: false,
reaction: false,
viewonce: false,
modoadmin: false,
antitoxic: true,
game: true, 
simi: false,
antiTraba: false,
autolevelup: false,
expired: 0,
}
let settings = global.db.data.settings[this.user.jid]
if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('self' in settings)) settings.self = false
if (!('autoread' in settings)) settings.autoread = true
if (!('autoread2' in settings)) settings.autoread2 = true
if (!('restrict' in settings)) settings.restrict = true
if (!('temporal' in settings)) settings.temporal = false
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('antiCall' in settings)) settings.antiCall = true
if (!('antiSpam' in settings)) settings.antiSpam = false 
if (!('modoia' in settings)) settings.modoia = false
if (!('jadibotmd' in settings)) settings.jadibotmd = true  
} else global.db.data.settings[this.user.jid] = {
self: false,
autoread: true,
autoread2: true,
restrict: true,
temporal: false,
antiPrivate: false,
antiCall: true,
antiSpam: false,
modoia: false, 
jadibotmd: true,
}} catch (e) {
console.error(e)
}
    


const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = isROwner || m.fromMe
const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
//const isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPrems = isROwner || global.db.data.users[m.sender].premiumTime > 0
if (opts['queque'] && m.text && !(isMods || isPrems)) {
let queque = this.msgqueque, time = 1000 * 5
const previousID = queque[queque.length - 1]
queque.push(m.id || m.key.id)
setInterval(async function () {
if (queque.indexOf(previousID) === -1) clearInterval(this)
await delay(time)
}, time)
}

if (opts['nyimak']) return
if (!isROwner && opts['self']) return 
if (opts['pconly'] && m.chat.endsWith('g.us')) return
if (opts['gconly'] && !m.chat.endsWith('g.us')) return
if (opts['swonly'] && m.chat !== 'status@broadcast') return
if (typeof m.text !== 'string')
m.text = ''

if (m.isBaileys) return
m.exp += Math.ceil(Math.random() * 10)
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
const participants = (m.isGroup ? groupMetadata.participants : []) || []
const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {}
const isRAdmin = user?.admin == 'superadmin' || false
const isAdmin = isRAdmin || user?.admin == 'admin' || false //user admins? 
const isBotAdmin = bot?.admin || false //Detecta sin el bot es admin

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, {
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
// if (typeof e === 'string') continue
console.error(e)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
}}}
if (!opts['restrict'])
if (plugin.tags && plugin.tags.includes('admin')) {
// global.dfail('restrict', m, this)
continue
}
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
let match = (_prefix instanceof RegExp ? // RegExp Mode?
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ? // Array?
_prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ? // String?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (typeof plugin.before === 'function') {
if (await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}))
continue
}
if (typeof plugin !== 'function')
continue
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
command = (command || '').toLowerCase()
let fail = plugin.fail || global.dfail // When failed
let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
plugin.command.test(command) :
Array.isArray(plugin.command) ? // Array?
plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
cmd.test(command) :
cmd === command
) :
typeof plugin.command === 'string' ? // String?
plugin.command === command :
false

if (!isAccept)
continue
m.plugin = name
if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
if (!['owner-unbanchat.js'].includes(name) && chat && chat.isBanned && !isROwner) return // Except this
if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned && !isROwner) return 

if (m.isBaileys || m.fromMe) {
console.log('mensaje de baileys')
return
}
if (m.text && global.db.data.users[m.sender]?.[m.chat]?.inGroup?.silenciar && !isOwner) { 
let delet = m.key.participant
let bang = m.key.id
this.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
return
}
if (m.text && user.banned && !isROwner) {
if (user.antispam > 2) return

console.log(`⚠️🚫USUARIO BANEADO(A)🚫⚠️`)
user.antispam++	
return
}
    
/*if (m.sender !== conn.user.jid && !m.text.includes('chat.whatsapp') && m.chat !== '120363317021809335@g.us' && m.chat !== '120363289025822058@g.us' && m.chat !== '120363291719898594@g.us' && m.chat !== '120363314590728155@g.us' && m.chat !== '120363086595217036@g.us' && m.chat !== '120363280974542167@g.us') return*/

//Antispam 2		
/*if (user.antispam2 && isROwner) return
let time = global.db.data.users[m.sender].spam + 3000
if (new Date - global.db.data.users[m.sender].spam < 3000) return console.log(`[ SPAM ]`) 
global.db.data.users[m.sender].spam = new Date * 1*/
}
		
let hl = _prefix 
let adminMode = global.db.data.chats[m.chat].modoadmin
let gata = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && gata) return   
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { //número bot owner
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) { //Owner
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { //Propietario/Owner
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { // Moderator
fail('mods', m, this)
continue
}
if (plugin.premium && !isPrems) { // Premium
fail('premium', m, this)
continue
}
if (plugin.group && !m.isGroup) { //Solo el grupo
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) { //Detecta si el bot es admins
fail('botAdmin', m, this)
continue
} else if (plugin.admin && !isAdmin) { //admins
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) { //Solo chat privado
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) { // user registrado? 
fail('unreg', m, this)
continue
}

m.isCommand = true
let xp = 'exp' in plugin ? parseInt(plugin.exp) : 10 // Ganancia de XP por comando
if (xp > 2000)
m.reply('Exp limit') // Hehehe
else               
if (!isPrems && plugin.money && global.db.data.users[m.sender].money < plugin.money * 1) {
//this.reply(m.chat, `🐈 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎`, m)
this.sendMessage(m.chat, {text: `🐈 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎`,  contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: 'SerberoX', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}, { quoted: m })         
continue     
}
			
m.exp += xp
if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
this.sendMessage(m.chat, {text: `${lenguajeGB['smsCont7']()} *${usedPrefix}buy*`,  contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: 'SerberoX', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}, { quoted: m })         
//this.reply(m.chat, `${lenguajeGB['smsCont7']()} *${usedPrefix}buy*`, m)
continue //Sin límite
}
if (plugin.level > _user.level) {
this.sendMessage(m.chat, {text: `${lenguajeGB['smsCont9']()} *${plugin.level}* ${lenguajeGB['smsCont10']()} *${_user.level}* ${lenguajeGB['smsCont11']()} *${usedPrefix}nivel*`,  contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: 'SerberoX', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}, { quoted: m })         
//this.reply(m.chat, `${lenguajeGB['smsCont9']()} *${plugin.level}* ${lenguajeGB['smsCont10']()} *${_user.level}* ${lenguajeGB['smsCont11']()} *${usedPrefix}nivel*`, m)
continue // Si no se ha alcanzado el nivel
}
let extra = {
match,
usedPrefix,
noPrefix,
_args,
args,
command,
text,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
isPrems,
chatUpdate,
__dirname: ___dirname,
__filename
}
try {
await plugin.call(this, m, extra)
if (!isPrems)
m.limit = m.limit || plugin.limit || false
m.money = m.money || plugin.money || false
} catch (e) {
// Error occured
m.error = e
console.error(e)
if (e) {
let text = format(e)
for (let key of Object.values(global.APIKeys))
text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
if (e.name)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
}
}} finally {
// m.reply(util.format(_user))
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}}
if (m.limit)
m.reply(+m.limit + lenguajeGB.smsCont8())
}
if (m.money)
m.reply(+m.money + ' 𝙂𝘼𝙏𝘼𝘾𝙊𝙄𝙉𝙎 🐱 𝙐𝙎𝘼𝘿𝙊(𝙎)')  
break
}}} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
this.msgqueque.splice(quequeIndex, 1)
}
//console.log(global.db.data.users[m.sender])
let user, stats = global.db.data.stats
if (m) { let utente = global.db.data.users[m.sender]
if (utente.muto == true) {
let bang = m.key.id
let cancellazzione = m.key.participant
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: cancellazzione }})
}
if (m.sender && (user = global.db.data.users[m.sender])) {
user.exp += m.exp
user.limit -= m.limit * 1
user.money -= m.money * 1
}

let stat
if (m.plugin) {
let now = +new Date
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total))
stat.total = 1
if (!isNumber(stat.success))
stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last))
stat.last = now
if (!isNumber(stat.lastSuccess))
stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}}}

try {
if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)}
let settingsREAD = global.db.data.settings[this.user.jid] || {}  
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])  
	    
if (db.data.chats[m.chat].reaction && m.text.match(/(ción|dad|aje|oso|izar|mente|pero|tion|age|ous|ate|and|but|ify)/gi)) {
let emot = pickRandom(["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶‍🌫️", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "🫨", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮‍💨", "😵", "😵‍💫", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", "😈", "👿", "👺", "🤡", "💩", "👻", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🫶", "👍", "✌️", "🙏", "🫵", "🤏", "🤌", "☝️", "🖕", "🙏", "🫵", "🫂", "🐱", "🤹‍♀️", "🤹‍♂️", "🗿", "✨", "⚡", "🔥", "🌈", "🩷", "❤️", "🧡", "💛", "💚", "🩵", "💙", "💜", "🖤", "🩶", "🤍", "🤎", "💔", "❤️‍🔥", "❤️‍🩹", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "🏳️‍🌈", "👊", "👀", "💋", "🫰", "💅", "👑", "🐣", "🐤", "🐈"])
if (!m.fromMe) return this.sendMessage(m.chat, { react: { text: emot, key: m.key }})
}
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
if (opts['self'])
return
// if (id in conn.chats) return // First login will spam
if (this.isInit)
return
if (global.db.data == null)
await loadDatabase()
let chat = global.db.data.chats[id] || {}
let text = ''
switch (action) {
case 'add':
case 'remove':
if (chat.welcome) {
let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
for (let user of participants) {
let pp = global.gataImg
try {
pp = await this.profilePictureUrl(user, 'image')
} catch (e) {
} finally {
let apii = await this.getFile(pp)                                      
const botTt2 = groupMetadata.participants.find(u => this.decodeJid(u.id) == this.user.jid) || {} 
const isBotAdminNn = botTt2?.admin === "admin" || false
text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc?.toString() || 'X') :
(chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', '@' + user.split('@')[0])
			    
if (chat.antifake && isBotAdminNn && action === 'add') {
const numerosPermitidos = ["1", "2", "4", "6", "7", "8", "9"] //PUEDES EDITAR LOS USUARIOS QUE SE ELIMINARÁN SI EMPIEZA POR CUALQUIER DE ESOS NÚMEROS	
if (numerosPermitidos.some(num => user.startsWith(num))) {	
this.sendMessage(id, { text:`*${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} @${user.split("@")[0]} ${lenguajeGB['smsInt2']()}*`, mentions: [user] }, { quoted: null });          
let responseb = await this.groupParticipantsUpdate(id, [user], 'remove')
if (responseb[0].status === "404") return      
return    
}}    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }      
this.sendMessage(id, { text: text, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[user],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": apii.data, 
"title": ['SerberoX', 'SerberoX'].getRandom(),
"containsAutoReply": true,
"mediaType": 1, 
sourceUrl: accountsgb }}}, { quoted: fkontak2 })
apii.data = ''
//this.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: [user] }, { quoted: fkontak2 })
}}}
			    
break
case 'promote':
case 'daradmin':
case 'darpoder':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text)
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.detect)
//this.sendMessage(id, { text, mentions: this.parseMention(text) })
break
}}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
if (opts['self'] && !isOwner && !isROwner)
return
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id
if (!id) continue
let chats = global.db.data?.chats?.[id], text = ''
if (!chats?.detect) continue
// if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
//if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
//if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
if (!text) return //continue
//await this.sendMessage(id, { text, mentions: this.parseMention(text) })
}}

export async function callUpdate(callUpdate) {
for (let nk of callUpdate) { 
if (nk.isGroup == false) {
if (nk.status == "offer") {
let callmsg = await this.reply(nk.from, `*[❗] HOLA @${nk.from.split('@')[0]} SOY UN BOT.*\n\n*LAS LLAMADAS ESTAN PROHIBIDAS.*\n\n*[⛔SERÁS BLOQUEADO⛔]*`, false, { mentions: [nk.from] })
await this.updateBlockStatus(nk.from, 'block')
}}}}

export async function deleteUpdate(message) {
    try {
        const { m, fromMe, id, participant } = message;
        if (fromMe) return
        let msg = this.serializeM(this.loadMessage(id))
       let chat = global.db.data.chats[msg?.chat] || {};
        if (!chat?.delete) return 
        if (!msg) return

let isOnce = msg.mtype == 'viewOnceMessageV2' || msg.mtype == 'viewOnceMessageV2Extension'
if (isOnce) {
    let media
    let msgg = msg.mtype == 'viewOnceMessageV2' ? msg.message.viewOnceMessageV2.message : msg.message.viewOnceMessageV2Extension.message 
    const type = Object.keys(msgg)[0];
    if (msg.mtype == 'viewOnceMessageV2') {
        media = await downloadContentFromMessage(msgg[type], type == 'imageMessage' ? 'image' : 'videoMessage' ? 'video' : 'audio')
    } else {
        media = await downloadContentFromMessage(msgg[type], 'audio')
    }
    let buffer = Buffer.from([]);
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk]);
    }
    if (/image|video/.test(type)) {
        const caption = `*━━━ \`𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍\` ━━━*
*┃ ViewOnce (eliminado)*
- *Nombre:* @${participant.split`@`[0]}
${msgg[type].caption ? `- *Caption:* ${msgg[type].caption}` : '- *Caption:* _sin_caption_'}`
        return await conn.sendFile(msg.chat, buffer, type == 'imageMessage' ? 'error.jpg' : 'error.mp4', caption, null, null, { mentions: conn.parseMention(caption), quoted: msg});
    } else if (/audio/.test(type)) { 
        const audiox = `*━━━ \`𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍\` ━━━*
*┃ ViewOnce (eliminado)*
- *Nombre:* @${participant.split`@`[0]}
- *Tipo:* Nota de voz🔊`
        await conn.reply(msg.chat, audiox, m, { mentions: [participant], quoted: msg}) 
        await conn.sendMessage(msg.chat, { audio: buffer, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true }, { quoted: msg })
    }
}
let isImageOrVideo = msg.mtype === 'imageMessage' || msg.mtype === 'videoMessage';
if (msg.text && !isImageOrVideo) {
    const deleteMsg = `*━━━ \`𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍\` ━━━*
*┃ Nombre:* @${participant.split`@`[0]}
- *📝Mensaje:* ${msg.text}
*━━━ \`𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍\` ━━━*`.trim();
    await this.sendMessage(msg.chat, { text: deleteMsg, mentions: conn.parseMention(deleteMsg) }, { quoted: msg })
} else if (isImageOrVideo) {
    const iOV = `*━━━ \`𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍\` ━━━*
*┃ Nombre:* @${participant.split`@`[0]}
${msg.text ? `- *Caption:* ${msg.text}` : '- *Caption:* _sin_caption_'}`.trim();
    let img = await msg.download?.()
    await conn.sendFile(msg.chat, img, null, iOV, null, null, { mentions: conn.parseMention(iOV), quoted: msg})
} else if (!isOnce) {
    const otroDel = `*━━━ \`𝘼𝙉𝙏𝙄 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍\` ━━━*
*┃ Nombre:* @${participant.split`@`[0]}
*┃ Reenviando contenido borrado..*
*━━━ 👇🏻👇🏻👇🏻👇🏻👇🏻 ━━━*`.trim();
    await this.sendMessage(msg.chat, { text: otroDel, mentions: [participant] }, { quoted: msg })
this.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))

}
    } catch (e) {
        console.error(e);
    }
}

global.dfail = (type, m, conn) => {
let msg = {
rowner: lenguajeGB['smsRowner'](),
owner: lenguajeGB['smsOwner'](),
mods: lenguajeGB['smsMods'](),
premium: lenguajeGB['smsPremium'](),
//group: lenguajeGB['smsGroup'](),
private: lenguajeGB['smsPrivate'](),
admin: lenguajeGB['smsAdmin'](),
botAdmin: lenguajeGB['smsBotAdmin'](),
unreg: lenguajeGB['smsUnreg'](),
restrict: lenguajeGB['smsRestrict'](),
}[type]
if (msg) return conn.reply(m.chat, msg, m)
}

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
unwatchFile(file);
console.log(chalk.redBright('Update \'handler.js\''));
if (global.reloadHandler) console.log(await global.reloadHandler());
  
if (global.conns && global.conns.length > 0 ) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
for (const userr of users) {
userr.subreloadHandler(false)
}}});
