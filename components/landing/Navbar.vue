<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const logoUrl = "https://cdn.discordapp.com/attachments/1045463014876397638/1231993378254885015/mm123.png?ex=6638fa3e&is=6626853e&hm=4a8d0bac4fa67698051f1e01b8c18d9ecd82bbaef965285eabc00998a3b49c94&";
const menuItems = [
  { title: "Pricing", path: "#pricing" },
  { title: "About", path: "#about" },
];
const open = ref(false);
const heroRef = ref(null);
const scrollY = ref(0);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  heroRef.value = document.getElementById('hero');
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  scrollY.value = window.scrollY;
}

function scrollToHero() {
  heroRef.value && window.scrollTo({ top: heroRef.value.offsetTop, behavior: 'smooth' });
}

const isShrunk = computed(() => scrollY.value > 50);
</script>

<template>
  <LandingContainer>
    <header :class="`flex items-center fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 ${isShrunk ? 'h-12 lg:h-16' : 'h-16 lg:h-24'}`">
      <div :class="`relative flex items-center justify-center w-full max-w-screen-xl mx-auto duration-300 ease-in-out ${isShrunk ? 'scale-90' : 'scale-100'}`">
        
        <div class="lg:hidden absolute top-1 right-1 z-40">
          <button @click="open = !open" class="text-gray-800 hover:text-black">
            <svg v-if="open" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        <nav :class="`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-8 bg-white shadow-xl ${open ? 'flex' : 'hidden lg:flex'} flex-col lg:flex-row w-96 h-full lg:h-56`">
          <ul class="flex flex-col lg:flex-row justify-around items-center w-full h-full">
            <li v-for="item in menuItems" :key="item.title">
              <a :href="item.path" :class="`${isShrunk ? 'text-xs lg:text-sm' : 'text-sm lg:text-base'} text-gray-800 hover:text-black font-semibold`">
                {{ item.title }}
              </a>
            </li>
          </ul>
          <div v-if="open" class="flex flex-col lg:flex-row justify-around items-center w-full h-full">
            <LandingSignInButton />
          </div>
        </nav>
        <a @click="scrollToHero" class="z-30 cursor-pointer absolute hidden lg:block">
          <img :src="logoUrl" :class="`${isShrunk ? 'h-12 lg:h-20' : 'h-16 lg:h-24'} transition-all duration-300 ease-in-out rounded-full border-4 border-white shadow`" alt="Logo">
        </a>
        <div :class="`absolute top-14 right-1/2 transform translate-x-1/2 z-20 hidden lg:block ${isShrunk ? 'top-10' : 'top-14'}`">
          <LandingSignInButton />
        </div>
      </div> 
    </header>
  </LandingContainer>
</template>
