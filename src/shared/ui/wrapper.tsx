import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn("mx-auto max-w-xl px-5", className)}>{children}</div>
  );
};

export default Wrapper;
