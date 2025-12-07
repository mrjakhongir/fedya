import ByCourseLevel from "./by-course-level";
import ByEducationLevel from "./by-education-level";
import ByEducationMode from "./by-education-mode";

const Filters = () => {
  return (
    <div className="flex gap-2">
      <ByEducationLevel />
      <ByCourseLevel />
      <ByEducationMode />
    </div>
  );
};

export default Filters;
