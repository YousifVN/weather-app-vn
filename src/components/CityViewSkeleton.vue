<template>
    <div class="flex flex-col flex-1">
      <!-- Overview -->
      <div class="flex flex-col items-center py-12">
        <AnimatedPlaceholder class="max-w-[300px] w-full mb-2" />
        <AnimatedPlaceholder class="max-w-[300px] w-full mb-12" />
        <AnimatedPlaceholder
          class="max-w-[300px] h-[100px] w-full mb-12"
        />
        <AnimatedPlaceholder class="max-w-[300px] w-full mb-8" />
        <AnimatedPlaceholder
          class="max-w-[300px] h-[75px] w-full"
        />
      </div>
      <!-- Hourly -->
      <div class="flex flex-col items-center px-8 py-12">
        <AnimatedPlaceholder
          class="max-w-screen-md h-[100px] w-full mb-12 "
        />
      </div>
      <!-- Weekly -->
      <div class="flex flex-col items-center px-8 py-12">
        <AnimatedPlaceholder
          class="max-w-screen-md h-[100px] w-full mb-12"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";
  </script>