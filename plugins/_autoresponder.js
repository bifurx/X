/*import { sticker } from '../lib/sticker.js'

let handler = m => m
handler.all = async function (m, {conn}) { 
let wtf = ["https://media4.giphy.com/media/cewvmYhuz58pATZaVv/giphy.gif?cid=6c09b9521hg5wib0ijd9akki8vpjl6c21ngwzys4lw2uf983&ep=v1_gifs_search&rid=giphy.gif&ct=g", "https://media.tenor.com/wvzaQkqdpMIAAAAM/hello-jigsaw.gif", "https://media0.giphy.com/media/YmVNzDnboB0RQEpmLr/giphy.gif?cid=6c09b952jm94ievtuv8asov205naa2huwhpudisumq5m1zoj&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g", "https://media0.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif?cid=6c09b9520emrfpdojjcub494ix89n7espm8akw6bzvgh4flc&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g", "https://media1.giphy.com/media/yuQi4S7rIFZGFAJ33e/giphy.gif?cid=6c09b952dof1fowa7cmz0gmvg4elbmbzrcdzu7qdo92e6s0d&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"].getRandom()
let chat = global.db.data.chats[m.chat]
let buff = await(await fetch(wtf)).buffer()
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(buff, false)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m)}
return !0 }
export default handler*/