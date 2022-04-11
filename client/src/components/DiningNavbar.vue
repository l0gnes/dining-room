<template>
  <b-navbar toggleable="lg" id="dining-navbar-base" type="dark">

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="dining-nav-link" to="" active-class="active">Recipes</b-nav-item>
        <b-nav-item class="dining-nav-link" to="about" active-class="active">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
export default {
  name: "DiningNavbar",
};
</script>

<style lang="scss" scoped>

  #dining-navbar-base {
    z-index: 999;
    position: absolute;
    background: rgba(0,0,0,0);
  }

  .dining-nav-link {
      color: white !important;
      padding: 0.5rem 1rem;
      opacity: 0.7;
      font-weight: 400;
      transition: opacity 0.25s ease-in-out;
      margin-right: 0.5rem;
      border-color: white;
      transition: all 0.1s ease;
      border-bottom-style: solid;
      border-bottom-width: 0;
      font-size: large;
      line-height: 0.5rem;

      &:hover {
        opacity: 1;
        border-bottom-width: 5px;
        letter-spacing: 1px;
      }

    }

</style>
