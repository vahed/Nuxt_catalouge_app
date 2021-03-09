<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item text="Lang" right>
            <NuxtLink to="/" class="nav-link">Product</NuxtLink>

          </b-nav-item>
          <b-nav-item text="Lang" right>
            <NuxtLink to="/my-items" class="nav-link">My items</NuxtLink>
          </b-nav-item>


        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav.vue"
}
</script>

<style scoped>

</style>
