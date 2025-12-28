import type { ITest } from "@/entities/test/model/types";
import { Button } from "@/shared/ui/button";
import InfoItem from "@/shared/ui/custom/info-item";
import { ArrowUpRight, BookSearch, GraduationCap, School } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  test: ITest;
};

const TestListItem: React.FC<Props> = ({ test }) => {
  return (
    <li className="py-2">
      <h3 className="mb-1 flex items-center justify-between text-xl">
        {test.title}
        <Button asChild size="icon-sm" variant="secondary">
          <Link to={`/tests/${test._id}`}>
            <ArrowUpRight />
          </Link>
        </Button>
      </h3>

      <ul className="grid gap-1">
        <InfoItem label={GraduationCap} value={test.eduLevel} />
        <InfoItem label={School} value={test.university} />
        <InfoItem label={BookSearch} value={test.subject} />
      </ul>
    </li>
  );
};

export default TestListItem;
