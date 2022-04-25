<template>
  <b-form @submit="createRecipeQuery">
    <b-form-group
      id="recipe-name"
        label="Recipe Name"
        label-for="recipe-name-entry"
        description="What is this recipe called?"
      >
      <b-form-input
        id='recipe-name-entry'
        type='text'
        v-model="form.name"
        required
      />
    </b-form-group>

    <b-form-group
      id = "recipe-desc"
      label = "Description"
      label-for = "recipe-desc-entry"
      description = "A brief summary of the final product"
    >

    <b-form-textarea
      id = "recipe-desc-entry"
      v-model="form.description"
      required
    >
    </b-form-textarea>

    </b-form-group>

    <b-form-group
      id = "instruction"
      label = "Instructions"
      label-for = "instruction-entry"
      description = "The instructions to make the recipe"
    >

    <b-form-textarea
      id = "instruction-entry"
      v-model="form.recipe"
      required
    >
    </b-form-textarea>

    </b-form-group>

    <b-form-group
      id = "recipe-tags"
      label = "Tags (optional)"
      label-for = "recipe-tags-entry"
      description = "Key words for this recipe (i.e: gluten-free, vegan, etc.)"
    >

      <b-form-tags input-id="recipe-tags" v-model="form.tags"/>

    </b-form-group>

    <b-button
      type = "submit"
      variant = "success"
    >
      Add Recipe
    </b-button>

  </b-form>
</template>

<script>
import axios from "axios";

export default {
  name: "CreateRecipeForm",
  methods: {
    createRecipeQuery() {
      // Code to actually create the recipes
      const clonedForm = { ...this.form };
      axios.post("http://localhost:5000/recipes", clonedForm, { "Access-Control-Allow-Origin": "*" }).then(
        (response) => {
          this.$emit("createNewRecipe", response.data);
        },
      );
    },

  },

  data() {
    return {
      form: {
        name: "",
        description: "",
        recipe: "",
        tags: [],
      },
    };
  },
};
</script>

<style lang="scss">

  @import "@/assets/scss/colours.scss";

</style>
