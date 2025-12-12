import ByCourseLevel from "./by-course-level";
import ByEducationLevel from "./by-education-level";
import BySubject from "./by-subject";

const Filters = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <ByEducationLevel />
        <ByCourseLevel />
      </div>
      <BySubject />
    </div>
  );
};

export default Filters;
