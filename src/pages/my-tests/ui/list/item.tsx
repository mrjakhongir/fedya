import type { ITest } from "@/entities/test/model/types";
import { cn } from "@/shared/lib/utils";
import { routeBuilders } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import InfoItem from "@/shared/ui/custom/info-item";
import { GraduationCap, Info } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  test: ITest;
};

const MyTestItem: React.FC<Props> = ({ test }) => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();
  return (
    <li>
      <Card className="gap-0 rounded-md px-3 py-2">
        <CardHeader className="flex items-center justify-between gap-1 p-0">
          <CardTitle className="flex items-center gap-2 text-slate-800">
            <GraduationCap />
            {test.title}
          </CardTitle>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="secondary"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info />
            </Button>

            <Button
              size="sm"
              onClick={() =>
                navigate(`${routeBuilders.tests.playground(test.id)}`)
              }
            >
              Start
            </Button>
          </div>
        </CardHeader>

        <CardContent
          className={cn(
            "h-0 overflow-hidden p-0 transition-all",
            showInfo && "h-auto pt-2",
          )}
        >
          <ul className="flex flex-col gap-2">
            <InfoItem label="Subject" value={test.subject} />
            <InfoItem label="Course level" value={test.courseLevel} />
            <InfoItem label="Edu level" value={test.eduLevel} />
            <InfoItem label="University" value={test.university} />
            <InfoItem label="Total tests" value={test.totalTests} />
            <InfoItem label="Semestr" value={test.semestr} />
          </ul>
        </CardContent>
      </Card>
    </li>
  );
};

export default MyTestItem;
