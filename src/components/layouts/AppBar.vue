<template>
  <v-app-bar app color="grey darken-4" dark>
    <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown"/>
    <v-app-bar-title>MinePanel</v-app-bar-title>
    <v-spacer/>
    <v-btn-toggle tile group mandatory v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn to="/"><v-icon left>mdi-home</v-icon>主页</v-btn>
      <v-btn to="/server"><v-icon left>mdi-server</v-icon>服务器</v-btn>
      <v-btn to="/setting"><v-icon left>mdi-cog</v-icon>设置</v-btn>
    </v-btn-toggle>
    <v-menu open-on-hover open-on-click bottom offset-y transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">qianmo<v-icon right>mdi-menu-down</v-icon></v-btn>
      </template>
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>个人信息</v-list-item-title>
        </v-list-item>
        <v-divider/>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="red">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="red--text">退出登录</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>