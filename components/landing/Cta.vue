<template>
  <div
    class="bg-gradient-to-r from-black to-gray-800 px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center shadow-lg transform transition duration-500 hover:scale-105"
  >
    <h2 class="text-white text-3xl md:text-6xl font-bold tracking-wider animate-pulse">
      SIGN UP YOUR COMPANY TODAY!
    </h2>
    <p class="text-gray-300 mt-4 text-lg md:text-xl leading-relaxed">
      Fast and easy way to create and share reports with your team and clients in minutes. 
    </p>
    <div class="flex mt-5 space-x-3">
      <LandingLink href="#" styleName="inverted" class="bg-white text-black py-2 px-4 rounded-md shadow hover:bg-gray-50 transition duration-300">
        Download the app now!
      </LandingLink>
    </div>
  </div>
</template>

<style>
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>
