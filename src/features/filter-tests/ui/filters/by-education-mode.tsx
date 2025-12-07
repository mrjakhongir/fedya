import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useQueryState } from "nuqs";

const educationModes = [
  {
    id: 1,
    title: "Night",
  },
  {
    id: 2,
    title: "Remote",
  },
  {
    id: 3,
    title: "Daytime",
  },
];

const ByEducationMode = () => {
  const [value, setValue] = useQueryState("mode");
  return (
    <Select value={value ?? ""} onValueChange={setValue}>
      <SelectTrigger className="w-[120px] bg-white">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        {educationModes.map((level) => (
          <SelectItem key={level.id} value={level.title}>
            {level.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ByEducationMode;
