<template>
    <div class="widget-small">
        <i class="iconfont" :class="icon" :style="{'backgroundColor':bcolor}"></i>
        <div class="info">
            <h4>Users</h4>
            <p>
                <b>5</b>
            </p>
        </div>
    </div>
</template>


<script>
export default {
  props: ["icon","bcolor"]
};
</script>

<style lang="less">
.widget-small {
  background-color: #fff;
  color: #2a2a2a;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 4px;
  margin-bottom: 30px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-color: #eee;
  }
  .iconfont {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 45px;
    height: 40px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.2);
    color: #fff;
    border-radius: 4px 0 0 4px;
    font-size: 2.5rem;
  }
  .info {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 20px;
    -ms-flex-item-align: center;
    align-self: center;
    text-align: left;
    h4 {
      text-transform: uppercase;
      margin: 0;
      margin-bottom: 5px;
      font-weight: 400;
      font-size: 1.1rem;
    }
    p {
      margin: 0;
      font-size: 16px;
    }
  }
}
</style>


