import type { ITestResponse } from "@/entities/test/model/types";
import AddToMyTests from "@/features/add-to-my-test/ui";
import { routeBuilders } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import { Link } from "react-router-dom";

type Props = {
  selectedTest: ITestResponse;
};

const Actions: React.FC<Props> = ({ selectedTest }) => {
  return (
    <div className="fixed right-0 bottom-0 left-0 border-t bg-white py-3 shadow">
      <Wrapper className="flex justify-end">
        {selectedTest.isSaved ? (
          <Button className="flex-1" type="submit" asChild>
            <Link to={`${routeBuilders.tests.playground(selectedTest.id)}`}>
              Hoziroq boshlash
            </Link>
          </Button>
        ) : selectedTest.visibility === "private" ? (
          <Button className="w-full" size="lg" asChild>
            <a
              href={`https://t.me/${selectedTest.author.username}`}
              target="_blank"
            >
              Test qo'shib olishni so'rash
            </a>
          </Button>
        ) : (
          <AddToMyTests selectedTest={selectedTest} />
        )}
      </Wrapper>
    </div>
  );
};

export default Actions;
