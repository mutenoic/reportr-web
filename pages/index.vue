<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero id="hero"/>
    <LandingFeatures/>
    <LandingCta/>
  </LandingContainer>

  <LandingContainer>
    <About id="about"/>
  </LandingContainer>

  <LandingContainer>
    <Pricing id="pricing"/>
  </LandingContainer>
</template>
