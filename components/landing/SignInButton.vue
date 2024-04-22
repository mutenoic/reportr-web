<script lang="ts" setup>
const open = ref(false);
</script>

<template>
  <div>
    <Button @click="open = !open">
      Sign In
    </Button>
    <Dialog v-model:open="open">
      <DialogContent>
        <div class="flex flex-col justify-center">
          <h1 class="text-center text-2xl font-bold">Sign In</h1>

          <form>
            <div class="mt-4">
              <Input type="email" class="" placeholder="Email" />
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style lang="scss"></style>
