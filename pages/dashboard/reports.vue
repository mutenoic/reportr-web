<script lang="ts" setup>
import { collection, orderBy, query, where } from 'firebase/firestore';
const db = useFirestore();


const { data: reports, promise: reportPromise } = useCollection(
  query(collection(db, 'reports'), orderBy('date', 'desc'), where("", "==", ""))
);

await reportPromise.value;

</script>

<template>
  <div>
    <Example />
  </div>
</template>

<style lang="scss"></style>
