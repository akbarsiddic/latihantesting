const { averageExams, isStudentPassExam } = require("../gradeCalculations");

describe("Grade calculations", () => {
  test("it should return exact average", () => {
    const listValueOfExams = [70, 85, 95, 82, 100];
    expect(averageExams(listValueOfExams)).toBe(86.4);
  });

  test("it should return exam passed status", () => {
    const listValueOfExams = [70, 85, 95, 82, 100];
    expect(isStudentPassExam(listValueOfExams, "Lucas")).toEqual(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 40, 30, 20, 10];
    expect(isStudentPassExam(listValueOfExams, "Lucas")).toEqual(false);
  });
});

test("it should return error if one of the values is not a number", () => {
  const listValueOfExams = [70, 85, 95, 82, "100"];
  expect(() => {
    averageExams(listValueOfExams);
  }).toThrow();
});
