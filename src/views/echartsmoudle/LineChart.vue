<template>
    <div class="line-chart">
        <div ref="main" style="height:300px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: "LineChart",
    mounted() {
        //this.$refs.main
        //var myChart = echarts.init(document.getElementById('main'));
        var myChart = echarts.init(this.$refs.main);
        // 绘制图表
        myChart.setOption({
            title: {
                text: '折线图'
            },
            tooltip: {
                trigger:'axis',
            },
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'line',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        });

        window.LineChart = myChart;
    }
}
</script>

<style>
    #main{
        height: 300px;
    }
</style>