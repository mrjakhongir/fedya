import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import { Label } from "@/shared/ui/label";
import { RadioGroup, RadioGroupItem } from "@/shared/ui/radio-group";
import { useQueryState } from "nuqs";

const TestSetup = () => {
  const [testMode, setTestMode] = useQueryState("mode", {
    defaultValue: "10",
  });

  return (
    <SectionWrapper className="px-0">
      <Wrapper className="flex items-center gap-4">
        <p>Test mode:</p>
        <RadioGroup
          className="flex flex-1 items-center gap-4"
          value={testMode}
          onValueChange={(value) => setTestMode(value)}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem value="10" id="10" className="hidden" />
            <Label
              htmlFor="10"
              className={cn(
                "bg-secondary text-secondary-foreground text-md rounded-lg px-3 py-1",
                testMode === "10" && "bg-primary text-primary-foreground",
              )}
            >
              10
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="25" id="25" className="hidden" />
            <Label
              htmlFor="25"
              className={cn(
                "bg-secondary text-secondary-foreground text-md rounded-lg px-3 py-1",
                testMode === "25" && "bg-primary text-primary-foreground",
              )}
            >
              25
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="free" id="free" className="hidden" />
            <Label
              htmlFor="free"
              className={cn(
                "bg-secondary text-secondary-foreground text-md rounded-lg px-3 py-1",
                testMode === "free" && "bg-primary text-primary-foreground",
              )}
            >
              Free
            </Label>
          </div>
        </RadioGroup>

        <Button>Start test</Button>
      </Wrapper>
    </SectionWrapper>
  );
};

export default TestSetup;
