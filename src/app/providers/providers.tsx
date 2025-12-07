import { queryClient } from "@/shared/config/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
