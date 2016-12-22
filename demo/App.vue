<template>
  <div>
    <vue-bs-toast ref="toast"></vue-bs-toast>
    <div class="container">
      <div class="jumbotron">
        <div class="container">
          <h1>Toast for Vue.js with Bootstrap Theme</h1>

          <div class="form-inline">
            <div class="form-group">
              <label>Type:</label>
              <select class="form-control" v-model="type">
                <option value="default">default</option>
                <option value="primary">primary</option>
                <option value="success">success</option>
                <option value="info">info</option>
                <option value="warning">warning</option>
                <option value="danger">danger</option>
              </select>
            </div>
            <div class="form-group">
              <label>Position:</label>
              <select class="form-control" v-model="position">
                <option value="topLeft">topLeft</option>
                <option value="topCenter">topCenter</option>
                <option value="topRight">topRight</option>
                <option value="bottomLeft">bottomLeft</option>
                <option value="bottomCenter">bottomCenter</option>
                <option value="bottomRight">bottomRight</option>
              </select>
            </div>
          </div>
          <div class="form-inline">
            <div class="form-group">
              <label>Duration:</label>
              <select class="form-control" v-model="duration">
                <option value="0">0</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
                <option value="3000">3000</option>
                <option value="4000">4000</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Message:</label>
            <input type="text" class="form-control" v-model="message" />
          </div>
          <button class="btn btn-primary" @click="launch">Launch</button>
          <button class="btn btn-warning" @click="closeAll">Close All</button>
          <button class="btn btn-info" @click="test">Launch Test</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBsToast from '../src/'
require('bootstrap-loader')

export default {
  components: {
    VueBsToast
  },
  data () {
    return {
      type: 'success',
      position: 'bottomLeft',
      message: 'Message for Toast',
      duration: 0
    }
  },
  methods: {
    launch () {
      this.$refs.toast.add({
        type: this.type,
        position: this.position,
        message: this.message,
        duration: this.duration
      })
    },
    closeAll () {
      this.$refs.toast.closeAll()
    },
    test () {
      this.testLaunchAllTypes(0)
      setTimeout(function () {
        this.$refs.toast.closeAll()

        let position = ['topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight']
        let index = 0
        let clearInterval = setInterval(function () {
          this.testLaunchAllTypes(1000, position[index]);
          if (++index == 6) {
            window.clearInterval(clearInterval)
          }
        }.bind(this), 2000);

      }.bind(this), 2000);
    },
    testLaunchAllTypes (duration, position) {
      this.$refs.toast.add({
        message: 'Default',
        type: "default",
        duration,
        position
      })
      this.$refs.toast.d({
        message: 'Danger',
        duration,
        position
      })
      this.$refs.toast.i({
        message: 'Info',
        duration,
        position
      })
      this.$refs.toast.w({
        message: 'Warning',
        duration,
        position
      })
      this.$refs.toast.s({
        message: 'Success',
        duration,
        position
      })
      this.$refs.toast.p({
        message: 'Primary',
        duration,
        position
      })
    }
  }
}
</script>