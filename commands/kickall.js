export default async function kickall(m, dvmsy) {
    if (!m.isGroup) return;

    const group = await dvmsy.groupMetadata(m.key.remoteJid);

    const users = group.participants
        .filter(p => p.id !== dvmsy.user.id)
        .map(p => p.id);

    await dvmsy.groupParticipantsUpdate(m.key.remoteJid, users, "remove");

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "💥 Kick all terminé"
    });
}