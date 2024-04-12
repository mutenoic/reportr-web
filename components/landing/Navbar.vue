<script setup>
import { ref } from 'vue';

const logoUrl = "https://cdn.discordapp.com/attachments/1045463014876397638/1228474037722677372/logo.png?ex=662c2c9a&is=6619b79a&hm=5d1f29472dfb25320742dc4d7e16843836b7a83b3200d0d7e8b3bc304f731e22&";

const menuItems = [
  { title: "Pricing", path: "/pricing" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <a href="/" class="block">
          <img :src="logoUrl" alt="Logo" class="h-20 lg:h-24">
        </a>
        <button @click="open = !open" class="text-gray-800 lg:hidden">
          <svg
            fill="currentColor"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            :class="{'hidden': open, 'block': !open}"
          >
            <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"/>
          </svg>
          <svg
            fill="currentColor"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            :class="{'hidden': !open, 'block': open}"
          >
            <path d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"/>
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
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" size="md" block>Sign up</LandingLink>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <LandingLink href="#" size="md">Sign up</LandingLink>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
