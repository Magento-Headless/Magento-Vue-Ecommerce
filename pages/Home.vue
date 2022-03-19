<template>
  <div class="home">
    <img
      alt="Vue logo"
      v-lazy="{ src: require('../assets/images/logo.png') }"
    />
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>
