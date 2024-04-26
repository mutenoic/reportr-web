<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

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
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const isShrunk = computed(() => scrollY.value > 50);
</script>

<template>
  <div class="sticky top-3 flex justify-center z-30">

    <img :src="logoUrl" @click="scrollToHero"
      :class="`${isShrunk ? 'h-12 lg:h-20' : 'h-16 lg:h-24'} transition-all duration-300 ease-in-out rounded-full shadow hover:cursor-pointer bg-white`"
      alt="Logo">

  </div>
</template>
