import { testList } from "@/shared/data/mock-tests";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import MyTestItem from "./item";

const MyTestsList = () => {
  return (
    <SectionWrapper className="px-0">
      <Wrapper>
        <ul className="flex flex-col gap-4">
          {testList.map((test) => (
            <MyTestItem test={test} key={test.id} />
          ))}
        </ul>
      </Wrapper>
    </SectionWrapper>
  );
};

export default MyTestsList;
