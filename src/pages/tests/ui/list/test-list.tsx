import TestCard from "./test-card";

const testList = [
  {
    id: 1,
    title: "Test 1",
    description: "Test description",
    subject: "Math",
    courseLevel: "I",
    eduLevel: "Masters",
    totalTests: 10,
    university: "University 1",
    createdAt: "2022-01-01",
    semestr: "I",
  },
  {
    id: 2,
    title: "Test 2",
    description: "Test description",
    subject: "Math",
    courseLevel: "I",
    eduLevel: "Masters",
    totalTests: 10,
    university: "University 1",
    createdAt: "2022-01-01",
    semestr: "I",
  },
  {
    id: 3,
    title: "Test 3",
    description: "Test description",
    subject: "Math",
    courseLevel: "I",
    eduLevel: "Masters",
    totalTests: 10,
    university: "University 1",
    createdAt: "2022-01-01",
    semestr: "I",
  },
];

const TestList = () => {
  return (
    <div className="flex flex-col gap-4">
      {testList.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </div>
  );
};

export default TestList;
