import util from 'util'
import path from 'path' 

function handler(m, { groupMetadata, command, usedPrefix, conn, text, isAdmin }) {
let user = a => '@' + a.split('@')[0] 
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()

if(!text) return conn.reply(m.chat, `DEBES INGRESAR EL PREMIO`, m)

if (command == 'sortear') {
let top = `*🏆 GANADOR ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}

if (command == 'sortear1') {
let top = `*🏆 GANADOR ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear2') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear3') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear4') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear5') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear6') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear7') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear8') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear9') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
    
if (command == 'sortear10') {
let top = `*🏆 GANADORES ​🏆​*

*🥳PREMIO:* ${text}
    
*_1.- ${user(a)}_*
*_2.- ${user(b)}_*
*_3.- ${user(c)}_*
*_4.- ${user(d)}_*
*_5.- ${user(e)}_*
*_6.- ${user(f)}_*
*_7.- ${user(g)}_*
*_8.- ${user(h)}_*
*_9.- ${user(i)}_*
*_10.- ${user(j)}_*`
return m.reply(top, null, { mentions: conn.parseMention(top) })}
}
handler.command = [ 'sortear', 'sortear1', 'sortear2', 'sortear3', 'sortear4', 'sortear5', 'sortear6', 'sortear7', 'sortear8', 'sortear9', 'sortear10'  ]
handler.group = true
handler.botAdmin = true
export default handler  
