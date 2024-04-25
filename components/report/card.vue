<script lang="ts" setup>
import { ref as imgRef, listAll } from 'firebase/storage';

const props = defineProps({
  title: String,
  description: String,
  id: String,
  report: Object,

})

const storage = useFirebaseStorage();
const refStorage = imgRef(storage, `reports/${props.id}`);

const allImagesInFolder = await listAll(refStorage);

const images = ref<string[]>([]);
for (var image in allImagesInFolder.items) {
  const {
    url,
    promise,
  } = await useStorageFileUrl(imgRef(refStorage, '/' + image))
  await promise.value;
  watch(url, () => {
    images.value.push(url.value ?? "");
  })
}

</script>

<template>
  <div class="border border-primary rounded-lg px-8 py-3 shadow-xl">
    <img :src="image" alt="" v-for="image in images" />
    <h1>{{ props.report?.title }}</h1>
  </div>
</template>

<style lang="scss"></style>
