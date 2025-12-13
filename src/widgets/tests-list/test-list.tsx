import { testList } from "@/shared/data/mock-tests";
import Wrapper from "@/shared/ui/custom/wrapper";
import TestCard from "./test-card";

const TestList = () => {
  return (
    <Wrapper className="flex w-full flex-col gap-4">
      {testList.map((test) => (
        <TestCard key={test.id} test={test} />
      ))}
    </Wrapper>
  );
};

export default TestList;
