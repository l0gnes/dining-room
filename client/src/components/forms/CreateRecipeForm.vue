<template>
  <b-form>
    <b-form-group
      id="recipe-name"
        label="Recipe Name"
        label-for="recipe-name-entry"
        description="What is this recipe called?"
      >
      <b-form-input
        id='recipe-name-entry'
        type='text'
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

    <b-form-tags input-id="recipe-tags">

    </b-form-tags>

    </b-form-group>

    <b-button
      type = "submit"
      variant = "primary"
    >
      Add Recipe
    </b-button>

  </b-form>
</template>

<script>
export default {
  name: "CreateRecipeForm",
};
</script>
