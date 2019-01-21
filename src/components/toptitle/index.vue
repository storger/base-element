<template>
    <div class="app-title">
        <div style="text-align:left">
            <h1>
                <i class="iconfont" :class="icon"></i> {{ title }}</h1>
            <p> {{ stitle }}</p>
        </div>
        <ul class="app-breadcrumb" v-if="crumbs==='true'? true:false">
            <li class="breadcrumb-item">
                <i class="iconfont icon-icon_home icon-lg"></i>
            </li>
            <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    props:{
        icon:String,
        title:String,
        stitle:String,
        crumbs:'',
    }
};
</script>

<style lang="less">
.app-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  background-color: #fff;
  margin: 0 -20px 20px;
  padding: 20px 30px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
  }
  p {
    margin-bottom: 0;
    // font-style: italic;
  }
  .app-breadcrumb {
    margin-bottom: 0;
    text-align: right;
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
    padding: 0;
    text-align: left;
    padding: 0;
    background-color: transparent;
    display: flex;
    flex-wrap: wrap;
  }
  .icon-lg {
    font-size: 1.33333333em;
    line-height: 0.75em;
    vertical-align: -15%;
  }
  .breadcrumb-item + .breadcrumb-item {
    padding-left: 0.5rem;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
}
</style>


