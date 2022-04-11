<template>
  <div id="recipe-page-header">

    <div id="header-text-div">

      <h1>{{ greeting }}</h1>

    </div>
  </div>
</template>

<script>
export default {
  name: "RecipePageHeader",
  computed: {
    username() {
      return localStorage.getItem("username");
    },
    greeting() {
      const currentMoment = new Date(); // I'm going to regret working with Date objects arent I
      const currentHour = currentMoment.getHours();

      if (currentHour >= 8 && currentHour < 12) {
        if (this.username) {
          return `\u{1F31E} Good Morning, ${this.username}!`;
        }
        return "\u{1F31E} Good Morning!";
      }
      if (currentHour >= 12 && currentHour < 17) {
        if (this.username) {
          return `\u{1F44B} Good Afternoon, ${this.username}!`;
        }
        return "\u{1F44B} Good Afternoon!";
      }

      if (this.username) {
        return `\u{1F303} Good Evening, ${this.username}!`;
      }
      return "\u{1F303} Good Evening!";
    },
  },
};
</script>

<style lang="scss">

  #recipe-page-header {
    height: 60vh;
    background: linear-gradient(90deg, #9ebd13 0%, #008552 100%);;
    box-shadow: #1e1e1e 0 -1rem 1rem 0 inset;
    text-align: center;
    color: white;

    > #header-text-div {
      transform: translateY(15vh);

      > h6 {
        font-weight: 300;
      }

    }
  }

</style>
