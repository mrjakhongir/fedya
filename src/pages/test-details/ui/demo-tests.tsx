import SectionTitle from "@/shared/ui/custom/section-title";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";

const DemoTests = () => {
  return (
    <SectionWrapper>
      <Wrapper>
        <SectionTitle title="Demo tests" />

        <ul className="flex flex-col gap-4">
          <li>
            <h3 className="mb-2 text-lg font-medium">Question 1</h3>
            <ul className="flex flex-col gap-1 text-slate-700">
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
            </ul>
          </li>
          <li>
            <h3 className="mb-2 text-lg font-medium">Question 1</h3>
            <ul className="flex flex-col gap-1 text-slate-700">
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
            </ul>
          </li>
          <li>
            <h3 className="mb-2 text-lg font-medium">Question 1</h3>
            <ul className="flex flex-col gap-1 text-slate-700">
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
            </ul>
          </li>
          <li>
            <h3 className="mb-2 text-lg font-medium">Question 1</h3>
            <ul className="flex flex-col gap-1 text-slate-700">
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
            </ul>
          </li>
          <li>
            <h3 className="mb-2 text-lg font-medium">Question 1</h3>
            <ul className="flex flex-col gap-1 text-slate-700">
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
              <li>Answer 1</li>
            </ul>
          </li>
        </ul>
      </Wrapper>
    </SectionWrapper>
  );
};

export default DemoTests;
