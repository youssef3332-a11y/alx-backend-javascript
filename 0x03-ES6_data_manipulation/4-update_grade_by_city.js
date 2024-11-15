export default function updateStudentGradeByCity(arobjs, city, newGrades) {
  return arobjs.map((student) => {
    const arr = newGrades.filter((element) => element.studentId === student.id)[0];

    return { ...student, grade: arr ? arr.grade : 'N/A' };
  }).filter((last) => last.location === city);
}
