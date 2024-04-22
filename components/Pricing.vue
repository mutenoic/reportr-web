<script setup>
const pricing = [
  {
    name: "Personal",
    price: "Free",
    popular: false,
    features: [
      "mazna",
    ],
    button: {
      text: "Get Started",
      link: "/",
    },
  },
  {
    name: "Startup",
    price: {
      monthly: "$19",
      annual: "$16",
      discount: "10%",
      original: "$24",
    },
    popular: true,
    features: [
      "mazna",
    ],
    button: {
      text: "Get Started",
      link: "#",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    features: [
      "mazna",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead v-motion :initial="{
      opacity: 0,
      y: 100,
    }" :visible="{
      opacity: 1,
      y: 0,

    }">
      <template v-slot:title>Pricing</template>
      <template v-slot:desc>Get started with ReportR today.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="(item, index) of pricing" :plan="item" v-motion :initial="{
      opacity: 0,
      y: 100,
    }" :visible="{
      opacity: 1,
      y: 0,
      transition: {
        delay: item.popular ? 0 : (index + 1) * 100,
      }
    }" />
    </div>
  </LandingContainer>
</template>
