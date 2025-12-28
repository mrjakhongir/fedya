import { paths, routeBuilders } from "@/shared/routes";
import { Button } from "@/shared/ui/button";
import Wrapper from "@/shared/ui/custom/wrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

const Actions = () => {
  return (
    <div className="fixed right-0 bottom-0 left-0 border-t bg-white py-3 shadow">
      <Wrapper className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" size="lg">
              Add to my tests
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader className="flex flex-col items-center gap-2">
              <PartyPopper className="text-amber-600" />
              <DialogTitle>Congratulations!</DialogTitle>
              <DialogDescription>
                Tets 1 added to your tests successfully
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <div className="flex gap-4">
                <Button className="flex-1" variant="outline" asChild>
                  <Link to={`${paths.tests.root}`}>My tests</Link>
                </Button>
                <Button className="flex-1" type="submit" asChild>
                  <Link to={`${routeBuilders.tests.playground(1)}`}>
                    Start now
                  </Link>
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Wrapper>
    </div>
  );
};

export default Actions;
