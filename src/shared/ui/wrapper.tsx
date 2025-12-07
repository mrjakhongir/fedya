import { cn } from "../lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper: React.FC<Props> = ({ children, className }) => {
  return <div className={cn("mx-auto max-w-xl", className)}>{children}</div>;
};

export default Wrapper;
