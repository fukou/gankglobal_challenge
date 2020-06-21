<template>
  <div>
    <div class="container my-16 mx-auto px-8">
      <button
        class="mb-6 bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-transparent hover:border-blue-500 rounded"
      >
        <router-link to="/" class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="mr-2"
            fill="currentColor"
          >
            <path
              class="heroicon-ui"
              d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
            />
          </svg>
          Back to home
        </router-link>
      </button>

      <h1 class="font-bold text-3xl mb-16">
        The results for <span class="text-blue-500">"{{ id }}"</span>
      </h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        v-if="drinks.length !== 0"
      >
        <Recipes
          v-for="(drink, index) in drinks"
          @viewMore="detail(drink.idDrink)"
          :key="index"
          :category="drink.strCategory"
          :name="drink.strDrink"
          :thumbnail="drink.strDrinkThumb"
          :date="drink.dateModified"
        />
      </div>
      <div v-else class="text-blue-500 text-2xl flex items-center">
        <span class="mr-2">No recipes found</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path
            d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.54-4.54a5 5 0 0 1 7.08 0 1 1 0 0 1-1.42 1.42 3 3 0 0 0-4.24 0 1 1 0 0 1-1.42-1.42zM9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Recipes from "@/components/Recipes.vue";

export default {
  components: {
    Recipes,
  },
  props: ["id"],
  data() {
    return {
      drinks: [],
    };
  },
  metaInfo() {
    return {
      title: "Keywords for: " + this.id + " — Cocktailspedia",
    };
  },
  async mounted() {
    this.loadSearch();
  },
  methods: {
    loadSearch() {
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + this.id
        )
        .then((res) => {
          this.drinks = res.data.drinks;
          console.log(this.drinks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    detail(id) {
      this.$router.push("/recipe/" + id);
    },
  },
};
</script>
