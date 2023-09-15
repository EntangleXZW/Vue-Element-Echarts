<template>
    <div class="pie-chart">
        <div ref="main" style="height:300px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: "PieChart",
    mounted() {
        //this.$refs.main
        //var myChart = echarts.init(document.getElementById('main'));
        var myChart = echarts.init(this.$refs.main);
        // 绘制图表
        myChart.setOption({
            title: {
                text: '饼图'
            },
            tooltip: {
                trigger:'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '销量',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {name:'衬衫',value:5},
                        {name:'羊毛衫',value:20},
                        {name:'雪纺衫',value:36},
                        {name:'裤子',value:10},
                        {name:'高跟鞋',value:10},
                        {name:'袜子',value:20},
                    ]
                }
            ]
        });

        window.PieChart = myChart;
        
    }
}
</script>

<style>
</style>