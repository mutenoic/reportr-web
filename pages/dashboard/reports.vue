<script lang="ts" setup>
import { collection, orderBy, query, where } from 'firebase/firestore';
const db = useFirestore();


const { data: reports, promise: reportPromise } = useCollection(
  query(collection(db, 'reports'), orderBy('date', 'desc'), where("organization", "==", "tuXeYWFHXVbwnc0quxRzC78ufSH2"))
);

await reportPromise.value;

</script>

<template>
  <div>
    <div v-for="report in reports" :key="report.id">
      <h1>{{ report.title }}</h1>
      <p>{{ report.description }}</p>
    </div>
  </div>
</template>

<style lang="scss"></style>
