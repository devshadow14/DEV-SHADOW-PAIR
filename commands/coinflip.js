export default async function coinflip(m, dvmsy) {
    const r = Math.random() < 0.5 ? "Pile 🪙" : "Face 🪙";

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: r
    });
}