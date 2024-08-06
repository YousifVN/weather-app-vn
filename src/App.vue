<template>
  <div
    class="flex flex-col min-h-screen font-hanken-grotesk bg-weather-primary">
    <SiteNavigation />
    
    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <PageFooter/>

  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteNavigation from "./components/SiteNavigation.vue";
import PageFooter from "./components/PageFooter.vue";
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>