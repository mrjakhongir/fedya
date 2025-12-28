import { useMutation, type MutateOptions } from "@tanstack/react-query";
import addToMyTestApi from "./client";

interface IAddToMyTest {
  testId: string;
  userId?: number;
}

export const useAddToMyTests = (
  options: MutateOptions<unknown, Error, IAddToMyTest>,
) => {
  return useMutation({
    mutationFn: ({ testId, userId }) => addToMyTestApi.save(testId, userId),
    ...options,
  });
};
