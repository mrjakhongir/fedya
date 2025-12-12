import type { ITest } from "@/entities/test/model/types";
import { routeBuilders } from "@/shared/routes";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import InfoItem from "@/shared/ui/custom/info-item";
import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  test: ITest;
};

const TestCard: React.FC<Props> = ({ test }) => {
  return (
    <Link to={routeBuilders.tests.detail(test.id)}>
      <Card className="gap-2 rounded-md px-3 py-2">
        <CardHeader className="gap-1 p-0">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <GraduationCap />
            {test.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ul className="grid grid-cols-2 gap-x-4">
            <InfoItem label="Subject" value={test.subject} />
            <InfoItem label="Course level" value={test.courseLevel} />
            <InfoItem label="Edu level" value={test.eduLevel} />
            <InfoItem label="University" value={test.university} />
            <InfoItem label="Total tests" value={test.totalTests} />
            <InfoItem label="Semestr" value={test.semestr} />
          </ul>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TestCard;
