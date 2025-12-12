import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useQueryState } from "nuqs";

const courseLevels = [
  {
    id: 1,
    title: "I",
  },
  {
    id: 2,
    title: "II",
  },
  {
    id: 3,
    title: "III",
  },
  {
    id: 4,
    title: "IV",
  },
  {
    id: 5,
    title: "V",
  },
  {
    id: 6,
    title: "VI",
  },
];

const ByCourseLevel = () => {
  const [value, setValue] = useQueryState("course-level");
  return (
    <Select value={value ?? ""} onValueChange={setValue}>
      <SelectTrigger className="flex-1 bg-white">
        <SelectValue placeholder="Select course level" />
      </SelectTrigger>
      <SelectContent>
        {courseLevels.map((level) => (
          <SelectItem key={level.id} value={level.title}>
            {level.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ByCourseLevel;
