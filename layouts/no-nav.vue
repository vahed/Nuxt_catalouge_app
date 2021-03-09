<template>
<div>
  <div class="container">
    <NuxtLink to="/">Go Back</NuxtLink>
  </div>
  <Nuxt />
</div>
</template>

<script>
export default {
  name: "no-nav"
}
</script>

<style scoped>
.container {
  padding-top: 6rem;
  margin-bottom: -5rem;
}
</style>

