import { apiClient } from "@/shared/api/api";

const addToMyTestApi = {
  save: async (testId: string, userId?: number) => {
    const res = await apiClient.post(`/api/tests/${testId}/save`, { userId });
    return res.data;
  },
};

export default addToMyTestApi;
