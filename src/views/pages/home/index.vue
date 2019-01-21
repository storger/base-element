<template>
    <div>
        <Top-title icon="icon-yibiao" title="控制面板" stitle="一个简单的 element-ui 后台管理系统模板" crumbs="false"></Top-title>
        <el-row :gutter="24">
            <el-col :md="6" :sm="12" :xs="24">
                <Widget icon="icon-icon_home" bcolor="#009688"></Widget>
            </el-col>
            <el-col :md="6" :sm="12" :xs="24">
                <Widget icon="icon-yibiao" bcolor="#17a2b8"></Widget>
            </el-col>
            <el-col :md="6" :sm="12" :xs="24">
                <Widget icon="icon-icon_home" bcolor="#ffc107"></Widget>
            </el-col>
            <el-col :md="6" :sm="12" :xs="24">
                <Widget icon="icon-yibiao" bcolor="#dc3545"></Widget>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-card>
                    <Chart :options="option" theme="ovilia-green" :auto-resize="auto"></Chart>
                </el-card>
            </el-col>
            <el-col :md="12" :sm="24">
                <el-card>
                    <Chart :options="linebar" theme="ovilia-green" :auto-resize="auto"></Chart>
                </el-card>
            </el-col>
            <el-col :md="24" style="margin-top:20px">
                <el-card>
                    <el-amap vid="amapDemo" :zoom="zoom" :center="center"></el-amap>
                </el-card>
            </el-col>

        </el-row>
    </div>
</template>

<script>
import Vue from "vue";
import TopTitle from "@/components/toptitle";
import Widget from "@/components/widget";
import Chart from "vue-echarts"; // 引入echarts
import theme from "./theme.json"; // 主题
import Amap from "vue-amap"; // 引入高德地图
Chart.registerTheme("ovilia-green", theme); // 修改图表主题
Vue.use(Amap);
// 初始化vue-amap
Amap.initAMapApiLoader({
  // 高德的key
  key: "955eb1704fafba7bdd7d28da9e49d9b2",
  // 插件集合
  plugin: [
    "AMap.Autocomplete",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ]
});
export default {
  name: "home",
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
	auto:true,
      option: {
        title: {
          text: "极坐标双数值轴"
        },
        legend: {
          data: ["line"]
        },
        polar: {
          center: ["50%", "54%"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        angleAxis: {
          type: "value",
          startAngle: 0
        },
        radiusAxis: {
          min: 0
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data
          }
        ],
        animationDuration: 2000
      },
      linebar: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["蒸发量", "降水量", "平均温度"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      },
      zoom: 18,
      center: [118.75586,31.973171],
    };
  },
  components: {
    TopTitle,
    Widget,
    Chart
  }
};
</script>

<style lang="less">
#amapDemo {
    height: 500px;
}
</style>


