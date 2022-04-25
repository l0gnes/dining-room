<template>
  <b-overlay :show="showOverlay">
    <b-card
      class="recipe-card-container"
      text-variant="white"
      v-bind:title="name"
      :aria-hidden="showOverlay ? 'true' : null"
    >
      <div class="recipe-card-main-content">
        {{ shortenedDesc }}
      </div>

      <div class="recipe-card-tag-list">

        <b-badge
          class="recipe-card-tag"
          pill
          variant="success"
          v-for="t in tags"
          v-bind:key="t"
        >
          {{ t }} <!-- If this works I will be furious-->
        </b-badge>

      </div>

      <div class="recipe-card-footer-text">

        <!-- TODO: You know what you have to do here (In case you don't; perish.) -->
        <a :href="'/recipe/' + this.id">View Recipe</a>
        <a v-on:click="this.editRecipe" href="#">Edit</a>
        <a v-on:click="this.deleteRecipe" href="#">Delete</a>
      </div>

    </b-card>
  </b-overlay>
</template>

<script>
import axios from "axios";

const shortenLength = 120; // However many characters the description can be before it's shortened

export default {
  name: "RecipeThing",
  props: {
    id: Number,
    name: String,
    description: String,
    tags: Array,
    image: String,
  },

  data() {
    return {
      showOverlay: false,
    };
  },

  computed: {
    shortenedDesc() {
      if (this.description.length > shortenLength) {
        let newDescription = "";
        const splitDescription = this.description.split(" ");

        while (newDescription.length - 1 < shortenLength) {
          newDescription += `${splitDescription.shift()} `; // Shift removes the first item from the array for some reason
        }

        if (splitDescription.length > 0) {
          newDescription += "[...]";
        }

        return newDescription.trimEnd();
      }

      return this.description;
    },
  },

  methods: {
    deleteRecipe() {
      axios(
        {
          method: "delete",
          url: `http://localhost:5000/recipes/${this.id}`,
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      ).then(
        () => {
          this.showOverlay = true; // Make this true since we dont want them to be able to access this after it's deleted
          this.$emit("deleteRecipe");
        },
      );
    },

    editRecipe() {
      this.$emit("triggerEditRecipe", this.id);
    },
  },
};
</script>

<style lang="scss">

  @import "@/assets/scss/colours.scss";

  .recipe-card-footer-text {
    font-size: smaller;

    & > a {
      color: $diner-lime; // I hope this also works
      margin-right: 0.5rem;
      transition: all ease-in-out 0.5s;

      &:hover {
        text-decoration: none;
        font-size: normal;
        color: white;
      }
    }
  }

  .recipe-card-tag {
    margin-right: 0.5rem;
  }

</style>
