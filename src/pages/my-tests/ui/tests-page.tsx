import Header from "@/widgets/header/header";
import Actions from "./actions";
import MyTestsList from "./list";

const TestsPage = () => {
  return (
    <div>
      <Header title="My tests" />

      <main className="py-5 mb-18">
        <MyTestsList />
      </main>

      <Actions />
    </div>
  );
};

export default TestsPage;
