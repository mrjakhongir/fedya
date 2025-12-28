import { useTests } from "@/entities/test/api/query";
import Wrapper from "@/shared/ui/custom/wrapper";
import { FolderOpen, Loader } from "lucide-react";
import { parseAsString, useQueryStates } from "nuqs";
import ListSkeleton from "./list-skeleton";
import TestCard from "./test-card";

const TestList = () => {
  const [params] = useQueryStates({
    subject: parseAsString,
    eduLevel: parseAsString,
    courseLevel: parseAsString,
  });

  const { data, isLoading, isFetching } = useTests(params);

  if (isLoading) {
    return <ListSkeleton />;
  }

  if (data?.total === 0) {
    return (
      <Wrapper className="flex w-full flex-col items-center gap-2 py-10">
        <FolderOpen size="48" className="text-gray-300" />
        <p className="flex items-center justify-center text-xl text-gray-400">
          Ushbu filter bilan testlar topilmadi
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="relative flex w-full flex-col gap-4 pb-20">
      {data?.tests.map((test) => (
        <TestCard key={test._id} test={test} />
      ))}

      {isFetching && (
        <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center bg-black/20">
          <Loader className="text-primary animate-spin mt-20" size={40} />
        </div>
      )}
    </Wrapper>
  );
};

export default TestList;
