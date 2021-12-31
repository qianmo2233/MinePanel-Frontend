<template>
  <v-app-bar app color="grey darken-4" dark>
    <v-app-bar-title>MinePanel</v-app-bar-title>
    <v-spacer/>
    <v-btn-toggle tile group color="indigo" mandatory v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn to="/server"><v-icon left>mdi-server</v-icon>服务器</v-btn>
      <v-btn to="/setting"><v-icon left>mdi-cog</v-icon>设置</v-btn>
    </v-btn-toggle>
    <v-menu open-on-hover open-on-click bottom offset-y transition="slide-y-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on"><v-icon>mdi-plus</v-icon><v-icon right>mdi-menu-down</v-icon></v-btn>
      </template>
      <v-list dense>
        <v-list-item color="indigo" link to="/server/add">
          <v-list-item-icon>
            <v-icon>mdi-server-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>新建服务器</v-list-item-title>
        </v-list-item>
        <v-divider/>
        <v-list-item color="indigo" link>
          <v-list-item-icon>
            <v-icon>mdi-plus-network</v-icon>
          </v-list-item-icon>
          <v-list-item-title>新建群组网络</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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