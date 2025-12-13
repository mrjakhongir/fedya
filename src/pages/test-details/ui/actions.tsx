import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";

const Actions = () => {
  return (
    <div className="fixed right-0 bottom-0 left-0 overflow-hidden rounded-t-xl bg-white py-4 shadow">
      <Wrapper className="flex justify-end">
        <Button>Start test</Button>
      </Wrapper>
    </div>
  );
};

export default Actions;
