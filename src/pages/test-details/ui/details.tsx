import { useTest } from "@/entities/test/api/query";
import InfoItem from "@/shared/ui/custom/info-item";
import SectionTitle from "@/shared/ui/custom/section-title";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import Actions from "./actions";
import DemoTests from "./demo-tests";

const Details = () => {
  const { id } = useParams();
  const { data: selectedTest } = useTest(id);

  if (!selectedTest) return <Wrapper>Test not found</Wrapper>;

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
            <InfoItem label="Total tests" value={selectedTest.totalCount} />
            <InfoItem
              label="Created at"
              value={dayjs(selectedTest.createdAt).format("YYYY-MM-DD HH:mm")}
            />
          </ul>

          <div className="bg-secondary mt-2 flex items-center gap-2 rounded-lg p-2">
            <div className="h-10 w-10 overflow-hidden rounded-full border">
              {selectedTest.author.photo_url ? (
                <img src={selectedTest.author.photo_url} alt="" />
              ) : (
                <div className="h-full w-full bg-gray-300"></div>
              )}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800">
                {selectedTest.author.first_name}
              </h4>
              {selectedTest.author.username && (
                <h4 className="text-xs text-blue-500">
                  <a
                    href={`https://t.me/${selectedTest.author.username}`}
                    target="_blank"
                  >
                    @{selectedTest.author.username}
                  </a>
                </h4>
              )}
            </div>
          </div>
        </Wrapper>
      </SectionWrapper>

      <DemoTests questions={selectedTest.questions} />

      <Actions />
    </div>
  );
};

export default Details;
