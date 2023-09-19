<template>
    <el-container style="height: 600px;">
      <el-header style="background-color: rgba(0, 204, 255, 0.103);font-size: 40px;">Vue-Echarts Demo</el-header>
      <el-container>
        <el-aside width="250px" style="border-right: 1px solid #02333f1a;">
          <el-menu router >
            <el-menu-item index="/">
                <i class="el-icon-s-home"></i>首页
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-s-data"></i>图表示例</template>
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
              <template slot="title"><i class="el-icon-menu"></i>静态看板调试</template>
              <el-menu-item index="/boardtest1">echarts 组合</el-menu-item>
              <el-menu-item index="/boarddatav">echarts DataV 封装</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-menu"></i>子路由调试</template>
              <el-menu-item index="/crouterview1">导航栏切换子路由</el-menu-item>
              <!-- <el-menu-item index="/boarddatav">echarts DataV 封装</el-menu-item> -->
            </el-submenu>
          </el-menu>
        </el-aside>
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
    
}
</script>
<style>

</style>