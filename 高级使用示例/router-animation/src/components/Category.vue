<template>
  <div class="category">
    <h1>{{ msg }}</h1>
    <router-link :to="{name: 'details'}">图书详情</router-link>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      msg: '分类'
    }
  }
}
</script>

<style scoped>
</style>
