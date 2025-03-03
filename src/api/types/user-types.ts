export interface UserDTO {
  userId?: string;
  userName?: string;
  gender?: number;
  status?: string;
}

export interface UserEditRequest {
  user: UserDTO;
}

export interface UserLoginRequest {
  name: string;
  password: string;
}

export interface UserQueryRequest {
  status?: string;
  nameLike?: string;
  gender?: number;
}
