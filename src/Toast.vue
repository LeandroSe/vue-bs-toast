<template>
  <div v-bind:class="item.css">
    {{item.message}}
    <button class="close" v-show="item.duration == 0" @click="close">&times;</button>
  </div>
</template>

<script>
export default {
  created () {
    if (this.item.duration > 0) {
      this.timeout = setTimeout(function () {
        this.close()
      }.bind(this), this.item.duration);
    }
  },
  data () {
    return {
      timeout: false
    }
  },
  props: {
    item: Object
  },
  methods: {
    close (position, item) {
      clearTimeout(this.timeout)
      this.$emit('close', this.item)
      this.$destroy()
    }
  }
}
</script>
