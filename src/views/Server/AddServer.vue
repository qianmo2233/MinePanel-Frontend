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
      <v-col cols="12" lg="2" md="3" sm="12">
        <v-tabs :vertical="$vuetify.breakpoint.mdAndUp" v-model="tab" show-arrows class="rounded-lg elevation-6">
          <v-tab><v-icon left>mdi-minecraft</v-icon>Minecraft 服务器</v-tab>
          <v-tab><v-icon left>mdi-gamepad-variant</v-icon>自定义游戏服务器</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="12" lg="10" md="9" sm="6">
        <v-tabs-items v-model="tab" class="rounded-xl elevation-6">
          <v-tab-item>
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-subheader>配额<v-divider inset/></v-subheader>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-autocomplete solo label="所有者" prepend-inner-icon="mdi-account"/>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-text-field solo label="内存" prepend-inner-icon="mdi-memory" suffix="MB"/>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-text-field solo label="核心" prepend-inner-icon="mdi-cpu-64-bit"/>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-text-field solo label="储存" prepend-inner-icon="mdi-harddisk" suffix="MB"/>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-text-field solo label="端口个数" prepend-inner-icon="mdi-network" suffix=""/>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-select filled label="选择Daemon"/>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-switch label="允许使用Docker"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-subheader>服务端配置<v-divider inset/></v-subheader>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6" sm="6">
                  <v-select filled label="选择服务端" :loading="loading.types" :items="types" v-model="select.type" hint="使用 Sakura's Mirror API" persistent-hint/>
                </v-col>
                <v-col cols="12" md="6" sm="6">
                  <v-select
                      filled
                      label="选择版本"
                      :loading="loading.cores"
                      :items="cores"
                      v-model="select.core"
                      return-object item-text="name"
                      :hint="'大小: ' + (select.core.size/1024/1024).toFixed(2) + ' MB'"
                      persistent-hint
                  />
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-switch label="群组网络子服务器"/>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="12">
                  <v-select filled label="选择母服"/>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn color="blue" text>创建服务器</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col cols="12">
                aaa
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AddServer",
  created() {
    if (this.tab === 0) {
      this.loading.types = true
      this.$http.get('https://mirror.zerodream.net/?action=typelist').then(function (result) {
        this.types = result.data
        this.loading.types = false
      })
    }
  },
  data : () => {
    return {
      tab: 0,
      items: [
        {
          text: 'MinePanel',
          to: '/',
        },
        {
          text: '服务器',
          to: '/server/list',
        },
        {
          text: '新建服务器',
          to: '/server/add',
        },
      ],
      types: [],
      select: {
        type: '',
        core: {},
      },
      cores: [],
      loading: {
        types: false,
        cores: false
      }
    }
  },
  watch: {
    tab() {
      if (this.tab === 0) {
        this.loading.types = true
        this.$http.get('https://mirror.zerodream.net/?action=typelist').then(function (result) {
          this.types = result.data
          this.loading.types = false
        })
      }
    },
    'select.type': function () {
      this.loading.cores = true
      this.cores = []
      this.select.core = {}
      this.$http.get('https://mirror.zerodream.net/?action=getlist&version=' + this.select.type).then(function (result) {
        this.cores = result.data
        this.loading.cores = false
      })
    }
  },
}
</script>

<style scoped>

</style>