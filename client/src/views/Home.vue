<template>
  <div class="home">

    <ModalContainer
      title="Create a new recipe"
      ref="create-recipe-modal"
    >
      <CreateRecipeForm @createNewRecipe="createNewRecipeFromFormCallback"/>
    </ModalContainer>

    <ModalContainer
      title = "Edit Recipe"
      ref="edit-recipe-modal"
    >
      <EditRecipeForm
        @triggerEditRecipe="editRecipeFromFormCallback"
        ref="edit-recipe-form"
      />
    </ModalContainer>

    <div id="recipe-page-backpage">

      <RecipePageHeader/>

      <div id="recipe-page-container" class="text-light">

        <div id="mainContentHeader">
          <h1>
            My Recipes
          </h1>

          <div style="float: right;">
                <b-button @click="openRecipeCreateModal()" class="text-muted" id="add-recipe-button">
                  <b-icon-plus/> Add Recipe
                </b-button>
          </div>
        </div>

        <hr style="width:90%;"/>

        <template v-if="this.recipes.length > 0">
          <div id="recipe-card-holder">

            <RecipeCard
              v-for="(r, index) in this.recipes"
              :key="r.id"
              :id="r.id"
              :name="r.name"
              :description="r.description"
              :tags="r.tags"
              :image="r.image"
              v-on:triggerEditRecipe="openEditRecipeModal(r.id)"
              v-on:deleteRecipe="deleteRecipeCard(index)"
            />

          </div>
        </template>

        <template v-else>
          <div id="no-recipes-found">
            <h2>
              There are no recipes in your recipe book!
            </h2>
            <h4><a href="#" @click="openRecipeCreateModal()">Try adding one now</a></h4>
          </div>
        </template>

      </div>

    </div>

    <div id="main-footer-div"> <!-- Footer moment -->
      <p>monkey</p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CreateRecipeForm from "@/components/forms/CreateRecipeForm.vue";
import EditRecipeForm from "@/components/forms/EditRecipeForm.vue";
import ModalContainer from "@/components/ModalContainer.vue";
import RecipePageHeader from "@/components/RecipePageHeader.vue";
import RecipeCard from "@/components/RecipeCard.vue";

import axios from "axios";

export default {
  name: "Home",
  components: {
    CreateRecipeForm,
    ModalContainer,
    RecipePageHeader,
    RecipeCard,
    EditRecipeForm,
  },

  data() {
    return {
      recipes: [], // The array that is going to contain the recipe data once it is loaded
      recipeDataLoaded: false, // Whether or not the query for the recipe data has been completed. Purely for aesthetic things
      currentlyEditing: null,
    };
  },

  methods: {
    openRecipeCreateModal() {
      this.$refs["create-recipe-modal"].showModal();
    },

    openEditRecipeModal(recipeId) {
      console.log(recipeId);

      this.currentlyEditing = recipeId;
      // redundant but i dont want to install VueX
      localStorage.setItem("currentlyEditing", this.currentlyEditing);

      this.$refs["edit-recipe-modal"].showModal();
    },

    deleteRecipeCard(n) {
      this.recipes.splice(n, 1);
    },

    createNewRecipeCard(newRecipe) {
      this.recipes.push(newRecipe);
    },

    // ! TODO(@l0gnes): Rewrite this callback so the newRecipe passed includes the new recipe id
    // Issue: https://github.com/l0gnes/dining-room/issues/25
    createNewRecipeFromFormCallback(newRecipe) {
      this.$refs["create-recipe-modal"].hideModal();
      this.createNewRecipeCard(newRecipe); // I know this is redundant
      this.$bvToast.toast(
        `"${newRecipe.name}" has been added to your recipe list!`,
        {
          title: "Successfully Added Recipe!",
          autoHideDelay: 2500,
          appendToast: true,
          variant: "success",
        },
      );
    },

    editRecipeFromFormCallback(recipeId, newRecipeData) {
      const clonedData = { ...this.recipes };

      // locate the recipe index (save the index to a var)

      const recipeIndex = clonedData.findIndex((r) => (r.value.id === recipeId));

      // replace old data with new data

      clonedData.splice(recipeIndex, 1, newRecipeData);

      // Overwrite the actual recipe data for the page, which should hopefully
      // work because of two-way data-binding.

      this.recipes = clonedData;
    },
  },

  mounted() {
    axios.get("http://localhost:5000/recipes/all").then(
      (response) => {
        this.recipes = response.data;
        this.recipeDataLoaded = true;
      },
    );
  },
};
</script>

<style lang="scss">

  @import "@/assets/scss/colours.scss";

  #recipeFormContainer {
    width: 50%;
  }

  #recipe-page-backpage {
    background: #1e1e1e;
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow: y;
    position: absolute;
  }

  #recipe-page-container {
    z-index: 10;
    margin: 0 auto;
    background: #1e1e1e;
    box-shadow: hsla(0, 0%, 0%, 0.5) 0px 0px 5px 1px;
    width: 70%;
    transform: translateY(-25vh);
    padding: 2rem;
    border-radius: 15px;
    overflow: y;
    height: 100%;
  }

  h1,h2,h3,h4,h5 {
    font-weight: 200 !important;
  }

  #mainContentHeader {
    display: block;
    position: relative;
    line-height: 1.25rem;

    & > h1, button{
      display: inline-block;
      line-height: 2.5rem;
    }
  }

  #add-recipe-button {
    background: none;
    border: none;
    margin: 0rem 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: large;
    border-radius: 50px;

    &:hover {
      color: #008552 !important;
      background: #00855210
    }

  }

  #recipe-card-holder {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;

    & > {
      grid-column-start: 1fr;
      grid-column-end: 1fr;
    }

  }

  #no-recipes-found {
    text-align: center;
    margin-top: 10vh;

    & a {
      color: $diner-green;
      transition: all 0.1s ease-in-out;

      &:hover {
        text-decoration: none;
        color: $diner-lime;
        letter-spacing: 1px;
      }

    }
  }

</style>
