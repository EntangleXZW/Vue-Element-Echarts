<template>
    <div class="bar-chart">
        <div ref="main" style="height: 300px"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: "BarChart",
    props:{
        echartsTag:{
            type: String,
            default: 'BarChart'
        },
        xdata:{
            type:Array,
            default: () => {
                return ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            }
        },
        series:{
            type:Array,
            default:() => {
                return [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20],
                        colorBy: 'data'
                    }
                ]
            }
        }
    },
    mounted() {
        //this.$refs.main
        //var myChart = echarts.init(document.getElementById('main'));
        var myChart = echarts.init(this.$refs.main);
        // 绘制图表
        myChart.setOption({
            title: {
                text: '柱状图'
            },
            tooltip: {},
            legend:{

            },
            xAxis: {
                data: this.xdata
            },
            yAxis: {},
            series: this.series
        });
        // console.log(this.echartsTag);
        window[this.echartsTag] = myChart;
    }
}
</script>

<style>

</style>