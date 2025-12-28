export interface IUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  initData?: string;
}

export interface IUserCheck {
  exists: boolean;
  user: IUser | null;
}
