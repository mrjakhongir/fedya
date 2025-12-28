import Wrapper from "@/shared/ui/custom/wrapper";
import { Skeleton } from "@/shared/ui/skeleton";

const ListSkeleton = () => {
  return (
    <Wrapper className="flex w-full flex-col gap-4">
      <Skeleton className="h-[106px] w-full" />
      <Skeleton className="h-[106px] w-full" />
      <Skeleton className="h-[106px] w-full" />
      <Skeleton className="h-[106px] w-full" />
      <Skeleton className="h-[106px] w-full" />
      <Skeleton className="h-[106px] w-full" />
      <Skeleton className="h-[106px] w-full" />
    </Wrapper>
  );
};

export default ListSkeleton;
