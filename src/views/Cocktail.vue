<template>
  <div class="container my-16 mx-auto px-8">
    <div class="flex items-center justify-between mb-8">
      <input
        v-model="searchKeywords"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mr-4"
        type="search"
        placeholder="Search cocktail...."
      />
      <button
        type="submit"
        @click.stop.prevent="searchButton()"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Search
      </button>
    </div>
    <div class="mb-16">
      <h1 class="text-2xl font-bold my-6">Cocktail Recommendation</h1>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"
        v-if="drinks.length !== 0"
      >
        <Recommended
          v-for="(drink, index) in drinks.slice(0, 4)"
          @viewMore="detail(drink.idDrink)"
          :key="index"
          :category="drink.strCategory"
          :title="drink.strDrink"
          :thumbnail="drink.strDrinkThumb"
        />
      </div>
      <div v-else>No recommendation available</div>
    </div>
    <h1 class="text-2xl font-bold mb-6">Cocktail Recipes</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      v-if="drinks.length !== 0"
      v-infinite-scroll="load"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="limit"
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
    <div v-else>No recipes available</div>
  </div>
</template>

<script>
import axios from "axios";

import Recommended from "@/components/Recommended.vue";
import Recipes from "@/components/Recipes.vue";

export default {
  metaInfo: {
    title: "Cocktailspedia",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  components: {
    Recommended,
    Recipes,
  },
  data() {
    return {
      drinks: [],
      limit: 15,
      busy: false,
      searchKeywords: "",
    };
  },
  created() {
    this.load();
  },
  methods: {
    load() {
      // randomize the recipe upon refresh :^)
      let charset = "abcdefghijklmnoprst";
      let randomized = charset.charAt(
        Math.floor(Math.random() * charset.length)
      );

      this.busy = true;
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" +
            randomized
        )
        .then((res) => {
          let append = res.data.drinks.slice(
            this.drinks.length,
            this.drinks.length + this.limit
          );
          this.drinks = this.drinks.concat(append);

          this.busy = false;
          // console.log(this.drinks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    detail(id) {
      this.$router.push("/recipe/" + id);
    },
    searchButton() {
      this.$router.push("/search/" + this.searchKeywords);
      // console.log(
      //   "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" +
      //     this.searchKeywords
      // );
    },
  },
};
</script>
