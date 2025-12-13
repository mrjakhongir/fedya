import Header from "@/widgets/header/header";
import Playground from "./playground";
import TestSetup from "./setup";

const TestPlaygroundPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Test 1" />

      <TestSetup />

      <Playground />
    </div>
  );
};

export default TestPlaygroundPage;
