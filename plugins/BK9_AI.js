import fetch from 'node-fetch';
import fs from 'fs';

const handler = async (m, {conn, text, command}) => {
if (command === 'bk9') {
if (!text) return conn.reply(m.chat, '*[❗] INGRESE UNA PREGUNTA PARA LA IA DE BK9*', m)
try {
conn.sendPresenceUpdate('composing', m.chat);
const BK9api = `https://bk9.fun/ai/gpt4?q=${encodeURIComponent(text)}`;
const BK99 = await fetch(BK9api);
const BK8 = await BK99.json();
if (BK8.status && BK8.BK9) {
const respuestaAPI = BK8.BK9;
conn.reply(m.chat, respuestaAPI, m);
} else {
console.log('error')
}} catch (error) {
console.log('error')
}}

if (command === 'bk9img') {
if (!text) return conn.reply(m.chat, '*[❗] INGRESE UNA IDEA PARA GENERAR LA IMAGEN.*\n*Por ejemplo: gato feliz*', m)

try {
const BK9 = `https://bk9.fun/ai/photoleap?q=${encodeURIComponent(text)}`;
const response = await fetch(BK9);
const result = await response.json();
if (result.status) {
await conn.sendMessage(m.chat, {image: {url: result.BK9}}, {quoted: m});
m.react("✅")
}} catch (error) {
console.log('error')
}}};
handler.command = ['bk9', 'bk9img'];
handler.group = true
handler.botAdmin = true
export default handler;
