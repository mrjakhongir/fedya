import Header from "@/widgets/header/header";
import Details from "./details";

const TestDetailsPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Test details" link="/tests/search" />

      <Details />
    </div>
  );
};

export default TestDetailsPage;
