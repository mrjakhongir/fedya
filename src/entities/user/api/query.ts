import { useQuery } from "@tanstack/react-query";
import userApi from "./client";

export const useUserInfo = (id: string) => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: () => userApi.detail(id),
    enabled: Boolean(id),
  });
};
