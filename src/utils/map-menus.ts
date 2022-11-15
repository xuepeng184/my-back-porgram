import { RouteRecordRaw } from "vue-router";
import { IBread } from "../base-ui/bread/types/index";

let firstMenu: any = "";
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  //先加载所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  //webpack自带的require
  const routeFiles = require.context("../router/main", true, /\.ts$/);
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1]);
    allRoutes.push(route.default);
  });

  //根据权限取需要的routes
  const getRoutesByRoles = (menus: any[]) => {
    if (!menus) return;
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url;
        });
        if (route) routes.push(route);
        if (!firstMenu) {
          firstMenu = menu;
        }
      } else {
        getRoutesByRoles(menu.children);
      }
    }
  };

  getRoutesByRoles(userMenus);
  return routes;
}

export function pathMapToMenus(userMenus: any[], currentPath: string, bread?: IBread[]): any {
  for (const menu of userMenus) {
    if (menu.type == 1) {
      const findMenu = pathMapToMenus(menu.children ?? [], currentPath);
      if (findMenu) {
        bread?.push({ name: menu.name });
        bread?.push({ name: findMenu.name });
        return findMenu;
      }
    } else if (menu.type == 2 && menu.url == currentPath) {
      return menu;
    }
  }
}

export function pathMapToBread(userMenus: any[], currentPath: string) {
  const bread: IBread[] = [];
  pathMapToMenus(userMenus, currentPath, bread);
  return bread;
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = [];

  const recursePermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type == 1 || menu.type == 2) {
        recursePermission(menu.children ?? []);
      } else if (menu.type == 3) {
        permissions.push(menu.permission);
      }
    }
  };

  recursePermission(userMenus);
  return permissions;
}

export function getMenuLeafKeys(menuList: any[]) {
  const leftKeys: number[] = [];
  const getLeaf = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        getLeaf(menu.children);
      } else {
        leftKeys.push(menu.id);
      }
    }
  };
  getLeaf(menuList);

  return leftKeys;
}

export { firstMenu };
