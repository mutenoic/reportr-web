<script lang="ts" setup>
import { ref as imgRef, listAll } from 'firebase/storage';

const props = defineProps({
  title: String,
  description: String,
  id: String,

})

const storage = useFirebaseStorage();
const refStorage = imgRef(storage, `reports/${props.id}`);

const allImagesInFolder = await listAll(refStorage);

const images = ref<string[]>([]);
for (var image in allImagesInFolder.items) {
  const {
    url,
  } = await useStorageFileUrl(imgRef(refStorage, '/' + image))

  watch(url, () => {
    images.value.push(url.value ?? "");
  })
}

</script>

<template>
  <div>
    <h1>{{ id }}</h1>
    <img :src="image" alt="" v-for="image in images" />
  </div>
</template>

<style lang="scss"></style>
