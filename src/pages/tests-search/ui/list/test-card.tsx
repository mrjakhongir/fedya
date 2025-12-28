import type { ITest } from "@/entities/test/model/types";
import { routeBuilders } from "@/shared/routes";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import InfoItem from "@/shared/ui/custom/info-item";
import { BookSearch, GraduationCap, Lock, School } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  test: ITest;
};

const TestCard: React.FC<Props> = ({ test }) => {
  return (
    <Link to={routeBuilders.tests.detail(test._id)}>
      <Card className="gap-2 rounded-md px-3 py-2">
        <CardHeader className="gap-1 p-0">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            {test.visibility === "private" && (
              <Lock className="text-gray-700" size="18" />
            )}
            {test.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="grid gap-x-4">
            <InfoItem label={GraduationCap} value={test.eduLevel} />
            <InfoItem label={School} value={test.university} />
            <InfoItem label={BookSearch} value={test.subject} />
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TestCard;
