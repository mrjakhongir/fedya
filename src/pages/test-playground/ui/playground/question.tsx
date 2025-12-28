import type { ITest } from "@/entities/test/model/types";
import SectionTitle from "@/shared/ui/custom/section-title";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import { RadioGroup } from "@/shared/ui/radio-group";
import { useState } from "react";

type Props = {
  question: ITest;
};

const Question: React.FC<Props> = ({ question }) => {
  const [selected, setSelected] = useState("");
  return (
    <SectionWrapper>
      <Wrapper className="w-full">
        <SectionTitle title={question.title} />
        <RadioGroup
          value={selected}
          onValueChange={setSelected}
          className="flex flex-col gap-5"
        >
          ok
        </RadioGroup>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Question;
