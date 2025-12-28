import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import BottomActionsWrapper from "@/widgets/bottom-action-wrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PlaygroundNavigation = () => {
  return (
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
  );
};

export default PlaygroundNavigation;
