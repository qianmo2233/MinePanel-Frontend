<template>
  <div>
    <v-row>
      <v-col cols="12" lg="3" md="4" sm="12">
        <v-card elevation="6" class="rounded-lg">
          <v-list nav dense>
            <v-list-item link to="/server/list">
              <v-list-item-icon>
                <v-icon>mdi-table-of-contents</v-icon>
              </v-list-item-icon>
              <v-list-item-title>服务器列表</v-list-item-title>
            </v-list-item>
            <v-list-item link  to="/server/composer">
              <v-list-item-icon>
                <v-icon>mdi-lan</v-icon>
              </v-list-item-icon>
              <v-list-item-title>群组服务器</v-list-item-title>
            </v-list-item>
            <v-divider/>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-nas</v-icon>
              </v-list-item-icon>
              <v-list-item-title>总服务器数</v-list-item-title>
              <v-list-item-subtitle>475</v-list-item-subtitle>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-icon>
                <v-icon>mdi-play</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>运行数</v-list-item-title>
                <v-list-item-subtitle>325</v-list-item-subtitle>
                <v-progress-linear value="68"/>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" lg="9" md="8" sm="12">
        <transition name="slide-fade" mode="out-in">
          <router-view/>
        </transition>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ServerMain",
}
</script>

<style scoped>

</style>