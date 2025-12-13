import { testList } from "@/shared/data/mock-tests";
import InfoItem from "@/shared/ui/custom/info-item";
import { useParams } from "react-router-dom";
import Actions from "./actions";
import DemoTests from "./demo-tests";

const Details = () => {
  const { id } = useParams();
  const selectedTest = testList.find((test) => test.id === Number(id));

  if (!selectedTest) return <div>Test not found</div>;

  return (
    <div className="flex flex-col gap-8 py-6">
      <section className="rounded-xl bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-800">
          {selectedTest.title}
        </h2>
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
      </section>

      <DemoTests />

      <Actions />
    </div>
  );
};

export default Details;
