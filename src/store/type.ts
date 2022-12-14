import { ILoginState } from "./login/type";
import { ISystemState } from "./main/system/type";
import { IDashBoardState } from "./main/analysis/type";

export interface IRootState {
  name: string;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  dashboard: IDashBoardState;
}

export type IStoreType = IRootState & IRootWithModule;
