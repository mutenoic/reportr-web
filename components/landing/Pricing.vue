<script setup>
const props = defineProps(["plan"]);

function openLink() { useRouter().push(props.plan.button.href ?? "#") }
</script>

<template>
  <div>
    <div
      class="flex flex-col w-full order-first lg:order-none border-2 border-zinc-400 border-opacity-50 rounded-lg py-5 px-6">
      <div class="text-center">
        <h4 class="text-lg font-medium text-gray-400">{{ plan.name }}</h4>
        <p class="mt-3 text-4xl font-bold text-black md:text-4xl">
          {{
          plan.price && typeof plan.price === "object"
            ? plan.price.monthly
            : plan.price
        }}
        </p>
      </div>
      <ul class="grid mt-8 text-left gap-y-4">
        <li v-for="(item, index) of plan.features" class="flex items-start gap-3 text-gray-800">
          <LandingTick className="w-6 h-6 text-green-700" />
          <span class="flex-1">{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-8">
        <Button @click="openLink" block :styleName="plan.popular ? 'primary' : 'outline'">
          {{ plan.button.text || "Get Started" }}
        </Button>
      </div>
    </div>
  </div>
</template>
