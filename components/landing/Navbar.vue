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
  if (heroRef.value) {
    window.scrollTo({
      top: heroRef.value.offsetTop,
      behavior: 'smooth'
    });
  }
}
</script>

<template>
  <LandingContainer>
    <header class="fixed top-0 z-50 bg-white shadow flex flex-col lg:flex-row justify-between items-center w-full">
      <div class="flex w-full lg:w-auto items-center justify-between px-4 lg:px-0">
        <a href="#" class="block" @click="scrollToHero">
          <img :src="logoUrl" alt="Logo" class="h-20 lg:h-24">
        </a>
        <button @click="open = !open" class="text-gray-800 lg:hidden">
          <svg
            fill="currentColor"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            :class="{'hidden': open, 'block': !open}"
          >
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" clip-rule="evenodd"/>
          </svg>
          <svg
            fill="currentColor"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            :class="{'hidden': !open, 'block': open}"
          >
            <path fill-rule="evenodd" d="M18.278 16.864L13.414 12 18.278 7.136a1 1 0 00-1.414-1.414L12 10.586 7.136 5.722a1 1 0 10-1.414 1.414L10.586 12l-4.864 4.864a1 1 0 001.414 1.414L12 13.414l4.864 4.864a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
      <nav :class="{'block': open, 'hidden': !open, 'lg:flex': true, 'mt-2': true, 'lg:mt-0': true}">
        <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item in menuItems" :key="item.title">
            <a :href="item.path" class="lg:px-3 py-2 text-gray-600 hover:text-gray-900">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <div>
          <LandingLink v-if="!open" class="hidden lg:block" href="#" size="md">Sign up</LandingLink>
        </div>
      </nav>
      <LandingLink class="hidden lg:flex items-center gap-4" href="#" size="md">Sign up</LandingLink>
    </header>
  </LandingContainer>
</template>
