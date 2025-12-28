import { useMyTests } from "@/entities/test/api/query";
import { useAuthStore } from "@/features/auth/store/use-auth-store";
import ScreenLoader from "@/widgets/loader";
import { FolderOpen } from "lucide-react";
import TestsList from "../list";

const SavedTests = () => {
  const { user } = useAuthStore();
  const { data, isLoading } = useMyTests("saved", user?.id);

  if (isLoading) return <ScreenLoader />;

  if ((data && data.total === 0) || !data) {
    return (
      <div className="flex w-full flex-col items-center gap-2 py-10">
        <FolderOpen size="48" className="text-gray-300" />
        <p className="flex items-center justify-center text-xl text-gray-400">
          Sizda saqlangan testlar mavjud emas
        </p>
      </div>
    );
  }

  return (
    <div>
      <TestsList data={data.tests} />
    </div>
  );
};

export default SavedTests;
