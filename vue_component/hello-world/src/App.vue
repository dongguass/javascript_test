<template>
  <div id="app">
    <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "今日销售量" },
        tooltip: {},
        xAxis: {
          data: ["香辣鸡丁保", "片皮鸭", "爱心甜点", "小食", "饮料", "套餐"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
};
</script>

<style>

</style>
