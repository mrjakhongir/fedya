import Header from "@/widgets/header/header";
import { useState } from "react";
import Playground from "./playground";
import TestSetup from "./setup";

const TestPlaygroundPage = () => {
  const [testStarted, setTestStarted] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <Header title="Test 1" />

      <TestSetup testStarted={testStarted} setTestStarted={setTestStarted} />

      <Playground testStarted={testStarted} setTestStarted={setTestStarted} />
    </div>
  );
};

export default TestPlaygroundPage;
