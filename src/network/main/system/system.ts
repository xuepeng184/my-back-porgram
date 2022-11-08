import xpRequest from "@/network";
import { IDataType } from "@/network/type";
export function getPageListData(url: string, queryInfo: any) {
  return xpRequest.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}
