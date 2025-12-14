import { cn } from "@/shared/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={cn("rounded-xl bg-white py-4 shadow-sm", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
