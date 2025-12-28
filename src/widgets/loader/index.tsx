import { Loader } from "lucide-react";

const ScreenLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Loader className="text-primary animate-spin" size={40} />
    </div>
  );
};

export default ScreenLoader;
