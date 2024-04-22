<script setup>
import { ref } from 'vue';

const logoUrl = "https://cdn.discordapp.com/attachments/1045463014876397638/1231993378254885015/mm123.png?ex=6638fa3e&is=6626853e&hm=4a8d0bac4fa67698051f1e01b8c18d9ecd82bbaef965285eabc00998a3b49c94&";


const menuItems = [
  { title: "Pricing", path: "#pricing" },
  { title: "About", path: "#about" }
];
const open = ref(false);
const heroRef = ref(null);

onMounted(() => {
  heroRef.value = document.getElementById('hero');
});

function scrollToHero() {
  heroRef.value && window.scrollTo({ top: heroRef.value.offsetTop, behavior: 'smooth' });
}
</script>

<template>
  <LandingContainer>
    <header class="flex justify-center items-center fixed top-10 left-0 right-0 z-50 px-4 lg:px-8">
      <div class="relative flex items-center justify-center w-full max-w-screen-xl mx-auto">
        <nav :class="{ 'flex': open, 'hidden': !open, 'lg:flex': true }"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-8 bg-white shadow-xl">
          <ul class="flex justify-around items-center w-full h-full">
            <li v-for="item in menuItems" :key="item.title" class="flex items-center justify-center mx-2">
              <a :href="item.path" class="text-gray-800 hover:text-blue-600 font-semibold text-sm lg:text-base">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
        <a @click="scrollToHero" class="z-30 cursor-pointer absolute">
          <img :src="logoUrl" alt="Logo"
            class="h-16 lg:h-24 transition-all duration-300 ease-in-out rounded-full border-4 border-white shadow">
        </a>
        <div class="absolute top-14 right-1/2 transform translate-x-1/2 z-20">
          <LandingSignInButton />
        </div>
      </div>
    </header>
  </LandingContainer>
</template>

<style scoped>
nav {
  width: 400px;
  height: 220px;
}
</style>
