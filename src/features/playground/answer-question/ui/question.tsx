import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { SquareCheckBig } from "lucide-react";
import { useSessionStore } from "../../model/use-session-store";

const Question = () => {
  const { sessionId, question, updateQuestion, currentIndex } =
    useSessionStore();

  if (!sessionId) {
    return (
      <Wrapper className="flex flex-col items-center justify-center gap-2 px-10 py-10 text-center text-xl text-slate-400">
        <SquareCheckBig size={56} />
        <p>Boshlash uchun</p>
        <p>test yechish usulini tanlang</p>
      </Wrapper>
    );
  }

  if (!question) {
    return (
      <SectionWrapper>
        <Wrapper className="py-10 text-center text-slate-400">
          Savol yuklanmoqda...
        </Wrapper>
      </SectionWrapper>
    );
  }

  const handleSelect = (id: string) => {
    const selectedOption = question.options?.find((o) => o.id === Number(id));
    if (selectedOption) updateQuestion({ selected: selectedOption });
  };

  return (
    <SectionWrapper>
      <Wrapper className="w-full space-y-6">
        <h2 className="text-lg font-semibold">
          {currentIndex + 1}. {question.text}
        </h2>

        <RadioGroup
          value={String(question.selected?.id ?? "")}
          onValueChange={handleSelect}
          className="flex flex-col gap-4"
        >
          {question.options?.map((opt) => (
            <label
              key={opt.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                question.selected?.id === opt.id
                  ? "border-primary bg-primary/10"
                  : "border-gray-300"
              }`}
            >
              <RadioGroupItem value={String(opt.id)} />
              {opt.label}
            </label>
          ))}
        </RadioGroup>
      </Wrapper>
    </SectionWrapper>
  );
};

export default Question;
