<script setup>
const TeamImg1 = "https://cdn.discordapp.com/attachments/1103536796119347300/1228453680458502175/body3.png?ex=662c19a4&is=6619a4a4&hm=2e495cd93b616697067e47760374fa463086fe3b5ba648b547b9d99eb72569ea&";
const TeamImg2 = "https://cdn.discordapp.com/attachments/1103536796119347300/1228453681171796061/body1.png?ex=662c19a5&is=6619a4a5&hm=37a9220de13fb29ed4e577bae92ea74281201836683db8fc3273b916b271745b&";

const team = [
  {
    name: 'Valerkata',
    title: 'Web Frontend Dev',
    image: TeamImg1,
  },
  {
    name: 'Kalata',
    title: 'Mobile Frontend Dev',
    image: TeamImg2,
  },
];

</script>

<template>
  <LandingContainer>
    <div class="text-center mt-10" v-motion :initial="{ opacity: 0, y: 100 }" :visible="{ opacity: 1, y: 0 }">
      <h2 class="font-bold text-4xl text-gray-900">Meet Our Team</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto max-w-5xl mt-12 p-5">
      <div v-for="(person, index) in team" :key="person.name" class="flex flex-col items-center" v-motion
        :initial="{ opacity: 0, x: index % 2 === 1 ? 250 : -250 }"
        :visible="{ opacity: 1, x: 0, delay: (index + 1) * 100 }">
        <img :src="person.image"
          class="w-full md:max-w-sm h-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          :alt="person.name" />
        <h3 class="mt-4 text-xl font-medium text-gray-800">{{ person.name }}</h3>
        <p class="text-md text-gray-600">{{ person.title }}</p>
      </div>
    </div>
  </LandingContainer>
</template>
