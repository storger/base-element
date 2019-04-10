<template>
    <div class="tab-bar">
        <!-- <router-link to="/home" class="bar-item">
            首页
            <span class="item-close-btn"><i class="el-icon-close"></i></span>
        </router-link> -->
        <router-link class="bar-item" v-for="(value,index) in nav" :key="index" :to=" value.path ">
            {{ value.title }}
            <span class="item-close-btn" @click.prevent.stop="closeSelectedTag(index)" v-if="index"><i class="el-icon-close"></i></span>
        </router-link>
    </div>
</template>


<script>
export default {
    data(){
        return {
            nav:[
                {
                    path:'/page/home',
                    title:'首页'
                }
            ]
        }
    },
    watch:{
        "$route":{
            handler:function(){
                const nowPath = this.$route.path;
                const nowTitle = this.$route.meta.title;
                let index = true;
                this.nav.forEach(function(v,i){
                    if(v.path === nowPath){
                        index = false;
                        return;
                    }
                });
                if(index) this.nav.push({path:nowPath,title:nowTitle})      
            },
            deep:true
        }
    },
    methods: {
      closeSelectedTag(i){
        let nav = this.nav;
        let thisPath = nav[i].path;
        nav.splice(i,1);
        if( i === 0) {
        this.$router.push('/page/home');
        }
        if(thisPath == this.$route.path){
          this.$router.push(nav[(nav.length-1)].path);
        }
      }
    },
    created(){
        const nowPath = this.$route.path;
        const nowTitle = this.$route.meta.title;
        if(nowPath !== this.nav[0].path)
        this.nav.push({path:nowPath,title:nowTitle})
    }
};
</script>


<style lang="less">
.tab-bar {
  width: 100%;
  height: 36px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
  .bar-item {
    height: 20px;
    line-height: 20px;
    padding: 2px 5px;
    margin-top: 5px;
    margin-left: 10px;
    border: 1px solid #ccc;
    border-radius: 2px;
    font-size: 12px;
    position: relative;
    cursor: pointer;
    &:hover {
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    }
    .item-close-btn {
        margin-left: 5px;
        &:hover{
            color:red;
        }
    }
    &.router-link-active {
      background:  #222d32;
      border:1px solid #222d32;;
      color: #fff;
      padding: 2px 5px 2px 20px;
      &::before {
        content:"";
        position: absolute;
        left: 5px;
        top: 8px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
    }
    }
    
  }
}
</style>
