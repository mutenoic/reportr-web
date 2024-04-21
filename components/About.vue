<script setup>
const TeamImg1 = "https://cdn.discordapp.com/attachments/1103536796119347300/1228453680458502175/body3.png?ex=662c19a4&is=6619a4a4&hm=2e495cd93b616697067e47760374fa463086fe3b5ba648b547b9d99eb72569ea&";
const TeamImg2 = "https://cdn.discordapp.com/attachments/1103536796119347300/1228453681171796061/body1.png?ex=662c19a5&is=6619a4a5&hm=37a9220de13fb29ed4e577bae92ea74281201836683db8fc3273b916b271745b&";

const team = [
  {
    name: 'Valerkata',
    title: 'Senior Dev',
    image: TeamImg1,
  },
  {
    name: 'Kalata',
    title: 'ratio+ carti better+ carti solos+ carti > your existence +dont care + didnt ask + cry about it + stay mad + get real + L + mald seethe cope harder + hoes mad + basic + ratio + you fell off + the audacity + triggered + any askers + redpilled + get a life + ok and? + cringe + touch grass + not based + your are a (insert stereotype) + not funny didnt laugh + youre* + grammar issue + go outside + get good + reported! + ask deez + ratio again + final ratio + stay mad + stay pressed + cancelled + done for + mad free + freer than air + rip bozo + cringe + lol + irrelevant + cope + jealous + go ahead whine about it + your problem + dont care even more + eat glass',
    image: TeamImg2,
  },
];

</script>

<template>
<LandingContainer>
    <div class="text-center mt-10">
      <h2 class="font-semibold text-4xl text-gray-900">Meet Our Team</h2>
      <p class="mt-3 text-lg text-gray-500">
        naj-mazniq otbor kat cqlo
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto max-w-5xl mt-12 p-5">
      <div v-for="person in team" :key="person.name" class="flex flex-col items-center">
        <img
          :src="person.image"
          class="w-full md:max-w-sm h-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          :alt="person.name"
        />
        <h3 class="mt-4 text-xl font-medium text-gray-800">{{ person.name }}</h3>
        <p class="text-md text-gray-600">{{ person.title }}</p>
      </div>
    </div>
  </LandingContainer>
</template>