import { apiClient } from "@/shared/api/api";
import type { ITestResponse, ITestsResponse } from "../model/types";

const testApi = {
  list: async (params: Record<string, string | null>) => {
    const res = await apiClient.get<ITestsResponse>(`/api/tests?`, {
      params,
    });
    return res.data;
  },

  single: async (id?: string) => {
    const res = await apiClient.get<ITestResponse>(`/api/tests/${id}`);
    return res.data;
  },
};

export default testApi;
