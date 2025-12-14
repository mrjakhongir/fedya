export interface IUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  allows_write_to_pm?: boolean;
  added_to_attachment_menu?: boolean;
}
