import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)}
var update = execSync('git remote set-url origin https://github.com/pintosrf/X.git && git pull')
await m.reply(update.toString())
} catch {
await m.reply(`error`) 
}}
handler.command = /^update$/i
handler.rowner = true
export default handler 
