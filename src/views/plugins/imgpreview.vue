<template>
  <waterfall
    :line="line"
    :line-gap="200"
    :min-line-gap="180"
    :max-line-gap="220"
    :watch="items"
    @reflowed="reflowed"
    ref="waterfall"
	id="waterfall"
	@click.native="shuffle"
  >
    <waterfall-slot
      v-for="(item,index) in items"
      :width="item.width"
      :height="item.height"
      :order="index"
      :key="item.index"
      move-class="item-move"
    >
      <div class="item" :style="item.style">
		  <img :src="item.src" large="" preview="0" :preview-text="item.src">
	  </div>
      <!-- <img :src="item.src" :large="item.src" preview="0" preview-text="描述文字"> -->
    </waterfall-slot>
  </waterfall>
</template>

<script>
import Waterfall from "vue-waterfall/lib/waterfall";
import WaterfallSlot from "vue-waterfall/lib/waterfall-slot";
var ItemFactory = (function() {
  var lastIndex = 0;

  function generateRandomItems(count) {
    var items = [],
      i;
    for (i = 0; i < count; i++) {
      items[i] = {
        index: lastIndex++,
        style: {
		  background: getRandomColor(),
		  padding:'10px'
        },
        width: 100 + ~~(Math.random() * 50),
		height: 100 + ~~(Math.random() * 50),
		src:`https://zhouzhilei.oss-cn-shenzhen.aliyuncs.com/img/${Math.ceil(Math.random()*10)}.jpg`
      };
    }
    return items;
  }

  function getRandomColor() {
    var colors = [
      "rgba(21,174,103,.5)",
      "rgba(245,163,59,.5)",
      "rgba(255,230,135,.5)",
      "rgba(194,217,78,.5)",
      "rgba(195,123,177,.5)",
      "rgba(125,205,244,.5)"
    ];
    return colors[~~(Math.random() * colors.length)];
  }

  return {
    get: generateRandomItems
  };
})();
export default {
  components: {
    Waterfall,
    WaterfallSlot
  },
  data() {
    return {
      line: "h",
	  items: ItemFactory.get(35),
    };
  },
  methods: {
    reflowed() {
      this.isBusy = false;
    },
    addItems() {
      if (!this.isBusy && this.items.length < 500) {
        this.isBusy = true;
        this.items.push.apply(this.items, ItemFactory.get(15));
      }
    },
    shuffle() {
      this.items.sort(function() {
        return Math.random() - 0.5;
      });
    }
  },
  mounted() {
	  let waterfall = document.getElementById('waterfall');
	  let baseTop = 100;
	  waterfall.onscroll =  (e) => {
		  let top = e.target.scrollTop
		  if(top>baseTop){
			 this.addItems();
			baseTop += 300;
		  }
	  }
  },
};
</script>

<style scoped>
img[preview] {
	width: 100%;
	height: 100%;
  cursor: zoom-in;
}
.item {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  font-size: 1.2em;
  color: rgb(0, 158, 107);
}
.item:after {
  content: attr(index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.wf-transition {
  transition: opacity 0.3s ease;
  -webkit-transition: opacity 0.3s ease;
}
.wf-enter {
  opacity: 0;
}
.item-move {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  -webkit-transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>

