export default async function dice(m, dvmsy) {
    const n = Math.floor(Math.random() * 6) + 1;

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: `🎲 Résultat : ${n}`
    });
}