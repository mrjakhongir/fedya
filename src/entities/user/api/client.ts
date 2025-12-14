// src/entities/user/api/user-api.ts
import { BaseApi } from "@/shared/api/base-api";
import type { IUser } from "../model/types";

class UserApi extends BaseApi<IUser, Partial<IUser>, Partial<IUser>> {
  constructor() {
    super("/users");
  }
}

const userApi = new UserApi();
export default userApi;
