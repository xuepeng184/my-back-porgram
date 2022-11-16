<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <xpCard title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </xpCard>
      </el-col>
      <el-col :span="10">
        <xpCard title="不同城市商品销量"></xpCard>
      </el-col>
      <el-col :span="7">
        <xpCard title="分类商品数量(玫瑰图)"></xpCard>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content_row">
      <el-col :span="12">
        <xpCard title="分类商品的销量"></xpCard>
      </el-col>
      <el-col :span="12">
        <xpCard title="分类商品的收藏"></xpCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
import xpCard from "../../../../base-ui/card/index";
import { PieEchart } from "@/components/page-echarts";

export default defineComponent({
  name: "dashboard",
  setup() {
    const store = useStore();
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount };
      });
    });
    store.dispatch("dashboard/getDashboardDataAction");
    return { categoryGoodsCount };
  },
  components: {
    xpCard,
    PieEchart,
  },
});
</script>

<style scoped lang="less">
.content_row {
  margin-top: 15px;
}
</style>
