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
        <v-text-field solo-inverted prepend-inner-icon="mdi-magnify"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-list nav class="rounded-lg">
          <v-list-item link to="/manager">
            <v-list-item-icon>
              <v-icon>mdi-server</v-icon>
            </v-list-item-icon>
            <v-list-item-title>G9fGFf7</v-list-item-title>
            <v-list-item-subtitle v-if="$vuetify.breakpoint.mdAndUp">
              <v-icon>mdi-memory</v-icon>
              服务器负载 53.27 %
              <div class="sparkline">
                <v-sparkline
                    :value="sparkline.value.running"
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
              </div>
            </v-list-item-subtitle>
            <v-list-item-action-text>
              <v-chip label dark color="green"><v-icon left>mdi-play</v-icon>运行中</v-chip>
            </v-list-item-action-text>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-server</v-icon>
            </v-list-item-icon>
            <v-list-item-title>78oGOglj</v-list-item-title>
            <v-list-item-subtitle v-if="$vuetify.breakpoint.mdAndUp">
              <v-icon>mdi-memory</v-icon>
              服务器负载 -- %
              <div class="sparkline">
                <v-sparkline
                    :value="sparkline.value.stop"
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
              </div>
            </v-list-item-subtitle>
            <v-list-item-action-text>
              <v-chip label dark color="red"><v-icon left>mdi-stop</v-icon>已停止</v-chip>
            </v-list-item-action-text>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab color="indigo" bottom right fixed v-bind="attrs" v-on="on" to="/server/add" :class="$vuetify.breakpoint.smAndDown ? 'mb-12' : ''">
          <v-icon>mdi-server-plus</v-icon>
        </v-btn>
      </template>
      <span>添加服务器</span>
    </v-tooltip>
  </v-container>
</template>

<script>
export default {
  name: "ServerList",
  data: () => {
    return {
      items: [
        {
          text: 'MinePanel',
          to: '/',
        },
        {
          text: '服务器',
          to: '/server',
        },
        {
          text: '服务器列表',
          to: '/server/list',
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
        width: 4,
        radius: 10,
        padding:8,
        lineCap: 'round',
        gradient: this.gradient,
        value: this.sparklineValue,
        gradientDirection: 'left'
      }
    },
    sparklineValue () {
      return {
        running: [42, 53, 25, 52, 87, 45, 53, 57, 24, 72, 33, 96, 48, 73, 47, 63, 84, 33, 64, 45],
        stop: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    }
  }
}
</script>

<style scoped>

</style>