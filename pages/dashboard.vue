<script lang="ts" setup>
definePageMeta({
  // middleware: 'is-authenticated'
  middleware: [
    'dashboard',
  ]
})
</script>

<template>
  <div>
    <h1>Dashboard layout</h1>

    <NuxtPage />
  </div>
</template>

<style lang="scss"></style>
