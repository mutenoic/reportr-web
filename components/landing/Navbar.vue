<script setup>
import { ref } from 'vue';

const logoUrl = "https://cdn.discordapp.com/attachments/1045463014876397638/1228474037722677372/logo.png?ex=662c2c9a&is=6619b79a&hm=5d1f29472dfb25320742dc4d7e16843836b7a83b3200d0d7e8b3bc304f731e22&";

const menuItems = [
  { title: "Pricing", path: "#pricing" },
  { title: "About", path: "#about" },
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
    <header class="fixed top-0 z-50 bg-white shadow flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-xl mx-auto px-4 lg:px-8 rounded-lg">
      <a href="#" @click="scrollToHero">
        <img :src="logoUrl" alt="Logo" class="h-12 lg:h-16">
      </a>
      <div class="flex justify-between items-center w-full lg:w-auto">
        <nav :class="{'flex': open, 'hidden': !open, 'lg:flex': true}" class="flex-grow">
          <ul class="flex flex-col lg:flex-row gap-4 lg:gap-8 text-center">
            <li v-for="item in menuItems" :key="item.title">
              <a :href="item.path" class="px-2 py-1 text-gray-800 hover:text-blue-600 font-semibold">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center space-x-4">
          <button @click="open = !open" class="text-gray-800 lg:hidden">
            <svg fill="currentColor" class="w-8 h-8" viewBox="0 0 20 20" :class="{'hidden': open, 'block': !open}">
              <path fill-rule="evenodd" d="M4 5h12a1 1 0 010 2H4a1 1 0 110-2zm0 6h12a1 1 0 010 2H4a1 1 0 010-2zm0 6h12a1 1 0 010 2H4a1 1 0 110-2z" clip-rule="evenodd"/>
            </svg>
            <svg fill="currentColor" class="w-8 h-8" viewBox="0 0 20 20" :class="{'hidden': !open, 'block': open}">
              <path fill-rule="evenodd" d="M10 14.707l-5-5 1.414-1.414L10 12.879l3.586-3.586L15 9.707l-5 5z" clip-rule="evenodd"/>
            </svg>
          </button>
          <LandingLink
          class="button-animate-signin"
          href="#"
          target="_blank"
          rel="noopener"
          >Sign In</LandingLink>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>