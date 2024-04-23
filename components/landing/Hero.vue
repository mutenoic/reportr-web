<script lang="ts" setup>
import { useMotion } from '@vueuse/motion';
import SplitType from 'split-type';

let delayedNumber = ref(0);


onMounted(async () => {
  console.log("mounted hero");

  const target = document.querySelectorAll('.button-animate')!;

  console.log(target);

  for (var i = 0; i < target.length; i++) {
    delayedNumber.value = (i + 1) * 100
    useMotion(target[i] as HTMLElement, {
      initial: {
        opacity: 0,
        scale: 0,
        y: 50,
      },
      enter: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 400,
          delay: (i + 1) * 100,
          ease: (x: number) => {
            return 1 - Math.pow(1 - x, 5);
          }
        }
      }
    })
  }

  const text = new SplitType("#title");
  console.log(text);

  if (text.chars == null) {
    return;
  }

  for (var i = 0; i < text.chars.length; i++) {
    delayedNumber.value = (i + 1) * 100
    useMotion(text.chars[i], {
      initial: {
        opacity: 0,
        y: 25
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 400,
          delay: delayedNumber.value,
          ease: (x: number) => {
            return 1 - Math.pow(1 - x, 5);
          }
        }
      }
    })
  }


})
</script>

<template>
  <main class="flex flex-col md:flex-row items-center justify-between pt-8 pb-8 md:pt-16">
    <div class="text-center md:text-left w-full md:w-3/5 flex flex-col justify-center gap-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight" id="title">
          REPORTR
        </h1>
        <p class="text-lg text-slate-600 max-w-xl" v-motion :initial="{ opacity: 0, scale: 0.7, x: -70, y: -20 }"
          :enter="{
          opacity: 1, scale: 1, x: 0, y: 0, transition: {
            duration: 400,
            delay: 850,
            ease: (x: number) => {
              return 1 - Math.pow(1 - x, 5);
            },

          }
        }">
          The easiest way to create and share reports with your team and clients in minutes.
        </p>
      </div>
      <div class="mt-2 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
        <NuxtLink href="https://github.com/kaloyanes" target="_blank" rel="noopener">
          <div v-motion :initial="{ opacity: 0, scale: 0, y: 50, }" :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
            ease: (x: number) => {
              return 1 - Math.pow(1 - x, 5);
            }
          }
        }">
            <Button class="button-animate">Get
              Started</Button>
          </div>
        </NuxtLink>
        <NuxtLink href="https://github.com/valery-a" target="_blank" rel="noopener">
          <Button class="" variant="outline" v-motion :initial="{ opacity: 0, scale: 0, y: 50, }" :enter="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
            delay: 600,
            ease: (x: number) => {
              return 1 - Math.pow(1 - x, 5);
            }
          }
        }">View
            Repo</Button>
        </NuxtLink>
      </div>
    </div>
    <div class="w-full md:w-2/5 flex justify-center md:justify-start">
      <img class="rounded-full" v-motion :initial="{
          rotateZ: 10,
          opacity: 0,
          clipPath: 'ellipse(0% 0% at 50% 50%)',
        }" :enter="{
          rotateZ: 0,
          opacity: 1,
          clipPath: 'ellipse(50% 50% at 50% 50%)',
          transition: {
            duration: 400,
            delay: 600,
            ease: (x: number) => {
              return 1 - Math.pow(1 - x, 5);
            }
          }
        }" src="/hero.png" alt="Starship starts the engine" loading="eager" format="avif" />
    </div>
  </main>
</template>
