import { testList } from "@/shared/data/mock-tests";
import InfoItem from "@/shared/ui/custom/info-item";
import SectionTitle from "@/shared/ui/custom/section-title";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import { useParams } from "react-router-dom";
import Actions from "./actions";
import DemoTests from "./demo-tests";

const Details = () => {
  const { id } = useParams();
  const selectedTest = testList.find((test) => test.id === Number(id));

  if (!selectedTest) return <div>Test not found</div>;

  return (
    <div className="mb-22 flex flex-col gap-5">
      <SectionWrapper>
        <Wrapper>
          <SectionTitle title={selectedTest.title} />
          <p className="mb-3 text-sm text-slate-800">
            {selectedTest.description}
          </p>

          <ul className="flex flex-col gap-2">
            <InfoItem label="Subject" value={selectedTest.subject} />
            <InfoItem label="Course level" value={selectedTest.courseLevel} />
            <InfoItem label="Edu level" value={selectedTest.eduLevel} />
            <InfoItem label="University" value={selectedTest.university} />
            <InfoItem label="Total tests" value={selectedTest.totalTests} />
            <InfoItem label="Semestr" value={selectedTest.semestr} />
            <InfoItem label="Created at" value={selectedTest.createdAt} />
          </ul>

          <div className="bg-secondary mt-2 flex items-center gap-2 rounded-lg p-2">
            <div className="h-10 w-10 overflow-hidden rounded-full border">
              <img src="https://picsum.photos/40/40" alt="" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">
                {selectedTest.author}
              </h4>
              <h4 className="text-xs text-blue-500">@Mr_Jakhongir</h4>
            </div>
          </div>
        </Wrapper>
      </SectionWrapper>

      <DemoTests />

      <Actions />
    </div>
  );
};

export default Details;
