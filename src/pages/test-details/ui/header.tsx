import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import { ArrowLeft } from "lucide-react";

const Header = () => {
  return (
    <header className="overflow-hidden rounded-b-xl bg-white">
      <Wrapper className="flex items-center justify-between bg-white py-3">
        <Button size="icon-sm" variant="secondary">
          <ArrowLeft />
        </Button>
        <h1 className="flex-1 text-center text-lg font-semibold">Test 1</h1>
      </Wrapper>
    </header>
  );
};

export default Header;
