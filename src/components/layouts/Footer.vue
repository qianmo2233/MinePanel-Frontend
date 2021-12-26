<template>
  <v-footer app dark color="blue-grey darken-3">
    <v-row class="status-footer">
      <v-col cols="12" lg="1" md="2" sm="3">
        <span class="text-caption"><v-icon left small>mdi-server</v-icon>当前服务器 : 无</span>
      </v-col>
      <v-col cols="12" lg="1" md="2" sm="3">
        <v-btn text tile class="text-caption footer-btn"><v-icon left small>mdi-message-text</v-icon>通知</v-btn>
      </v-col>
      <v-spacer/>
      <v-col cols="12" lg="1" md="2" sm="3">
        <span class="text-caption">无任务</span>
      </v-col>
      <v-col cols="12" lg="1" md="2" sm="3">
        <v-progress-linear color="white" class="mt-3" :value="0"/>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>