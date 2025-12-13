import { Filters } from "@/features/filter-tests/ui";
import Header from "@/widgets/header/header";
import TestList from "./list/test-list";

const TestsSearchPage = () => {
  return (
    <div className="flex flex-col items-stretch gap-5">
      <Header title="Tests search" />

      <Filters />

      <TestList />
    </div>
  );
};

export default TestsSearchPage;
