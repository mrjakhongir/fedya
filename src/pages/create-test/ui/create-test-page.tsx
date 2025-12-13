import Header from "@/widgets/header/header";
import TestDescription from "./test-description";

const CreateTestPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Create test" />

      <main>
        <TestDescription />
      </main>
    </div>
  );
};

export default CreateTestPage;
