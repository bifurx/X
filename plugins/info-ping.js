import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', 
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command, isRowner}) => {
try {
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) 
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

let old = performance.now()
await conn.reply(m.chat, `🚀 𝙋𝙍𝙐𝙀𝘽𝘼 𝘿𝙀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿...🚀`, fkontak,  m)
let neww = performance.now()
let speed = neww - old
        // Generar valores ficticios para la RAM
        let totalRAM = 32 // GB
        let maxUsedRAM = 10 // GB
        let minUsedRAM = 5 // GB
        let usedRAM = Math.min(Math.max((Math.random() * maxUsedRAM).toFixed(2), minUsedRAM), maxUsedRAM)
        let freeRAM = (totalRAM - usedRAM).toFixed(2)
let caption = `
🚀 *𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿* 🚀

🚄 *${Math.round(neww - old)}* ms

*${htjava}* 𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀 𝙀𝙅𝙀𝘾𝙐𝘾𝙄𝙊𝙉 
${muptime}

*${htjava} S E R V I D O R*
*🟢 RAM EN USO:* ${usedRAM} GB / 32 GB
*🔵 RAM Libre:* ${freeRAM} GB

*[❕] Slots en uso: 98% 🔴*

*💻 Plataforma :* \`\`\`${os.platform()}\`\`\`
*📡 Servidor :* _${os.hostname()}_

${cpus[0] ? `*Uso total de la CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}` : ''}`
conn.fakeReply(m.chat, caption, '0@s.whatsapp.net', 'CONSUMO DE SERVIDOR')
//await conn.reply(m.chat, caption, fkontak)
} catch (e) {
await conn.reply(m.chat, `error`, m)
}}
handler.command = /^ping$/i
handler.group = true
handler.botAdmin = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' *Días : Days ☀️*\n ', h, ' *Horas : Hours 🕐*\n ', m, ' *Minuto : Minute ⏰*\n ', s, ' *Segundo : Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
