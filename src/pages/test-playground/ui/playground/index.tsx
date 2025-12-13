import { testList } from "@/shared/data/mock-tests";
import { motionVariants } from "@/shared/lib/motion-variants";
import { Button } from "@/shared/ui/button";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import BottomActionsWrapper from "@/widgets/bottom-action-wrapper";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQueryState } from "nuqs";
import { useState } from "react";
import Question from "./question";

const Playground = () => {
  const [currQuestionIndex, setCurrQuestionIndex] = useQueryState("question", {
    defaultValue: 0,
    parse: (value) => Number(value),
    serialize: (value) => String(value),
  });

  const question = testList[currQuestionIndex];

  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrQuestionIndex(currQuestionIndex + 1);
  };

  const prev = () => {
    if (currQuestionIndex === 0) return;
    setDirection(-1);
    setCurrQuestionIndex(currQuestionIndex - 1);
  };

  return (
    <SectionWrapper className="flex flex-col gap-5 px-0">
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={currQuestionIndex}
          custom={direction}
          variants={motionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Question question={question} />
        </motion.div>
      </AnimatePresence>

      <BottomActionsWrapper>
        <Wrapper className="flex items-center gap-3">
          <Button
            variant="secondary"
            onClick={prev}
            disabled={currQuestionIndex === 0}
            className="flex-1"
          >
            <ChevronLeft />
            Prev
          </Button>
          <Button
            onClick={next}
            disabled={currQuestionIndex === testList.length - 1}
            className="flex-1"
          >
            Next
            <ChevronRight />
          </Button>
        </Wrapper>
      </BottomActionsWrapper>
    </SectionWrapper>
  );
};

export default Playground;
