import { useStore } from "@/store";

export function usePermission(pageName: string, handleName: string) {
  const store = useStore();
  const permissions = store.state.login.permissions;
  const nowPermission = `system:${
    pageName == "user" ? pageName + "s" : pageName
  }:${handleName}`;
  return !!permissions.find((item) => item == nowPermission);
}
