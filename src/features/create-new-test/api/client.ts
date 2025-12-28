import { apiClient } from "@/shared/api/api";

const createNewTestApi = {
  create: async (payload: FormData) => {
    const res = await apiClient.post("/api/tests", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },
};

export default createNewTestApi;
