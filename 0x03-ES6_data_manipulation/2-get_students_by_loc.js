export default function getStudentsByLocation(arobj, city) {
  return arobj.filter((obj) => obj.location === city);
}
