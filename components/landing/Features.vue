<script setup>
const features = [
  {
    title: "Modular Design",
    description:
      "Each module in ReportR is designed to encapsulate specific functionalities, making the application scalable and easy to maintain.",
    icon: "bx:bxs-widget",
  },
  {
    title: "Real-Time Data Handling",
    description:
      "Leverage Firebase for real-time data management, ensuring all organizational activities are synchronized and up-to-date.",
    icon: "bx:bxs-cloud-upload",
  },
  {
    title: "Comprehensive Reporting",
    description:
      "ReportR provides complex reporting tools that allow for detailed tracking and management of organizational activities.",
    icon: "bx:bxs-report",
  },
  {
    title: "Interactive Dashboards",
    description:
      "Interactive and customizable dashboards provide at-a-glance insights into your organization’s operations.",
    icon: "bx:bxs-dashboard",
  },
  {
    title: "Mobile-first Approach",
    description:
      "Designed with a mobile-first approach using Flutter, ensuring accessibility and ease of use across all mobile devices.",
    icon: "bx:bxs-mobile",
  },
  {
    title: "Community and Support",
    description:
      "Backed by a dedicated team, ReportR offers extensive support and community resources to ensure your success.",
    icon: "bx:bxs-group",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Key Features of ReportR
    </h2>
    <p class="text-lg mt-4">
      Discover the tools and innovations that make ReportR the preferred solution for organizational management.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item in features" :key="item.title" class="flex gap-4 items-start">
      <div class="icon bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #121212;
  /* Dark background for the whole page */
  color: #ffffff;
  /* Light text for better readability on dark background */
}

.text-slate-600,
.text-lg {
  color: #cccccc;
  /* Lighter text color for improved visibility on dark backgrounds */
}

.text-slate-500 {
  color: #bbbbbb;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.icon {
  animation: pulse 2s infinite ease-in-out;
  /* Apply the pulse animation to icons */
}

h3,
p {
  animation: fadeIn 1.5s ease-out;
  /* Fade-in effect for headings and paragraphs */
}

.flex {
  animation: fadeSlideUp 1s ease-out, fadeIn 2s ease-out;
  /* Multiple animations for container */
}
</style>
