# VueBSToast

Toast for Vue.js with Bootstrap Theme

# Install

Available through npm as ```vue-bs-toast```

```
npm install vue-bs-toast --save
```

# Usage

```vue
<template>
  // IN THE ROOT COMPONENT
  <vue-bs-toast ref="toast"></vue-bs-toast>
  ...
</template>
<script>
import VueBsToast from 'vue-bs-toast'

export default {
  components: {
    VueBsToast
  },
  created () {
    this.$refs.toast.d({
      message: 'Message for Toast',
      duration: 1000, // 0: user close toast, DEFAULT 0
      position: 'topLeft' // DEFAULT "bottomLeft"
    })
  }
}
</script>
```

![Example](https://github.com/LeandroSe/vue-bs-toast/raw/master/example.png)

# Options

## message
`string`

Message for Toast content.

## duration
`integer`

Duration in ms to close automatically.

## position
`string`

default: "bottomLeft"

Position of the toast on the screen.

Usage values:
- topLeft
- topCenter
- topRight
- bottomLeft
- bottomCenter
- bottomRight

## type
`string`

Theme Type.

Usage values:
- primary
- danger
- info
- warning
- default
- success

# API

## add

Add new toast.

`this.$refs.toast.add(option)`

## d

Add new toast using the Danger type.

`this.$refs.toast.d(option)`

## p

Add new toast using the Primary type.

`this.$refs.toast.p(option)`

## w

Add new toast using the Warning type.

`this.$refs.toast.w(option)`

## i

Add new toast using the Info type.

`this.$refs.toast.i(option)`

## s

Add new toast using the Success type.

`this.$refs.toast.s(option)`

# License

MIT
