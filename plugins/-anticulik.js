let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 
• *Telkomsel:* 081357104467
• *Indosat:* 085655807787

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/angganaudio

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6285655807787', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler
