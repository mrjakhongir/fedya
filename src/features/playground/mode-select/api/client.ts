import { apiClient } from "@/shared/api/api";
import type { IStartSessionPayload } from "../model/types";

const testPlaygroundApi = {
  start: async (payload: IStartSessionPayload) => {
    const res = await apiClient.post(`/api/tests/start`, payload);
    return res.data;
  },
};

export default testPlaygroundApi;
