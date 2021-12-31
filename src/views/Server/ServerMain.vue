<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-toolbar class="rounded-pill d-flex justify-center" elevation="6">
          <v-btn-toggle tile group color="indigo" mandatory>
            <v-btn to="/server/list"><v-icon left>mdi-server</v-icon>所有服务器</v-btn>
            <v-btn to="/server/group"><v-icon left>mdi-lan</v-icon>服务器群组</v-btn>
          </v-btn-toggle>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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