import XpRequest from "./request/index";
import { BASE_URL, TIME_OUT } from "./request/config";
import LocalCache from "@/utils/cache";
const xpRequest = new XpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      const token = LocalCache.getCache("token") || "";
      // const token=''
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    },
  },
});

export default xpRequest;
