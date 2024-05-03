export interface UserModel {
  user_id: number;
  user_email: string;
  user_username: string;
  user_is_active: number;
  user_profile_image: string;
  user_last_active_epoch: number;
  user_creation_epoch: number;
  user_is_new: boolean;
  user_token: string;
}
