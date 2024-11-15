export default function getListStudentIds(arrobjs) {
  if (!Array.isArray(arrobjs)) {
    return [];
  }
  return arrobjs.map((obj) => obj.id);
}
