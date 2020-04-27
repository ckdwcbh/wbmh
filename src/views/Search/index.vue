<template>
  <div class="page">
      <h1>搜索页面</h1>
  </div>
</template>

<script>
import { getHotSeatch } from '@/api/cartoon'
export default {
  name: 'seach',

  created () {
    getHotSeatch().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" sscoped>

</style>
