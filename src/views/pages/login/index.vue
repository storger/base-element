<template>
    <div class="login-page">
        <div class="login-cover">
            <div class="cover"></div>
        </div>
        <div class="login-content">
            <div class="logo">
                <h1>Sgwl</h1>
            </div>
            <div class="login-box" :class="{'flipped':status}">
                <form class="login-form">
                    <h3 class="login-head">
                        <i class="fa fa-lg fa-fw fa-user"></i>登录</h3>
                    <div class="form-group">
                        <label class="control-label">用户名</label>
                        <input class="form-control" v-model="userName" type="text"  placeholder="userName" autofocus>
                    </div>
                    <div class="form-group">
                        <label class="control-label">密码</label>
                        <input class="form-control" v-model="passWord" type="password"  placeholder="Password">
                    </div>
                    <div class="form-group">
                        <div class="utility">
                            <el-checkbox v-model="checked">记住信息</el-checkbox>
                            <p class="semibold-text mb-2">
                                <a @click="status = !status">忘记密码 ?</a>
                            </p>
                        </div>
                    </div>
                    <div class="form-group btn-container">
                        <button class="btn btn-primary btn-block" @click.prevent="login">
                            登录</button>
                    </div>
                </form>
                <form class="forget-form">
                    <h3 class="login-head">
                        <i class="fa fa-lg fa-fw fa-lock"></i>忘记密码 ?</h3>
                    <div class="form-group">
                        <label class="control-label">邮箱</label>
                        <input class="form-control" type="text" placeholder="Email">
                    </div>
                    <div class="form-group btn-container">
                        <button class="btn btn-primary btn-block">
                            <i class="fa fa-unlock fa-lg fa-fw"></i>重置</button>
                    </div>
                    <div class="form-group mt-3">
                        <p class="semibold-text mb-0">
                            <a @click="status = !status">
                                <i class="fa fa-angle-left fa-fw"></i> 返回登录</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "admin",
      passWord: "admin",
      checked: false,
      status: false
    };
  },
  methods: {
    login() {
	  this.$get('login',{
		  username:this.userName
	  }).then(res => {
		  let data = res.data.data;
		  if(res.data.success){
			  localStorage.setItem('loginInfo',JSON.stringify(data));
				this.$store.commit('refreshPermission',data.menu);
				this.$router.push({name:'home'});
		  }else{
			  this.$message.error('登录失败，请重试');
		  }
	  });
    }
  }
};
</script>

<style lang="less" scoped>
.form {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.login-page {
  height: 100%;
  .login-cover {
    background-color: #e7e7e7;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    .cover {
      height: 50%;
      background-color: #009688;
    }
  }
}
.login-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 100vh;
  .logo {
    margin-bottom: 40px;
    font-family: "Niconne";
    color: #fff;
    h1 {
      font-size: 52px;
      font-weight: 400;
    }
  }
  .login-box {
    position: relative;
    min-width: 350px;
    min-height: 390px;
    background-color: #fff;
    -webkit-box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05),
      0px 29px 95px 0px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05),
      0px 29px 95px 0px rgba(0, 0, 0, 0.16);
    -webkit-perspective: 800px;
    perspective: 800px;
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    .login-form {
      .form;
    }
    .forget-form {
      .form;
      opacity: 0;
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
    }
    .login-head {
      font-size: 1.53125rem;
      margin-top: 0;
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      text-align: center;
    }
    .form-group {
      margin-bottom: 1rem;
      text-align: left;
      label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: #666;
        font-weight: 700;
      }
      .form-control {
        display: block;
        width: calc(100% - 1.5rem);
        padding: 0.375rem 0.75rem;
        font-size: 0.875rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 2px solid #ced4da;
        border-radius: 4px;
        -webkit-transition: border-color 0.15s ease-in-out,
          -webkit-box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out,
          -webkit-box-shadow 0.15s ease-in-out;
        -o-transition: border-color 0.15s ease-in-out,
          box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
          -webkit-box-shadow 0.15s ease-in-out;
        &:focus {
          color: #495057;
          background-color: #fff;
          border-color: #009688;
          outline: 0;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
      }
    }
  }
}
.login-content .login-box.flipped {
  min-height: 300px;
}
.login-content .login-box.flipped .login-form {
  opacity: 0;
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
}
.login-content .login-box.flipped .forget-form {
  opacity: 1;
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.utility {
  display: flex;
  justify-content: space-between;
}
.btn {
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 3px;
  -webkit-transition: background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out,
    -webkit-box-shadow 0.3s cubic-bezier(0.35, 0, 0.25, 1),
    -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    -webkit-box-shadow 0.3s cubic-bezier(0.35, 0, 0.25, 1),
    -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
  -o-transition: box-shadow 0.3s cubic-bezier(0.35, 0, 0.25, 1),
    transform 0.2s cubic-bezier(0.35, 0, 0.25, 1),
    background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  transition: box-shadow 0.3s cubic-bezier(0.35, 0, 0.25, 1),
    transform 0.2s cubic-bezier(0.35, 0, 0.25, 1),
    background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  transition: box-shadow 0.3s cubic-bezier(0.35, 0, 0.25, 1),
    transform 0.2s cubic-bezier(0.35, 0, 0.25, 1),
    background-color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    -webkit-box-shadow 0.3s cubic-bezier(0.35, 0, 0.25, 1),
    -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
.btn-block {
  display: block;
  width: 100%;
}
.btn-primary {
  color: #fff;
  background-color: #009688;
  border-color: #009688;
  &:hover {
    color: #fff;
    background-color: #007065;
    border-color: #00635a;
    text-decoration: none;
    -webkit-transform: translate3d(0, -1px, 0);
    transform: translate3d(0, -1px, 0);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }
}
</style>

