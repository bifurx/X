import { createHash } from 'crypto' 
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, groupMetadata }) => {
try {
} catch (e) {
} finally {
let str =
`${groupMetadata.desc?.toString() || lenguajeGB['smsGI5']()}`.trim()
    conn.reply(m.chat, str, fkontak) 
  }
}
handler.command = /^reglas$/i
handler.group = true
handler.botAdmin = true
export default handler
