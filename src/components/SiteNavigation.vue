<template>
  <header class="sticky top-0 shadow-lg bg-weather-primary">
    <nav
      class="container flex flex-col items-center gap-4 py-6 text-white sm:flex-row"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex items-center gap-3">
          <i class="text-2xl fa-solid fa-sun"></i>
          <p class="text-2xl font-bold">Weather VN</p>
        </div>
      </RouterLink>

      <div class="flex justify-end flex-1 gap-8">
        
        <div class="flex items-center space-x-2 text-xl duration-150 cursor-pointer hover:text-gray-500" @click='toggleModal'>
          <i class="fa-solid fa-circle-info"></i>
          <i>Usage Guide</i>
        </div>

        <div class="flex items-center space-x-2 text-xl duration-150 cursor-pointer hover:text-gray-500" @click="addCity"
        v-if="route.query.preview">
          <i class=" fa-solid fa-plus"></i>
          <i>Save City</i>
        </div>
        
      </div>

      <BaseModal
        :modalActive="modalActive"
        @close-modal="toggleModal"
      >
        <div class="text-center text-black">
          <h1 class="mb-1 text-2xl font-bold">About:</h1>
          <p class="mb-4">
            Weather VN allows you to track the current and
            future weather of cities of your choosing.
          </p>

          <hr class="w-full mb-2 border border-black border-opacity-10" />

          <h2 class="text-2xl font-bold">How it works:</h2>
          <ol class="mb-4 list-decimal list-inside">    
              <li class="mb-2">
              Search for your city by entering the name into the
              search bar.
            </li>
            <li class="mb-2">
              Select a city within the results, this will take
              you to the current weather for your selection.
            </li>
            <li class="mb-2">
              Track the city by clicking on the "+" icon in the
              top right. This will save the city to view at a later
              time on the home page.
            </li>
          </ol>

          <hr class="w-full mb-2 border border-black border-opacity-10" />

          <h2 class="text-2xl font-bold">Removing a city:</h2>
          <p>
            If you no longer wish to track a city, simply select
            the city within the home page. At the bottom of the
            page, there will be am option to delete the city.
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import { uid } from "uid";
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";

const savedCities = ref([]);
const route = useRoute();
const router = useRouter();
const addCity = () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(
      localStorage.getItem("savedCities")
    );
  }

  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  savedCities.value.push(locationObj);
  localStorage.setItem(
    "savedCities",
    JSON.stringify(savedCities.value)
  );

  let query = Object.assign({}, route.query);
  delete query.preview;
  query.id = locationObj.id;
  router.replace({ query });
};

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>