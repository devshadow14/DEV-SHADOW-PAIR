export default async function promote(m, dvmsy) {
    if (!m.isGroup) return;

    const user = m.message.extendedTextMessage?.contextInfo?.participant;
    if (!user) return;

    await dvmsy.groupParticipantsUpdate(m.key.remoteJid, [user], "promote");

    await dvmsy.sendMessage(m.key.remoteJid, {
        text: "👑 Promote OK"
    });
}