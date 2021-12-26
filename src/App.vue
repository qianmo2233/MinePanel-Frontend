<template>
  <v-app>
    <app-bar/>
    <v-main>
      <div :class="$vuetify.breakpoint.mdAndUp ? 'overflow-auto content-lg' : 'overflow-auto content-sm'">
        <v-container fluid>
          <transition name="slide-fade" mode="out-in">
            <router-view/>
          </transition>
        </v-container>
      </div>
    </v-main>
    <Footer v-if="$vuetify.breakpoint.mdAndUp"/>
  </v-app>
</template>

<script>

import AppBar from "@/components/layouts/AppBar";
import Footer from "@/components/layouts/Footer";
export default {
  name: 'App',
  components: {Footer, AppBar},
  data: () => ({
    //
  }),
};
</script>
