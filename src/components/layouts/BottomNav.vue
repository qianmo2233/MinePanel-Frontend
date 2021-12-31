<template>
  <v-bottom-navigation dark shift app>
    <v-btn to="/server">
      <span>服务器</span>
      <v-icon>mdi-server</v-icon>
    </v-btn>
    <v-btn to="/setting">
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