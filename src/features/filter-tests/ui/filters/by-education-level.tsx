import ClearFilter from "@/shared/ui/custom/clear-filter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { useQueryState } from "nuqs";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useQueryState("eduLevel");

  const handleClear = () => {
    setValue(null);
    setOpen(false);
  };

  return (
    <Select
      value={value ?? ""}
      onValueChange={setValue}
      open={open}
      onOpenChange={setOpen}
    >
      <SelectTrigger className="relative flex-1 bg-white">
        <SelectValue placeholder="Masters" />
      </SelectTrigger>
      <SelectContent>
        {educationLevels.map((level) => (
          <SelectItem key={level.id} value={level.title}>
            {level.title}
          </SelectItem>
        ))}

        <ClearFilter onClear={handleClear} />
      </SelectContent>
    </Select>
  );
};

export default ByEducationLevel;
