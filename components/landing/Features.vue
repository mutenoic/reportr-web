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
    <p class="text-lg mt-4 text-slate-600">
      Discover the tools and innovations that make ReportR the preferred solution for organizational management.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" :key="item.title" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
