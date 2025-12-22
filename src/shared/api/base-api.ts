import { apiClient } from "./api";

export class BaseApi<TData = unknown, TCreate = unknown, TUpdate = unknown> {
  protected basePath: string;
  constructor(basePath: string) {
    this.basePath = `http://localhost:4000${basePath}`;
  }

  list(params?: unknown) {
    return apiClient.get<TData[]>(this.basePath, { params });
  }

  async details(id: string) {
    const res = await apiClient.get<TData>(`${this.basePath}/${id}`);
    return res.data;
  }

  async create(data: TCreate) {
    const res = await apiClient.post<TData>(this.basePath, data);
    return res.data;
  }

  update(id: number, data: TUpdate) {
    return apiClient.put<TData>(`${this.basePath}/${id}`, data);
  }

  delete(id: number) {
    return apiClient.delete(`${this.basePath}/${id}`);
  }
}
