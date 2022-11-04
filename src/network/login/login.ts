import xpRequest from "../index";
import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginApi {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/",
}

export function accountLoginRequest(account: IAccount) {
  return xpRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account,
  });
}

export function requestUserInfo(id: number) {
  return xpRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
  });
}

export function requestUserMenus(id: number) {
  return xpRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + "/menu",
  });
}
