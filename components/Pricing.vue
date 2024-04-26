<script setup>
const pricing = [
  {
    name: "Personal",
    price: "Free",
    popular: false,
    features: [
      "Access to basic reporting, chat system, and simple data tracking. Limit to one or two projects.",
      "Single user account",
      "Limited data storage capacity",
      "Access to community forums for support and basic online documentation",
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
      "Includes all Personal plan features plus additional capabilities like multi-user support, more extensive project handling, and advanced reporting tools",
      "Up to 10 users, with the ability to add more at additional cost",
      "Increased storage capacity for data and multimedia files",
      "Email and chat support, plus access to a detailed knowledge base",
      "Enhanced security features such as two-factor authentication",

    ],
    button: {
      text: "Get Started",
      link: "/",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    popular: false,
    features: [
      "All features from Startup plan, plus custom modules for specific organizational needs (like IoT integration, advanced analytics)",
      "Unlimited user accounts",
      "High-capacity or unlimited storage options",
      "24/7 priority support, dedicated account manager, and onboarding assistance",
      "Advanced security compliance features, suitable for highly regulated industries",
      "Full API access for custom integrations and compatibility with enterprise systems (e.g., ERP, CRM)",
      "Ability to customize the interface and features to suit organizational needs",

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
