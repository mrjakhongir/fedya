import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useQueryState } from "nuqs";

const educationLevels = [
  {
    id: 1,
    title: "Masters",
  },
  {
    id: 2,
    title: "Bachelors",
  },
];

const ByEducationLevel = () => {
  const [value, setValue] = useQueryState("edu-level");
  return (
    <Select value={value ?? ""} onValueChange={setValue}>
      <SelectTrigger className="w-[120px] bg-white">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {educationLevels.map((level) => (
          <SelectItem key={level.id} value={level.title}>
            {level.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ByEducationLevel;
