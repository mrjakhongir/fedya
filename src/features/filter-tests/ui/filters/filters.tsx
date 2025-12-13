import Wrapper from "@/shared/ui/custom/wrapper";
import ByCourseLevel from "./by-course-level";
import ByEducationLevel from "./by-education-level";
import BySubject from "./by-subject";

const Filters = () => {
  return (
    <Wrapper className="flex w-full flex-col gap-2">
      <div className="flex gap-4">
        <ByEducationLevel />
        <ByCourseLevel />
      </div>
      <BySubject />
    </Wrapper>
  );
};

export default Filters;
