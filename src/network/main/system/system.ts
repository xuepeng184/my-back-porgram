import xpRequest from "@/network";
import { IDataType } from "@/network/type";
export function getPageListData(url: string, queryInfo?: any) {
  return xpRequest.post<IDataType>({
    url: url,
    data: queryInfo,
  });
}

export function deletePageData(url: string) {
  return xpRequest.delete<IDataType>({
    url: url,
  });
}

export function createPageData(url: string, newData: any) {
  return xpRequest.post<IDataType>({
    url: url,
    data: newData,
  });
}

export function editPageData(url: string, editData: any) {
  return xpRequest.patch<IDataType>({
    url: url,
    data: editData,
  });
}
