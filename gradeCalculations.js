const averageExams = (valuesExam) => {
  const numberValidation = valuesExam.every((exam) => typeof exam === "number");
  if (!numberValidation) {
    throw new Error("The values must be numbers");
  }
  const sumValues = valuesExam.reduce((acc, curr) => acc + curr, 0);
  return sumValues / valuesExam.length;
};

const isStudentPassExam = (valuesExam, name) => {
  const minValues = 75;
  const average = averageExams(valuesExam);

  if (average > minValues) {
    console.log(`Student ${name} is approved with ${average}`);
    return true;
  } else {
    console.log(`Student ${name} is disapproved with ${average}`);
    return false;
  }
};

module.exports = { averageExams, isStudentPassExam };
