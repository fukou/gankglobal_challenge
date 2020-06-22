<template>
  <div class="container lg:w-8/12 my-16 mx-auto px-8">
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
        {{ $t("backHome") }}
      </router-link>
    </button>

    <div v-if="drinks.length !== 0" class="rounded overflow-hidden shadow-lg bg-white">
      <div class="lg:max-w-full lg:flex">
        <div
          class="h-48 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          :style="{ backgroundImage: `url(${drinks.strDrinkThumb})` }"
        ></div>
        <div class="px-6 py-8">
          <h1 class="font-bold text-3xl mb-2">{{ drinks.strDrink }}</h1>
          <div class="mb-4">
            <span
              class="inline-block my-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >{{ drinks.strCategory }}</span>
            <span
              class="inline-block my-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >{{ drinks.strGlass }}</span>
            <span
              class="inline-block my-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >{{ drinks.strAlcoholic }}</span>
          </div>
          <h2 class="font-bold text-xl mb-2 text-gray-800">{{ $t("ingridient") }}</h2>
          <ul class="mb-4">
            <li class="flex items-center justify-between" v-for="(i, key) in ingredient" :key="key">
              <!-- <span class="text-left">{{ i }}</span> -->
              <!-- <div class="flex-auto border-dotted border-b-2 border-gray-600 mx-4"></div> -->
              {{ i }}
            </li>
          </ul>
          <!-- <div class="text-gray-700 text-base">
              <p v-for="i in 5" :key="i">{{ i }}</p>
            </div>
            <div class="text-gray-700 text-base">
              <p>{{ drinks.strIngredient1 }}</p>
          </div>-->
          <h2 class="font-bold text-xl mb-2 text-gray-800">{{ $t("instruction") }}</h2>
          <p class="text-gray-700 text-base mb-6">{{ drinks.strInstructions }}</p>
        </div>
      </div>
    </div>
    <div v-else>{{ $t("loading") }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      drinks: [],
      ingredient: [],
      titleDetail: ""
    };
  },
  metaInfo() {
    return {
      title: this.titleDetail + " — Cocktailspedia"
      // ...
    };
  },
  props: ["id"],
  async mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + this.id
        )
        .then(res => {
          this.drinks = res.data.drinks[0];
          this.titleDetail = res.data.drinks[0].strDrink;
          this.getIngredients();
          console.log(this.titleDetail);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getIngredients() {
      for (let i = 1; i < 15; i++) {
        if (this.drinks["strIngredient" + i] || this.drinks["strMeasure" + i]) {
          this.ingredient.push(
            this.drinks["strMeasure" + i] +
              "of " +
              this.drinks["strIngredient" + i]
          );
        }
      }
    }
  }
};
</script>
