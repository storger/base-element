<template>
    <div class="container">
        <Lay-head @changeCollapse="changeCollapse" @onReSize="resize" @showTabBar="showTabBar"></Lay-head>
        <main>
            <section class="menu-bar">
                <Nav-bar :isCollapse="isCollapse"></Nav-bar>
            </section>
            <section class="app-content">
              <Tab-bar v-if="isShow"></Tab-bar>
              <keep-alive :max="10">
                <router-view class="content-view" :style="{'height':isShow?'calc(100% - 40px)':'100%'}"></router-view>
              </keep-alive>
            </section>
        </main>
    </div>
</template>

<script>
import LayHead from "./component/layhead";
import NavBar from "./component/navbar";
import TabBar from './component/tabbar'
export default {
  data() {
    return {
      isCollapse: false,
      isShow:JSON.parse(window.localStorage.getItem('showTab')) ,
    };
  },
  components: {
    LayHead,
    NavBar,
    TabBar
  },
  methods: {
      changeCollapse(){
          this.isCollapse = !this.isCollapse;
      },
      showTabBar(flag){
          this.isShow = flag;
      },
      resize(status){
        this.isCollapse = status;
      }
  }
};
</script>

<style lang="less">
.container {
  height: 100%;
  > header {
    height: 60px;
    width: 100%;
    background-color: rgb(27,36,40);
  }
  > main {
    min-height: calc(100vh - 60px);
    display: flex;
    > .menu-bar {
      background-color: #222d32;
      border-right: 1px solid #e6e6e6;
    }
    > .app-content {
      width: 100%;
      background-color: #f5f5f5;
      height: calc(100vh - 60px);
      overflow: hidden;
      >.content-view {
        padding:0 20px;
        overflow:auto !important;
      }
    }
  }
}
</style>


