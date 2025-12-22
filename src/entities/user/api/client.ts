import { apiClient } from "@/shared/api/api";
import { BaseApi } from "@/shared/api/base-api";
import type { IUser, IUserCheck } from "../model/types";

class UserApi extends BaseApi<IUser, Partial<IUser>, Partial<IUser>> {
  constructor() {
    super("/api/user");
  }

  async check(id: number) {
    const res = await apiClient.post<IUserCheck>(`${this.basePath}/check`, {
      id,
    });
    return res.data;
  }
}

const userApi = new UserApi();
export default userApi;
