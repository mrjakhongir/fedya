import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import BottomActionsWrapper from "@/widgets/bottom-action-wrapper";
import { ChevronLeft, ChevronRight, SquareCheckBig } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type Props = {
  testStarted: boolean;
  setTestStarted: Dispatch<SetStateAction<boolean>>;
};

const Playground: React.FC<Props> = ({ testStarted }) => {
  return (
    <div className="flex flex-col gap-5">
      {testStarted ? (
        // <Question question={question} />
        ""
      ) : (
        <Wrapper className="flex flex-col items-center justify-center gap-2 px-10 py-10 text-center text-xl text-slate-400">
          <SquareCheckBig size={56} />
          <p>In order to start the test</p>
          <p>please choose the reight mode</p>
        </Wrapper>
      )}

      <BottomActionsWrapper>
        <Wrapper className="flex items-center gap-3">
          <Button variant="secondary" className="flex-1">
            <ChevronLeft />
            Prev
          </Button>
          <Button className="flex-1">
            Next
            <ChevronRight />
          </Button>
        </Wrapper>
      </BottomActionsWrapper>
    </div>
  );
};

export default Playground;
