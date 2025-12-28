import { useAuthStore } from "@/features/auth/store/use-auth-store";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { Loader2, Rocket } from "lucide-react";
import { useQueryState } from "nuqs";
import { useSessionStore } from "../../model/use-session-store";
import { useStartTestSession } from "../api/query";

type Props = {
  testId?: string;
};

const TestSetup: React.FC<Props> = ({ testId }) => {
  const { user } = useAuthStore();
  const { setSession, sessionId } = useSessionStore();

  const { mutate, isPending } = useStartTestSession({
    onSuccess: (data) => {
      setSession({
        sessionId: data.sessionId,
        currentIndex: data.currentIndex,
        question: data.question,
      });
    },
  });

  const [testMode, setTestMode] = useQueryState("mode", {
    defaultValue: "25",
  });

  const startTestSession = () => {
    console.log("start test session");
    if (!user || !testId) return;

    mutate({
      testId,
      userId: user.id,
      mode: testMode,
    });
  };

  return (
    <SectionWrapper className="px-0">
      <Wrapper className="flex items-end justify-between gap-4">
        <div>
          <p className="mb-1">Test yechish usuli:</p>
          <RadioGroup
            className="flex flex-1 items-center gap-2"
            value={testMode}
            onValueChange={(value) => setTestMode(value)}
          >
            <div className="flex items-center">
              <RadioGroupItem
                value="25"
                id="25"
                className="hidden"
                disabled={Boolean(sessionId)}
              />
              <Label
                htmlFor="25"
                className={cn(
                  "bg-secondary text-secondary-foreground text-md rounded-lg px-3 py-1",
                  testMode === "25" && "bg-primary text-primary-foreground",
                  Boolean(sessionId) && "opacity-50",
                )}
              >
                25
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem
                value="all"
                id="all"
                className="hidden"
                disabled={Boolean(sessionId)}
              />
              <Label
                htmlFor="all"
                className={cn(
                  "bg-secondary text-secondary-foreground text-md rounded-lg px-3 py-1",
                  testMode === "all" && "bg-primary text-primary-foreground",
                  Boolean(sessionId) && "opacity-50",
                )}
              >
                Barchasi
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Button
          size="sm"
          onClick={startTestSession}
          disabled={Boolean(sessionId)}
        >
          {isPending ? <Loader2 className="animate-spin" /> : <Rocket />}
          Start test
        </Button>
      </Wrapper>
    </SectionWrapper>
  );
};

export default TestSetup;
