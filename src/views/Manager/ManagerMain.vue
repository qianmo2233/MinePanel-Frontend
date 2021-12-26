<template>
  <div>
    <v-row>
      <v-col cols="12" lg="2" md="4" sm="12" v-if="$vuetify.breakpoint.mdAndUp">
        <v-card elevation="6">
          <v-list nav dense>
            <v-subheader>主要<v-divider inset/></v-subheader>
            <v-list-item link to="/manager/dashboard">
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title>仪表盘</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/console">
              <v-list-item-icon>
                <v-icon>mdi-console</v-icon>
              </v-list-item-icon>
              <v-list-item-title>控制台</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/stats">
              <v-list-item-icon>
                <v-icon>mdi-chart-box</v-icon>
              </v-list-item-icon>
              <v-list-item-title>统计</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/setup">
              <v-list-item-icon>
                <v-icon>mdi-swap-horizontal</v-icon>
              </v-list-item-icon>
              <v-list-item-title>更换预设</v-list-item-title>
            </v-list-item>
            <v-subheader>Minecraft<v-divider inset/></v-subheader>
            <v-list-item link  to="/manager/player">
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>玩家</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/world">
              <v-list-item-icon>
                <v-icon>mdi-earth</v-icon>
              </v-list-item-icon>
              <v-list-item-title>世界</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/config">
              <v-list-item-icon>
                <v-icon>mdi-file-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>配置文件</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/plugin">
              <v-list-item-icon>
                <v-icon>mdi-puzzle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>插件&模组</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/group">
              <v-list-item-icon>
                <v-icon>mdi-multicast</v-icon>
              </v-list-item-icon>
              <v-list-item-title>群组网络设置</v-list-item-title>
            </v-list-item>
            <v-subheader>文件<v-divider inset/></v-subheader>
            <v-list-item link  to="/manager/file">
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>在线文件管理</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/database">
              <v-list-item-icon>
                <v-icon>mdi-database</v-icon>
              </v-list-item-icon>
              <v-list-item-title>数据库</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/backup">
              <v-list-item-icon>
                <v-icon>mdi-backup-restore</v-icon>
              </v-list-item-icon>
              <v-list-item-title>备份&恢复</v-list-item-title>
            </v-list-item>
            <v-subheader>高级<v-divider inset/></v-subheader>
            <v-list-item link  to="/manager/schedule">
              <v-list-item-icon>
                <v-icon>mdi-clock-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>定时任务</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/manager/container">
              <v-list-item-icon>
                <v-icon>mdi-docker</v-icon>
              </v-list-item-icon>
              <v-list-item-title>虚拟化容器</v-list-item-title>
            </v-list-item>
            <v-subheader>操作<v-divider inset/></v-subheader>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-pause</v-icon>
              </v-list-item-icon>
              <v-list-item-title>暂停服务器</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-delete</v-icon>
              </v-list-item-icon>
              <v-list-item-title>删除服务器</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" lg="10" md="8" sm="12">
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ManagerMain"
}
</script>

<style scoped>

</style>