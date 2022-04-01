<template>
  <b-navbar toggleable="lg" id="dining-navbar-base" class="text-white" type="light">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="" active-class="active">Recipes</b-nav-item>
        <b-nav-item to="about" active-class="active">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
export default {
  name: "DiningNavbar",
};
</script>

<style lang="scss">

  #dining-navbar-base {
    position: absolute;
    background: rgba(0,0,0,0);

    .nav-link {
      color: white !important;
      padding: 0.5rem 1rem;
      opacity: 70%;
      font-weight: 500;
      transition: opacity 0.25s ease-in-out;
      margin-right: 1rem;

      &:hover {
        opacity: 100%;
      }

    }

  }

</style>
