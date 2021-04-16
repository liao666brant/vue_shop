<template>
  <div class="home">
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>export default {
  methods: {
    logout () {
      // 先清空token，然后跳转至登录页
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style Lang="less" scoped>

</style>
