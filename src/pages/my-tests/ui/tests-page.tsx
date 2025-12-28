import Header from "@/widgets/header/header";
import Actions from "./actions";

const TestsPage = () => {
  return (
    <div>
      <Header title="My tests" link="/" />

      <main className="mb-18 py-5"></main>

      <Actions />
    </div>
  );
};

export default TestsPage;
