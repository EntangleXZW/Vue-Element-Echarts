<template>
    <div id="app">
        <div v-if="mode">
            <el-alert title="类似js-echarts原始图形配置, 数据来源: http://api.worldbank.org/v2/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json" type="success">
            </el-alert>
            <hr>
        </div>

        <div id="bar-chart" :style="{ height: height, width: '100%' }"></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        this.myChart = null;
        this.option = {
            title: {
                text: 'Bar Demo 2'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                //data: ['score of math']
            },
            xAxis: {
                data: [],
                type: 'category'
                // data:[1, 2, 3, 4, 5]
            },
            yAxis: {

            },
            series: [
                {
                    name: '中国历年GDP趋势(万亿)',
                    type: 'bar',
                    data: []
                    // data:[2, 3, 5, 4, 6]
                }
            ]
        }
        return {

        }
    },
    props:{
        height:{
            type:String,
            default:'400px'
        },
        mode:{
            type:Boolean,
            default:true
        }
    },
    created() {
        axios.get("http://api.worldbank.org/v2/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json").then((result) => {
            let data = result.data;
            console.log(data);
            let datax = data[1].map((item) => { return item.date });
            let datay = data[1].map((item) => { return Math.round(item.value/10000000000)/100 });
            this.reSetOption(datax.reverse(), datay.reverse());
        });
    },
    mounted() {
        this.myChart = this.$echarts.init(document.getElementById('bar-chart'))
        // console.log(this.option);
        this.myChart.setOption(this.option);
        window.myChart = this.myChart;
        window.onresize = function(){
            this.myChart.resize();
        }
    },
    methods: {
        reSetOption(datax, datay) {
            this.option.xAxis.data = datax;
            this.option.series[0].data = datay;
            this.myChart.setOption(this.option)
        }
    }
}
</script>

<style></style>