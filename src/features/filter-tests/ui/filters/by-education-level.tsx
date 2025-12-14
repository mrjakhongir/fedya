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
  {
    id: 3,
    title: "PhD",
  },
];

const ByEducationLevel = () => {
  const [value, setValue] = useQueryState("edu-level");
  return (
    <Select value={value ?? ""} onValueChange={setValue}>
      <SelectTrigger className="flex-1 bg-white">
        <SelectValue placeholder="Masters" />
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
