<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

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
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const isShrunk = computed(() => scrollY.value > 50);
</script>

<template>
  <div class="sticky top-3 flex justify-center z-30">

    <img src="/reportr-logo.png" @click="scrollToHero"
      :class="`${isShrunk ? 'h-12 lg:h-20' : 'h-16 lg:h-24'} transition-all duration-300 ease-in-out rounded-full shadow hover:cursor-pointer bg-black p-1`"
      alt="Logo">

  </div>
</template>
