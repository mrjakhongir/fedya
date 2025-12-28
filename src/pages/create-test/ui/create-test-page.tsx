import { CreateNewTest } from "@/features/create-new-test/ui";
import Header from "@/widgets/header/header";
import TestDescription from "./test-description";

const CreateTestPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Create test" link="/tests" />

      <main className="flex flex-col gap-5">
        <TestDescription />

        <CreateNewTest />
      </main>
    </div>
  );
};

export default CreateTestPage;
