<script setup>
const TeamImg1 = "https://media.licdn.com/dms/image/D4D03AQHloQzn0RoIqg/profile-displayphoto-shrink_800_800/0/1702136749907?e=1719446400&v=beta&t=obJ5b7juvpJrmFIOE67cYSdvuCoFpIF5ShUy4Mdufb8";
const TeamImg2 = "https://cdn.discordapp.com/attachments/1103536796119347300/1228453681171796061/body1.png?ex=662c19a5&is=6619a4a5&hm=37a9220de13fb29ed4e577bae92ea74281201836683db8fc3273b916b271745b&";

const team = [
  {
    name: 'Valery Kultchizky',
    title: 'Web Dev & Backend Dev',
    image: '/valery.png',
  },
  {
    name: 'Kaloyan Stoyanov',
    title: 'Mobile Dev & Backend Dev',
    image: '/kalata.jpg',
  },
];

</script>

<template>
  <LandingContainer>
    <div class="text-center mt-10" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }">
      <h2 class="font-bold text-4xl text-gray-900">Meet Our Team</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto max-w-5xl mt-12 p-5">
      <div v-for="(person, index) in team" :key="person.name" class="flex flex-col items-center" v-motion
        :initial="{ opacity: 0, x: index % 2 === 1 ? 250 : -250 }"
        :visible-once="{ opacity: 1, x: 0, delay: (index + 1) * 100 }">
        <img :src="person.image"
          class="w-full md:max-w-sm h-auto rounded-2xl shadow-xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          :alt="person.name" />
        <h3 class="mt-4 text-xl font-medium text-gray-800">{{ person.name }}</h3>
        <p class="text-md text-gray-600">{{ person.title }}</p>
      </div>
    </div>
  </LandingContainer>
</template>
