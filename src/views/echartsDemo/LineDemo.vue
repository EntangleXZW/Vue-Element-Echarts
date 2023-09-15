<template>
    <div id="app">
        <div>
            <el-alert title="类似js-echarts原始图形配置, 数据来源: http://api.worldbank.org/v2/countries/CHN/indicators/NY.GDP.MKTP.CD?per_page=5000&format=json" type="success">
            </el-alert>
        </div>
        <br>
        <hr>
        <div id="bar-chart" style="height: 400px; width: 100%;"></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        this.myChart = null;
        this.option = {
            title: {
                text: 'Line Demo 1'
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
                    name: '',
                    type: 'bar',
                    data: []
                    // data:[2, 3, 5, 4, 6]
                },
                {
                    name: '',
                    type: 'line',
                    data: []
                    // data:[2, 3, 5, 4, 6]
                }
            ]
        }
        return {

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
            this.option.series[1].data = datay;
            this.myChart.setOption(this.option)
        }
    }
}
</script>

<style></style>