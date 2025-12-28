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
  const [open, setOpen] = useState(false);
  const [value, setValue] = useQueryState("courseLevel");

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
      <SelectTrigger className="flex-1 bg-white">
        <SelectValue placeholder="I" />
      </SelectTrigger>
      <SelectContent>
        {courseLevels.map((level) => (
          <SelectItem key={level.id} value={level.title}>
            {level.title}
          </SelectItem>
        ))}

        <ClearFilter onClear={handleClear} />
      </SelectContent>
    </Select>
  );
};

export default ByCourseLevel;
