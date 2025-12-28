import { useMutation, type MutateOptions } from "@tanstack/react-query";
import type {
  IStartSessionPayload,
  IStartSessionResponse,
} from "../model/types";
import testPlaygroundApi from "./client";

export const useStartTestSession = (
  options: MutateOptions<IStartSessionResponse, Error, IStartSessionPayload>,
) => {
  return useMutation({
    mutationFn: (payload) => testPlaygroundApi.start(payload),
    ...options,
  });
};
