import { cn } from "@/shared/lib/utils";
import { FormControl, FormField, FormItem, FormLabel } from "@/shared/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import type { Control } from "react-hook-form";
import { z } from "zod";
import { educationLevels } from "../model/constants";
import { formSchema } from "../model/form-schema";

type Props = {
  control: Control<z.infer<typeof formSchema>>;
};

const SelectEduLevel: React.FC<Props> = ({ control }) => {
  return (
    <FormField
      control={control}
      name="eduLevel"
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>
            Education level <span className="text-red-500">*</span>
          </FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger
                className={cn(
                  "w-full",
                  fieldState.error && "border-red-500 focus:ring-red-500",
                )}
              >
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                {educationLevels.map((level) => (
                  <SelectItem key={level.id} value={level.title}>
                    {level.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default SelectEduLevel;
