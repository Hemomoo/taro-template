import {UserLoginRequest, UserDTO, UserEditRequest, UserQueryRequest} from "./types/user-types";
import api from "../utils/request";

namespace UserApi {
  export function list(request: UserQueryRequest): Promise<UserDTO[]> {
    return api.get('user', request)
  }

  export function getById(userId: string): Promise<UserDTO> {
    return api.get(`user/${userId}`)
  }

  /**
   * 用户登录函数
   *
   * @param request 登录请求对象，包含用户登录信息
   * @returns 登录结果，返回一个布尔值的Promise对象，表示登录是否成功
   */
  export function login(request: UserLoginRequest): Promise<boolean> {
    return api.post('/login', request)
  }

  export function edit(request: UserEditRequest): Promise<boolean> {
    return api.put(`user/${request.user.userId}`, request)
  }

  export function deleteUser(userId: string): Promise<boolean> {
    return api.delete(`user/${userId}`)
  }
}

export default UserApi;
