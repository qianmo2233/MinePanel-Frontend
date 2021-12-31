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
    <bottom-nav v-if="$vuetify.breakpoint.smAndDown"/>
  </v-app>
</template>

<script>

import AppBar from "@/components/layouts/AppBar";
import BottomNav from "@/components/layouts/BottomNav";
export default {
  name: 'App',
  components: {BottomNav, AppBar},
  data: () => ({
    //
  }),
};
</script>
