export default async function demote(m, dvmsy) {
    if (!m.isGroup) return;

    const user = m.message.extendedTextMessage?.contextInfo?.participant;
    if (!user) return;

    await dvmsy.groupParticipantsUpdate(m.key.remoteJid, [user], "demote");

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "🔻 Demote OK"
    });
}