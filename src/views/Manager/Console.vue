<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Console",
  data: ()=> {
    return {
      items: [
        {
          text: 'MinePanel',
          to: '/',
        },
        {
          text: '服务器管理',
          to: '/manager/dashboard',
        },
        {
          text: '控制台',
          to: '/manager/console',
        },
      ],
    }
  },
}
</script>

<style scoped>

</style>