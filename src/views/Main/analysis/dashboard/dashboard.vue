<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="12">
        <xpCard title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </xpCard>
      </el-col>
      <!-- <el-col :span="0">
        <xpCard title="不同城市商品销量"></xpCard>
      </el-col> -->
      <el-col :span="12">
        <xpCard title="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="categoryGoodsCount"></rose-echart>
        </xpCard>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content_row">
      <el-col :span="12">
        <xpCard title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </xpCard>
      </el-col>
      <el-col :span="12">
        <xpCard title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </xpCard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";
import xpCard from "../../../../base-ui/card/index";
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
} from "@/components/page-echarts";

export default defineComponent({
  name: "dashboard",
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount };
      });
    });

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];

      const categoryResult = store.state.dashboard.categoryGoodsSale;
      for (const item of categoryResult) {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      }

      return {
        xLabels,
        values,
      };
    });

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];

      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor;
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name);
        values.push(item.goodsFavor);
      }

      return {
        xLabels,
        values,
      };
    });

    return { categoryGoodsCount, categoryGoodsSale, categoryGoodsFavor };
  },
  components: {
    xpCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
  },
});
</script>

<style scoped lang="less">
.content_row {
  margin-top: 15px;
}
</style>
