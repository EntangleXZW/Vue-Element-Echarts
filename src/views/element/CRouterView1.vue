<template>
    <div>
        <el-menu router :default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="/crouterview1/bardemo11">Demo1</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/crouterview1/bardemo22" >Demo2</el-menu-item>
            <el-menu-item index=""><a href="https://www.ele.me" target="_blank">超链接</a></el-menu-item>
        </el-menu>
        <div>
            <router-view />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style></style>