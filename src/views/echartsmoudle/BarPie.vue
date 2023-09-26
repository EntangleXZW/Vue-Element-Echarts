<template>
    <div ref="main" style="height: 500px;"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
    name: "BarPie",
    // data() {
    //     return {

    //     }
    // },
    props: ["source", "title"],
    mounted() {
        //console.log(this.props);
        this.setOption();
    },
    watch: {
        source(){
            this.setOption();
        }
    },
    methods: {
        setOption() {
            var myChart = echarts.getInstanceByDom(this.$refs.main);
            if(myChart == null){
                myChart = echarts.init(this.$refs.main);
            }
            myChart.clear();
            var option = {
                title: {
                    text: this.title,
                    left: 'center'
                },
                legend: {
                    show: false
                },
                tooltip: {
                    trigger: 'axis'
                },
                dataset: {
                    source: []
                },
                xAxis: [
                    { type: 'category', gridIndex: 0 },
                    { type: 'category', gridIndex: 1 }
                ],
                yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
                grid: [{ bottom: '55%' }, { top: '55%' }],
                series: []
            };
            let series = [];
            for (let index = 0; index < this.source.length - 1; index++) {
                series.push({ type: 'line', seriesLayoutBy: 'row' });
            }
            for (let index = 0; index < this.source[0].length - 1; index++) {
                series.push({ type: 'bar', xAxisIndex: 1, yAxisIndex: 1 });
            }
            option.series = series;
            option.dataset.source = this.source;
            // console.log(this.source);
            myChart.setOption(option);
        }
    }
}
</script>