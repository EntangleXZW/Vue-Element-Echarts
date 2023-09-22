<template>
  <el-container style="height: 600px;">
    <el-header style="background-color: #00ccff1a;font-size: 40px;">
      <template>
        <el-radio-group v-model="isCollapse" size="mini" fill="#00ccff1a">
          <el-radio-button :label="false" v-show="isCollapse == true"><i
              class="el-icon-d-arrow-right"></i></el-radio-button>
          <el-radio-button :label="true" v-show="isCollapse == false"><i class="el-icon-d-arrow-left"></i></el-radio-button>
        </el-radio-group>
      </template>
      Vue-Echarts Demo
    </el-header>
    <el-container>
      <!-- <el-aside> -->

      <el-menu router default-active="" class="el-menu-vertical-demo" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i><span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-data"></i><span slot="title">图表示例</span></template>
          <el-menu-item-group>
            <template slot="title">Bar</template>
            <el-menu-item index="/bardemo1">
              Bar-Demo1
            </el-menu-item>
            <el-menu-item index="/bardemo2">
              Bar-Demo2
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Line">
            <el-menu-item index="/linedemo1">Line-Demo1</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i><span slot="title">静态看板调试</span></template>
          <el-menu-item index="/boardtest1">echarts 组合</el-menu-item>
          <el-menu-item index="/boarddatav">echarts DataV 封装</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-menu"></i><span slot="title">子路由调试</span></template>
          <el-menu-item index="/crouterview1">导航栏切换子路由</el-menu-item>
          <!-- <el-menu-item index="/boarddatav">echarts DataV 封装</el-menu-item> -->
        </el-submenu>
      </el-menu>
      <!-- </el-aside> -->
      <el-container>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    }
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>