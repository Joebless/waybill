export async function getUserSites(uid) {
  const snapshot = await db
    .collection("sites")
    .where("authorId", "==", uid)
    .get();
  const sites = [];
  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });
  sites.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );
  return { sites };
}
