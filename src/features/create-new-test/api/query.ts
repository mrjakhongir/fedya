import { useMutation, type MutateOptions } from "@tanstack/react-query";
import createNewTestApi from "./client";

export const useCreateNewTest = (
  options: MutateOptions<unknown, Error, FormData>,
) => {
  return useMutation({
    mutationFn: (payload) => createNewTestApi.create(payload),
    ...options,
  });
};
