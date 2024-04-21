<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero id="hero"/>
    <LandingFeatures/>
  </LandingContainer>

  <LandingContainer>
    <Pricing id="pricing"/>
  </LandingContainer>

  <LandingContainer>
    <About id="about"/>
    <LandingCta/>
  </LandingContainer>
</template>
