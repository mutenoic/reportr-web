export default defineNuxtRouteMiddleware((to, from) => {
  let currentUser = useCurrentUser();

  if ((to.path === '/login' || to.path === '/register') && currentUser.value) {
    return navigateTo('/');
  }

  if (!currentUser.value) {
    return navigateTo('/login');
  }
})
