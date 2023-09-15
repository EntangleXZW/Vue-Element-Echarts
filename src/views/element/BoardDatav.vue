<template>
    <div id="boarddatav" style="background: #222;">
        <!-- 全屏容器   会强制覆盖全屏包括导航栏 -->
        <!-- <dv-full-screen-container>content</dv-full-screen-container> -->
        <dv-loading v-if="true">Loading...</dv-loading>
        <div style="height:400px;width:33%">
            <dv-border-box-8 :color="['blue', 'green']">
                <bar-demo-2 :height="'400px'" :mode="false"></bar-demo-2>
            </dv-border-box-8>
        </div>
    </div>
</template>

<script>
import BarDemo2 from '../echartsDemo/BarDemo2.vue'
export default {
  components: { BarDemo2 },

}
</script>

<style></style>