<template>
    <div class="lock-page">
        <div>
            <div class="lock-view" :class="{'animate':status}" @click="status = true">
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg" alt="admin">
                <div class="cover">
                    <i class="iconfont icon-jiesuo"></i>
                    <p>开锁</p>
                </div>
            </div>
            <div class="lock-un" :class="{'show':status}">
                <input type="password" placeholder="密码" v-model="passWord">
                <button @click.prevent="unlock">
                    <i class="iconfont icon-yuechi" style="color:#FFF"></i>
                </button>
            </div>
            <p class="lock-text">已锁定</p>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      passWord:'admin',
    };
  },
  methods: {
      unlock(){
          if(this.passWord === 'admin'){
              const preRoute = window.localStorage.getItem('preRoute')
              this.$router.push({name:preRoute});
          }else{
              this.$message.error('密码输入错误哦！');
          }
      }
  }
};
</script>

<style lang="less">
.lock-page {
  height: 100%;
  position: relative;
  background-color: rgb(102, 122, 166);
  overflow: hidden;
  > div {
    animation: fadeIn 0.5s linear;
  }
  .lock-view {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(102, 122, 166);
    transition: all 500ms ease;
    cursor: pointer;
    img {
      width: 90%;
      height: 90%;
      margin-top: 5%;
      border: 2px solid #fff;
      border-radius: 50%;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 3px;
      width: 90%;
      height: 90%;
      margin-top: 5%;
      border: 2px solid #fff;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.6);
      display: none;
      i {
		  display: inline-block;
        color: #fff;
        margin-top: 15%;
      }
      p {
        color: #fff;
        margin-top: 10%;
      }
    }
    &:hover {
      .cover {
        display: block;
      }
    }
  }
  .lock-view.animate {
    transform: translate(-200%, -50%);
  }
  .lock-un {
    position: absolute;
    top: 35%;
    left: 50%;
    height: 45px;
    width: 300px;
    background-color: greenyellow;
    border: 2px solid #e2ddde;
    transform: translate(-40%, -50%);
    display: -webkit-flex;
    justify-content: space-between;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    opacity: 0;
    transition: opacity .5s linear .5s;
    input {
      height: 44px;
      width: 210px;
      font-size: 18px;
      padding-left: 30px;
    }
    button {
      height: 44px;
      width: 60px;
      border-left: 2px solid #e2ddde;
      background: #2d8cf0;
      border-top-right-radius: 45px;
      border-bottom-right-radius: 45px;
      cursor: pointer;
      &:hover {
        background: #5cadff;
        box-shadow: 0 0 10px 3px rgba(255, 255, 255, 0.2);
      }
    }
  }
  .lock-un.show {
    opacity: 1;
  }
  .lock-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 20px;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
