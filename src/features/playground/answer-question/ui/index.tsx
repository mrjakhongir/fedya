import Wrapper from "@/shared/ui/custom/wrapper";
import { SquareCheckBig } from "lucide-react";
import { useSessionStore } from "../../model/use-session-store";

const Playground = () => {
  const { question, currentIndex } = useSessionStore();

  return (
    <div className="flex flex-col gap-5">
      <Wrapper className="flex flex-col items-center justify-center gap-2 px-10 py-10 text-center text-xl text-slate-400">
        <SquareCheckBig size={56} />
        <p>Boshlash uchun</p>
        <p>test yechish usulini tanlang</p>
      </Wrapper>
    </div>
  );
};

export default Playground;
