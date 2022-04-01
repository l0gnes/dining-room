<template>
  <div class="home">

    <ModalContainer
      title="Create a new recipe"
      ref="create-recipe-modal"
    >
      <CreateRecipeForm/>
    </ModalContainer>

    <div id="recipe-page-header">

    </div>
    <div id="recipe-page-backpage">

      <div id="recipe-page-container">

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

        <hr style="width:75%;"/>

      </div>

    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import CreateRecipeForm from "@/components/forms/CreateRecipeForm.vue";
import ModalContainer from "@/components/ModalContainer.vue";

export default {
  name: "Home",
  components: {
    CreateRecipeForm,
    ModalContainer,
  },
  methods: {
    openRecipeCreateModal() {
      this.$refs["create-recipe-modal"].showModal();
    },
  },
};
</script>

<style lang="scss">

  @import "@/assets/scss/colours.scss";

  #recipeFormContainer {
    width: 50%;
  }

  #recipe-page-header {
    height: 60vh;
    background: linear-gradient(180deg, rgb(245, 168, 255) 0%, rgba(244,185,184,1) 100%);
    box-shadow: white 0 -1rem 1rem 0 inset;
  }

  #recipe-page-backpage {
    background: white;
    height: 100%;
    width: 100%;
    z-index: 1;
    overflow: y;
    position: absolute;
  }

  #recipe-page-container {
    z-index: 10;
    margin: 0 auto;
    background: white;
    box-shadow: hsla(0, 0%, 0%, 0.5) 0px 0px 5px 1px;
    width: 70%;
    transform: translateY(-17.5vw);
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
      color: black !important;
      background: hsla(0, 0%, 0%, 0.1);
    }

  }

</style>
