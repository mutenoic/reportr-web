<script lang="ts" setup>
import { signInWithEmailAndPassword } from '@firebase/auth';

const open = ref(false);

const email = ref("");
const password = ref("");

async function login() {
  let auth = useFirebaseAuth();
  await auth?.authStateReady();

  if (auth === null) {
    return;
  }

  await signInWithEmailAndPassword(auth, email.value, password.value);
  return await navigateTo('/dashboard/reports');
}
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
