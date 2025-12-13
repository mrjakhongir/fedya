import type { ITest } from "@/entities/test/model/types";
import SectionTitle from "@/shared/ui/custom/section-title";
import Wrapper from "@/shared/ui/custom/wrapper";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { useState } from "react";

type Props = {
  question: ITest;
};

const Question: React.FC<Props> = ({ question }) => {
  const [selected, setSelected] = useState("");
  return (
    <Wrapper className="w-full">
      <SectionTitle title={question.title} />
      <RadioGroup
        value={selected}
        onValueChange={setSelected}
        className="flex flex-col gap-5"
      >
        {question.options.map((opt) => (
          <div key={opt.id} className="flex items-center gap-3">
            <RadioGroupItem value={String(opt.id)} id={`opt_${opt.id}`} />
            <Label htmlFor={`opt_${opt.id}`}>{opt.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </Wrapper>
  );
};

export default Question;
