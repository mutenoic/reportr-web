<script lang="ts" setup>
import { signInWithEmailAndPassword } from '@firebase/auth';
const auth = useFirebaseAuth();
await auth?.authStateReady();

const open = ref(false);

const email = ref("");
const password = ref("");

async function login() {


  if (auth === null) {
    return;
  }

  await signInWithEmailAndPassword(auth, email.value, password.value);
  return await navigateTo('/dashboard/reports');
}

async function signout() {
  auth?.signOut();
}
const user = useCurrentUser();
console.log('user', user.value?.uid);
</script>

<template>
  <div>
    <Button @click="signout">fkaofsko</Button>
    <Button @click="open = !open" v-if="user?.uid === null && user?.uid === undefined">
      Sign In
    </Button>
    <Button @click="navigateTo('/dashboard')" v-else>
      Dashboard
    </Button>
    <Dialog v-model:open="open">
      <DialogContent>
        <div class="flex flex-col justify-center">
          <h1 class="text-center text-2xl font-bold">Sign In</h1>

          <form>
            <div class="mt-4">
              <Input type="email" class="" placeholder="Email" v-model="email" />
            </div>
            <div class="mt-4">
              <Input type="password" class="" placeholder="Password" v-model="password" />
            </div>

            <Button class="mt-4" block @click="login">Sign In</Button>
          </form>


        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style lang="scss"></style>
