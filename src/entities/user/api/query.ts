import {
  useMutation,
  useQuery,
  type UseMutationOptions,
} from "@tanstack/react-query";
import type { IUser } from "../model/types";
import userApi from "./client";

export const useUserLogin = (
  options: UseMutationOptions<IUser, Error, IUser>,
) => {
  return useMutation<IUser, Error, IUser>({
    mutationFn: (payload: IUser) => userApi.create(payload),
    ...options,
  });
};

export const useUserCheck = (id: number) => {
  return useQuery({
    queryKey: ["user-info"],
    queryFn: () => userApi.check(id),
    enabled: !!id,
  });
};
