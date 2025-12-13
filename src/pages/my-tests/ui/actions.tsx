import { paths } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import BottomActionArapper from "@/widgets/bottom-action-wrapper";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    <BottomActionArapper>
      <Wrapper className="flex items-center gap-4">
        <Button className="w-full flex-1" size="lg" asChild>
          <Link to={`${paths.tests.create}`}>
            <Plus />
            Create test
          </Link>
        </Button>
        <Button className="w-full flex-1" size="lg" variant="secondary" asChild>
          <Link to={`${paths.tests.search}`}>
            <Search />
            Find test
          </Link>
        </Button>
      </Wrapper>
    </BottomActionArapper>
  );
};

export default Actions;
