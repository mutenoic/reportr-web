export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  if (to.name === 'dashboard')
    return navigateTo('/dashboard/reports')
})
