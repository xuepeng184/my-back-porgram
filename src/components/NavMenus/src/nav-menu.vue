<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="" />
      <span class="title">xp嘻嘻嘻</span>
    </div>
    <el-menu
      active-text-color="#0a68bd"
      background-color="#8c2135"
      class="el-menu-vertical-demo"
      unique-opened
      :collapse="collapse"
      text-color="#b7bdc3"
      :default-active="defaultActive"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 这是一级菜单 可以展开的情况-->
        <template v-if="item.type == 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon">
                <Monitor
                  style="height: 20px; width: 20px; margin-right: 10px"
                  v-if="item.id == 38"
                />
                <Setting
                  style="height: 20px; width: 20px; margin-right: 10px"
                  v-if="item.id == 1"
                />
                <Goods
                  style="height: 20px; width: 20px; margin-right: 10px"
                  v-if="item.id == 9"
                />
                <ChatLineRound
                  style="height: 20px; width: 20px; margin-right: 10px"
                  v-if="item.id == 41"
                />
              </i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItem(subItem)"
              >
                <i v-if="subItem.icon" :class="subItem.icon"></i>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!--这是一级菜单 不能展开的情况-->
        <template v-else-if="item.type == 2">
          <el-menu-item :index="item.id + ''">
            <i :class="item.icon" v-if="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "../../../store/index";
import { useRouter, useRoute } from "vue-router";
import { pathMapToMenus } from "../../../utils/map-menus";
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const userMenus = computed(() => store.state.login.userMenus);

    const currentPath = route.path;
    const menu = pathMapToMenus(userMenus.value, currentPath);
    const defaultActive = ref(menu.id + "");

    const handleMenuItem = (item: any) => {
      router.push({
        path: item.url ?? "/not-found",
      });
    };

    return {
      userMenus,
      handleMenuItem,
      defaultActive,
    };
  },
});
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
    * {
      vertical-align: sub;
    }
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>