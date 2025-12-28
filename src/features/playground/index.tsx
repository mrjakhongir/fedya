import { useParams } from "react-router-dom";
import Question from "./answer-question/ui/question";
import TestSetup from "./mode-select/ui";
import PlaygroundNavigation from "./navigation/ui";

const Playground = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-5">
      <TestSetup testId={id} />

      <Question />

      <PlaygroundNavigation />
    </div>
  );
};

export default Playground;
