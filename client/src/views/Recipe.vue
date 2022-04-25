<template>

  <div id="recipe-information-container">

      <div id="recipe-spacer"/>
    <div id="another-container-lol">

      <a id="return-button" href="http://localhost:8080/">← BACK TO RECIPES LIST</a>
      <h1>{{ this.recipe.name || "Unnamed Recipe"}}</h1>
      <h3 class="accented">{{ this.recipe.description || "No Description Provided"}}</h3>
      <hr/>
      <p style="white-space: pre-line;">
        {{ this.recipeInstructionsSpaced }}
      </p>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Recipe",
  data() {
    return {
      recipe: {},
    };
  },
  mounted() {
    this.fetchRecipe(parseInt(this.$route.params.id, 10));
  },
  methods: {
    fetchRecipe(recipeId) {
      axios.get(
        `http://localhost:5000/recipes/${recipeId}`, { "Access-Control-Allow-Origin": "*" },
      ).then(
        (response) => {
          this.recipe = response.data;
        },
      );
    },
  },
  computed: {
    recipeInstructionsSpaced() {
      return this.recipe.recipe.replace("\n", "\u{00a}");
    },
  },
};
</script>

<style lang="scss">

@import "@/assets/scss/colours.scss";

.accented {
  color: $diner-lime;
}

#recipe-information-container {
  color: white;
  height: 100%;
  width: 100%;
}

#recipe-spacer {
  height: 10rem;
  width: inherit;
}

#another-container-lol {
  border: 1px $diner-green solid;
  border-radius: 30px;
  margin: 0 auto;
  text-align: left;
  width: 80%;
  padding: 2rem;
}

#return-button {
  color: hsl(0, 0%, 35%);
  margin-left: -0.5rem;
  font-weight: 700;
  transition: all 0.1s ease-in-out;

  &:hover {
    text-decoration: none;
    letter-spacing: 1px;
  }

}

</style>
