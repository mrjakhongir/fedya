import Playground from "@/features/playground";
import Header from "@/widgets/header/header";

const TestPlaygroundPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Test 1" link="/tests" />
      <Playground />
    </div>
  );
};

export default TestPlaygroundPage;
