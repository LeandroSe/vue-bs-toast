<template>
  <div>
    <div class="top-left toasts">
      <transition-group name="list" tag="div">
        <toast :item="item" v-for="item in items.topLeft" v-bind:key="item" @close="close"></toast>
      </transition-group>
    </div>
    <div class="top-center toasts">
      <transition-group name="list" tag="div">
        <toast :item="item" v-for="item in items.topCenter" v-bind:key="item" @close="close"></toast>
      </transition-group>
    </div>
    <div class="top-right toasts">
      <transition-group name="list" tag="div">
        <toast :item="item" v-for="item in items.topRight" v-bind:key="item" @close="close"></toast>
      </transition-group>
    </div>
    <div class="bottom-left toasts">
      <transition-group name="list" tag="div">
        <toast :item="item" v-for="item in items.bottomLeft" v-bind:key="item" @close="close"></toast>
      </transition-group>
    </div>
    <div class="bottom-center toasts">
      <transition-group name="list" tag="div">
        <toast :item="item" v-for="item in items.bottomCenter" v-bind:key="item" @close="close"></toast>
      </transition-group>
    </div>
    <div class="bottom-right toasts">
      <transition-group name="list" tag="div">
        <toast :item="item" v-for="item in items.bottomRight" v-bind:key="item" @close="close"></toast>
      </transition-group>
    </div>
  </div>
</template>

<script>
import Toast from './Toast'

export default {
  data () {
    return {
      items: {
        topLeft: [],
        topCenter: [],
        topRight: [],
        bottomLeft: [],
        bottomCenter: [],
        bottomRight: []
      }
    }
  },
  components: {
    Toast
  },
  methods: {
    add (data) {
      let type = data.type || 'default'
      let typeToast = 'toast-' + type
      let position = data.position || 'bottomLeft'
      let duration = data.duration || 0
      let item = {
        css: { 'toast': true },
        message: data.message,
        duration,
        position
      }
      item.css[typeToast] = true
      this.items[position].unshift(item)
    },
    close (item) {
      let key = this.items[item.position].indexOf(item)
      if (key >= 0) {
        this.items[item.position].splice(key, 1)
      }
    },
    closeAll () {
      for (let items in this.items) {
        while (this.items[items].length > 0) {
          this.items[items].pop()
        }
      }
    },
    d (data) {
      data.type = 'danger'
      this.add(data)
    },
    w (data) {
      data.type = 'warning'
      this.add(data)
    },
    p (data) {
      data.type = 'primary'
      this.add(data)
    },
    i (data) {
      data.type = 'info'
      this.add(data)
    },
    s (data) {
      data.type = 'success'
      this.add(data)
    }
  }
}
</script>
<style scoped lang="sass">
// BOOTSTRAP 3.3.7
$brand-primary:         darken(#428bca, 6.5%) !default; // #337ab7
$brand-success:         #5cb85c !default;
$brand-info:            #5bc0de !default;
$brand-warning:         #f0ad4e !default;
$brand-danger:          #d9534f !default;
$screen-sm:                  768px !default;
$screen-sm-min:              $screen-sm !default;

.toasts {
  width: 70%;
  overflow: hidden;
  position: absolute;
  @media (min-width: $screen-sm-min) {
    width: 40%;
  }
  z-index: 999999;
}

.top-left, .top-center, .top-right {
  top: 0;
  margin-top: 10px;
}
.bottom-left, .bottom-center, .bottom-right {
  bottom: 0;
  margin-bottom: 10px;
}
.top-left, .bottom-left {
  left: 0;
  margin-left: 15px;
}
.top-right, .bottom-right {
  right: 0;
  margin-right: 15px;
}
.top-center {
  top: 15px;
}
.bottom-center {
  bottom: 15px;
}
.top-center, .bottom-center {
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0%);
}

.toast {
  padding: 15px 15px;
  margin-bottom: 5px;
  width: 100%;
  text-align: center;
}

@mixin toast($color, $textColor) {
  border-radius: 6px;
  color: $textColor;
  background-color: $color;
}
.toast-default {
  @include toast(#fff, #000);
  border: 1px solid #ccc;
}
.toast-primary { @include toast($brand-primary, #fff); }
.toast-info { @include toast($brand-info, #fff); }
.toast-success { @include toast($brand-success, #fff); }
.toast-warning { @include toast($brand-warning, #fff); }
.toast-danger { @include toast($brand-danger, #fff); }


.list-enter-active, .list-leave-active {
  transition: all .5s;
}
.list-enter, .list-leave-active {
  opacity: 0;
}

</style>
