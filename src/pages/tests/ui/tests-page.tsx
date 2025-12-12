import { Filters } from "@/features/filter-tests/ui";
import Wrapper from "@/shared/ui//custom/wrapper";
import TestList from "./list/test-list";

const TestsPage = () => {
  return (
    <Wrapper className="flex flex-col gap-5 py-5">
      <Filters />

      <TestList />
    </Wrapper>
  );
};

export default TestsPage;
