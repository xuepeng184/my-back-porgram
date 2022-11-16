import * as echarts from "echarts";

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };

  const setResize = () => {
    echartInstance.resize();
  };

  window.addEventListener("resize", () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOptions,
    setResize,
  };
}
