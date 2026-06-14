export default async function repo(m, dvmsy) {
    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "📦 Ajoute ici le lien GitHub de ton bot."
    });
}