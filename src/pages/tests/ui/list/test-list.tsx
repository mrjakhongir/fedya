import { testList } from "@/shared/data/mock-tests";
import TestCard from "./test-card";

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
