<template>
  <main class="flex flex-col md:flex-row-reverse items-center justify-between pt-8 pb-8 md:pt-16">
    <div class="w-full md:w-2/5 flex justify-center md:justify-start">
      <img
        class="rounded-full transition-transform duration-700 hover:scale-110"
        src="~/assets/img/hero.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
      />
    </div>
    <div class="text-center md:text-left w-full md:w-3/5 flex flex-col justify-center">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight animate-unique">
        REPORTR
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl animate-fadeSlideUp">
        ReportR, the easiest way to create and share reports with your team and clients in minutes.
      </p>
      <div class="mt-2 flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fadeSlideUp">
        <LandingLink
          class="button-animate"
          href="https://github.com/kaloyanes"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink>
        <LandingLink
          class="button-animate outline"
          href="https://github.com/valery-a"
          target="_blank"
          rel="noopener"
          >View Repo</LandingLink>
      </div>
    </div>
  </main>
</template>
