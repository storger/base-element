<template>
  <header>
    <a href="javascript:;" class="logo" :class="{'collapse-logo':logoCollapse}">
      <transition name="el-fade-in-linear">
        <span v-if="logoCollapse">Sgwl</span>
      </transition>
      <transition name="el-zoom-in-center">
        <img v-if="!logoCollapse" class="logo-img" src="../../../assets/sgwllogo.png" alt="sgwl">
      </transition>
    </a>
    <span class="header-btn" @click="changeMenu">
      <i class="iconfont icon-caidan" v-if="!logoCollapse"></i>
      <i class="iconfont icon-msnui-menu" v-if="logoCollapse"></i>
    </span>
    <div class="right">
      <!-- 设置 -->
      <el-dropdown trigger="click">
        <span class="header-btn el-dropdown-link">
          <i class="el-icon-setting"></i>
        </span>
        <el-dropdown-menu slot="dropdown" style="padding:10px 20px;">
          <el-switch
            v-model="showTabBar"
            @change="changeTabBar"
            active-text="开启TabBar"
            active-color="#009688"
            inactive-text="关闭TabBar"
          ></el-switch>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- 锁屏 -->
      <span class="header-btn el-dropdown-link" @click="showLock">
        <i class="el-icon iconfont icon-bofangqi-suoping" style="font-size:14px"></i>
      </span>
      <!-- 全屏 -->
      <span class="header-btn el-dropdown-link" @click="openFullWindow">
        <i class="el-icon iconfont icon-fangda" style="font-size:14px"></i>
      </span>
      <!-- 消息 -->
      <el-popover placement="bottom" title="消息盒子" width="300" trigger="click">
        <el-alert title="成功提示的文案" type="success" show-icon style="margin-bottom:10px"></el-alert>
        <el-alert title="消息提示的文案" type="info" show-icon style="margin-bottom:10px"></el-alert>
        <el-alert title="警告提示的文案" type="warning" show-icon style="margin-bottom:10px"></el-alert>
        <el-alert title="错误提示的文案" type="error" show-icon style="margin-bottom:10px"></el-alert>
        <el-col style="text-align:center">
          <el-button type="text">查看更多</el-button>
        </el-col>
        <span slot="reference" class="header-btn header-message">
          <i class="el-icon-message"></i>
          <span class="message-count">3</span>
        </span>
      </el-popover>
      <!-- 个人信息 -->
      <el-dropdown>
        <span class="header-btn header-admin el-dropdown-link">
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
            alt
          >
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="layout">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logoCollapse: false,
      showTabBar: false
    };
  },
  methods: {
    layout() {
      this.$confirm("是否退出系统?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.localStorage.clear();
          this.$store.commit("refreshPermission", []);
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    changeMenu() {
      this.$emit("changeCollapse");
      this.logoCollapse = !this.logoCollapse;
    },
    changeTabBar() {
      this.$emit("showTabBar", this.showTabBar);
      window.localStorage.setItem("showTab", this.showTabBar);
    },
    openFullWindow() {
      // 判断是不是全屏状态
      if (
        document.body.scrollHeight == window.screen.height &&
        document.body.scrollWidth == window.screen.width
      ) {
        var efs =
          document.exitFullscreen ||
          document.webkitExitFullscreen ||
          document.mozCancelFullScreen ||
          document.msExitFullscreen;
        if (efs) {
          efs.call(document);
        } else if (window.ActiveXObject) {
          var ws = new ActiveXObject("WScript.Shell");
          ws && ws.SendKeys("{F11}");
        }
      } else {
        var el =
          window instanceof HTMLElement ? window : document.documentElement;
        var rfs =
          el.requestFullscreen ||
          el.webkitRequestFullscreen ||
          el.mozRequestFullScreen ||
          el.msRequestFullscreen;
        if (rfs) {
          rfs.call(el);
        } else if (window.ActiveXObject) {
          var ws = new ActiveXObject("WScript.Shell");
          ws && ws.SendKeys("{F11}");
        }
      }
    },
    showLock() {
      const body = document.getElementsByTagName("body")[0];
      const div = document.createElement("div");
      div.id = "lock";
      div.innerHTML =
        '<div class="lock-top"></div><div class="lock-bottom"></div>';
      body.appendChild(div);
      setTimeout(() => {
        window.localStorage.setItem("preRoute", this.$route.name);
        this.$router.push("/lock");
        div.remove();
      }, 1500);
    }
  },
  created() {
    const showTab = window.localStorage.getItem("showTab");
    this.showTabBar = JSON.parse(showTab);
  },
  mounted() {
    const self = this;
    window.addEventListener("resize", function(e) {
      // 根据浏览器宽度 收缩菜单栏和logo
      if (window.innerWidth < 992) {
        self.$emit("onReSize", true);
        self.logoCollapse = true;
      } else {
        self.$emit("onReSize", false);
        self.logoCollapse = false;
      }
    });
    const e = document.createEvent("MouseEvents"); // 初始化自动触发一次了resize事件
    e.initEvent("resize", true, true);
    document.dispatchEvent(e);
  }
};
</script>

<style lang="less" scoped>
header {
  display: flex;
}
.logo {
  height: 100%;
  line-height: 60px;
  width: 230px;
  text-decoration: none;
  color: #fff;
  background: #222d32;
  font-size: 26px;
  text-align: center;
  font-family: "Niconne";
  transition: all 350ms ease;
  .logo-img {
    width: 180px;
    height: 50px;
    margin-top: 5px;
  }
  &.collapse-logo {
    width: 64px;
  }
}
.header-btn {
  display: inline-block;
  height: 100%;
  width: 50px;
  line-height: 60px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #222d32;
  }
  &.header-admin {
    width: auto;
    padding: 0 10px;
    img {
      vertical-align: middle;
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
}
.header-message {
  position: relative;
  > .message-count {
    position: absolute;
    width: 15px;
    height: 15px;
    line-height: 15px;
    background-color: orange;
    top: 10px;
    right: 7px;
    border-radius: 50%;
    font-size: 12px;
  }
}
.right {
  position: absolute;
  right: 0;
}
</style>


