import type { IQuestion } from "@/entities/test/model/types";
import SectionTitle from "@/shared/ui/custom/section-title";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";

type Props = {
  questions: IQuestion[];
};

const DemoTests: React.FC<Props> = ({ questions }) => {
  return (
    <SectionWrapper>
      <Wrapper>
        <SectionTitle title="Namunaviy Testlar" />

        <ul className="flex flex-col gap-5">
          {questions.map(({ options, text, id }) => (
            <li>
              <h3 className="text-md mb-2 font-medium">{text}</h3>

              <RadioGroup className="flex flex-col gap-2">
                {options.map((opt) => (
                  <div key={opt.id} className="flex items-center gap-3">
                    <RadioGroupItem
                      value={String(opt.id)}
                      id={`opt_${opt.id}_${id}`}
                    />
                    <Label
                      htmlFor={`opt_${opt.id}_${id}`}
                      className="text-sm text-gray-500"
                    >
                      {opt.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </li>
          ))}
        </ul>
      </Wrapper>
    </SectionWrapper>
  );
};

export default DemoTests;
