<template>
    <el-container>
        <el-main>
            <el-row style="height: 40px;">
                <el-col :span="24">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>静态看板调试</el-breadcrumb-item>
                        <el-breadcrumb-item>echarts组合</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <bar-chart echartsTag="BarChart1" :series="series" :xdata="xdata" v-if="xdata.length"></bar-chart>
                </el-col>
                <el-col :span="12">
                    <line-chart></line-chart>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <pie-chart></pie-chart>
                </el-col>
                <el-col :span="12">
                    <bar-chart echartsTag="BarChart2"></bar-chart>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import BarChart from '../echartsmoudle/BarChart.vue'
import LineChart from '../echartsmoudle/LineChart.vue'
import PieChart from '../echartsmoudle/PieChart.vue'

import axios from 'axios'
export default {
    components: {
        BarChart,
        LineChart,
        PieChart
    },
    data() {
        return {
            xdata: [],
            series: []
        }
    },
    created() {
        axios.get("http://api.worldbank.org/v2/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json").then((result) => {
            let data = result.data;
            let datax = data[1].map((item) => { return item.date });
            console.log(datax);
            let datay = data[1].map((item) => { return Math.round(item.value / 10000000000) / 100 });
            this.xdata = datax.reverse();
            this.series = [
                {
                    name: 'GDP-Bar',
                    type: 'bar',
                    data: datay.reverse(),
                }
            ]
        });
    },
    mounted() {
        window.onresize = function () {
            window.PieChart.resize();
            window.LineChart.resize();
            window['BarChart1'].resize();
            window['BarChart2'].resize();
        }
    }
}
</script>

<style scoped>
.el-main {
    padding: 0;
}

.el-header {
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>