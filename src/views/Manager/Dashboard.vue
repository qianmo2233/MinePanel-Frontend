<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-toolbar elevation="6" class="overflow-auto rounded-pill">
          <v-toolbar-title>
            <v-icon left>mdi-minecraft</v-icon>
            <span class="mt-1">Pbb48GPjr</span>
            <v-chip label dark color="green" class="ml-4"><v-icon left>mdi-play</v-icon>运行中</v-chip>
          </v-toolbar-title>
          <v-spacer v-if="$vuetify.breakpoint.mdAndUp"/>
          <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn text><v-icon left>mdi-play</v-icon>启动</v-btn>
            <v-btn text><v-icon left>mdi-pause</v-icon>停止</v-btn>
            <v-btn text><v-icon left>mdi-reload</v-icon>重启</v-btn>
            <v-btn text><v-icon left>mdi-sync</v-icon>重载</v-btn>
            <v-btn text><v-icon left>mdi-stop</v-icon>强制停止</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="12">
        <v-card elevation="6" class="rounded-pill">
          <v-card-text class="text-center">
            <v-btn icon><v-icon>mdi-play</v-icon></v-btn>
            <v-btn icon class="ml-3"><v-icon>mdi-pause</v-icon></v-btn>
            <v-btn icon class="ml-3"><v-icon>mdi-reload</v-icon></v-btn>
            <v-btn icon class="ml-3"><v-icon>mdi-sync</v-icon></v-btn>
            <v-btn icon class="ml-3"><v-icon>mdi-stop</v-icon></v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-card elevation="6" class="rounded-xl">
          <v-card-title>基本信息</v-card-title>
          <v-card-text>
            <v-list two-line>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-network</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>s53-mc.play.fun:52873</v-list-item-title>
                  <v-list-item-subtitle>连接地址</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Minecraft-Asia-53(China Mainland)</v-list-item-title>
                  <v-list-item-subtitle>服务区</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cpu-64-bit</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>4</v-list-item-title>
                  <v-list-item-subtitle>CPU个数</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-memory</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>8192 MB</v-list-item-title>
                  <v-list-item-subtitle>内存</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-harddisk</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>2048 MB</v-list-item-title>
                  <v-list-item-subtitle>储存</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-folder-network</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>qianmo_Pbb48GPjr</v-list-item-title>
                  <v-list-item-subtitle>FTP 用户名(密码为用户密码)</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue">修改</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-row>
          <v-col cols="12">
            <v-card elevation="6" class="rounded-xl">
              <v-card-title>状态</v-card-title>
              <v-card-text class="text-center">
                <v-row>
                  <v-col cols="12" md="12" lg="6" sm="12">
                    <v-progress-circular :rotate="-90" :size="150" :width="10" value="100" color="teal">
                      运行中<br>(启动用时 64.735s)
                    </v-progress-circular>
                  </v-col>
                  <v-col cols="12" md="12" lg="6" sm="12">
                    <v-card flat>
                      <v-card-title>在线玩家: 0</v-card-title>
                      <v-card-text>
                        <v-sparkline
                            :value="sparkline.value"
                            :gradient="sparkline.gradient"
                            :smooth="sparkline.radius || false"
                            :padding="sparkline.padding"
                            :line-width="sparkline.width"
                            :stroke-linecap="sparkline.lineCap"
                            :gradient-direction="sparkline.gradientDirection"
                            auto-draw
                            :auto-draw-duration="3000"
                            auto-draw-easing="cubic-bezier(0.165, 0.84, 0.44, 1)"
                        />
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="blue">查看服务器 Banner</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card elevation="6" class="rounded-xl">
              <v-card-title>资源监控</v-card-title>
              <v-card-text class="text-center">
                <v-row>
                  <v-col cols="12">
                    <v-progress-circular :rotate="-90" :size="150" :width="10" value="42.52" color="orange" :class="$vuetify.breakpoint.mdAndDown ? 'mb-2' : 'mr-6'">
                      <div>
                        <h2 class="mb-1">42.52 %</h2>
                        <span>CPU占用</span>
                      </div>
                    </v-progress-circular>
                    <v-progress-circular :rotate="-90" :size="150" :width="10" value="90.53" color="indigo" :class="$vuetify.breakpoint.mdAndDown ? 'mt-2' : 'ml-6'">
                      <div>
                        <h2 class="mb-1">3711 MB</h2>
                        <span>内存占用</span>
                      </div>
                    </v-progress-circular>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data: ()=> {
    return {
      items: [
        {
          text: 'MinePanel',
          to: '/',
        },
        {
          text: '服务器管理',
          to: '/manager/',
        },
        {
          text: '仪表盘',
          to: '/manager/dashboard',
        },
      ],
    }
  },
  computed: {
    gradient () {
      return this.$vuetify.theme.dark
          ? ['rgba(255, 255, 255, .3)', 'rgba(255, 255, 255, 1)']
          : ['rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, 1)']
    },
    sparkline () {
      return {
        width: 2,
        radius: 10,
        padding:8,
        lineCap: 'round',
        gradient: this.gradient,
        value: this.sparklineValue,
        gradientDirection: 'left'
      }
    },
    sparklineValue () {
      return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }
}
</script>

<style scoped>

</style>