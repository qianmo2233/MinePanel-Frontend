<template>
  <v-bottom-navigation dark shift>
    <v-btn to="/">
      <span>主页</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="/server">
      <span>服务器</span>
      <v-icon>mdi-server</v-icon>
    </v-btn>
    <v-btn to="settings">
      <span>设置</span>
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav"
}
</script>

<style scoped>

</style>