<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/hero.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="512"
        height="512"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        REPORTR
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
       ReportR, the easiest way to create and share reports with your team and clients in minutes. Mazna is the easiest way to create and share reports with your team and clients in minutes.
      </p>
      <div class="mt-2 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/kaloyanes"
          target="_blank"
          rel="noopener"
          >Get Started</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/valery-a"
          target="_blank"
          >View Repo</LandingLink
        >
      </div>
    </div>
  </main>
</template>
