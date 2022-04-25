<template>
  <b-form @submit="editRecipeQuery">
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

    <div id="edit-recipe-button-container">
      <b-button
        type = "submit"
        variant = "success"
      >
        Edit Recipe
      </b-button>

      <b-button
        type = "button"
        variant = "secondary"
      >
        Cancel
      </b-button>
    </div>

  </b-form>
</template>

<script>
import axios from "axios";

export default {
  name: "EditRecipeForm",
  methods: {
    editRecipeQuery() {
      const duplicate = { ...this.form };

      axios.put(`http://localhost:5000/recipes/${this.recipeId}`, duplicate, { "Access-Control-Allow-Origin": "*" })
        .then(
          () => {
            this.$emit("triggerEditRecipe", this.recipeId, duplicate);
          },
        );
    },

    updateForm() {
      axios.get(`http://localhost:5000/recipes/${this.recipeId}`)
        .then(
          (response) => {
            const duplicate = { ...response.data };
            delete duplicate.id;
            this.form = duplicate;
          },
        );
    },
  },

  data() {
    return {
      recipeId: null,
      form: {
        name: "",
        description: "",
        recipe: "",
        tags: [],
      },
    };
  },

  created() {
    this.recipeId = localStorage.getItem("currentlyEditing");
    localStorage.removeItem("currentlyEditing");
    this.updateForm();
  },
};
</script>

<style lang="scss">

  @import "@/assets/scss/colours.scss";

  #edit-recipe-button-container {
    & > button {
      margin-right: 0.5rem;
    }
  }

</style>
