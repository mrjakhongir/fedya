import { testList } from "@/shared/data/mock-tests";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import MyTestItem from "./item";

const MyTestsList = () => {
  return (
    <SectionWrapper>
      <ul className="flex flex-col gap-4">
        {testList.map((test) => (
          <MyTestItem test={test} key={test.id} />
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default MyTestsList;
