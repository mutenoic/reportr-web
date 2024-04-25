<script lang="ts" setup>
import { collection, orderBy, query, where } from 'firebase/firestore';
const db = useFirestore();

const id = await useOrganizationId();
console.log(id.value);

const { data: reports, promise: reportPromise } = useCollection(
  query(collection(db, 'reports'), orderBy('date', 'desc'), where("organization", "==", id.value))
);

await reportPromise.value;

</script>

<template>
  <div class="flex gap-2 ">
    <ReportCard v-for="report in reports" :key="report.id" :title="report.title" :description="report.description"
      :id="report.id" :report="report" />
  </div>
</template>

<style lang="scss"></style>
