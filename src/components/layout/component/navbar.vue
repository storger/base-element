<template>
  <el-menu
    :default-active="nowIndex"
    :router="isroute"
    :collapse="isCollapse"
    @select="getPresentRoute"
    class="el-menu-vertical-demo"
    background-color="#222d32"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="border:none"
  >
    <div v-for="(value,index) in menu" :key="index">
      <el-menu-item v-if="!value.children" :index="value.path">
        <i :class="value.icon"></i>
        <span slot="title">{{ value.name }}</span>
      </el-menu-item>
      <el-submenu v-else :index="value.path">
        <template slot="title">
          <i :class="value.icon"></i>
          <span class="el-menu-text">{{ value.name }}</span>
        </template>
        <div v-for="(v,i) in value.children" :key="i">
            <el-menu-item v-if="!v.children" :index="v.path">{{ v.name }}</el-menu-item>
            <el-submenu v-else :index="v.path">
              <template slot="title">{{ v.name }}</template>
              <el-menu-item
                v-for="(item,list) in v.children"
                :key="list"
                :index="item.path"
              >{{ item.name }}</el-menu-item>
            </el-submenu>
        </div>
      </el-submenu>
    </div>
  </el-menu>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean
  },
  data() {
    return {
      isroute: true,
      nowIndex: "admin/home"
    };
  },
  computed: {
    menu: function() {
      return this.$store.state.permission;
    }
  },
  methods: {
    getPresentRoute(index, indexPath) {
      console.log(index);
      this.nowIndex = index;
    }
  },
  watch: {
    $route: {
      handler: function() {
        const nowPath = this.$route.path;
        this.nowIndex = nowPath;
      },
      deep: true
    }
  },
  created() {
    this.nowIndex = this.$route.path;
  }
};
</script>


<style lang="less">
.el-menu {
  width: 230px;
}
.el-menu.el-menu--collapse {
  width: 64px;
  .el-menu-text {
    display: none;
  }
}
.el-menu-item {
  text-align: left;
}
.el-submenu {
  text-align: left;
}
</style>

