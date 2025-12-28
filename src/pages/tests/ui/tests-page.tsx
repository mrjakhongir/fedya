import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import Header from "@/widgets/header/header";
import Actions from "./actions";
import OwnedTests from "./owned-tests";
import SavedTests from "./saved-tests";

const TestsPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header title="Testlar" link="/" />

      <SectionWrapper className="min-h-[calc(100vh-168px)] pt-2">
        <Wrapper>
          <Tabs defaultValue="saved">
            <div className="sticky top-0 bg-white py-2">
              <TabsList className="w-full">
                <TabsTrigger value="saved">Saqlangan testlar</TabsTrigger>
                <TabsTrigger value="password">Mening testlarim</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="saved">
              <SavedTests />
            </TabsContent>
            <TabsContent value="password">
              <OwnedTests />
            </TabsContent>
          </Tabs>
        </Wrapper>
      </SectionWrapper>

      <Actions />
    </div>
  );
};

export default TestsPage;
