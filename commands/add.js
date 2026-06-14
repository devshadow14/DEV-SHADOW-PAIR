export default async function add(m, dvmsy, args) {
    if (!m.isGroup) return;

    const number = args[0];
    if (!number) return;

    const jid = number + "@s.whatsapp.net";

    await dvmsy.groupParticipantsUpdate(m.key.remoteJid, [jid], "add");

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "➕ Utilisateur ajouté"
    });
}