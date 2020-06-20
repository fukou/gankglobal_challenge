<template>
  <div
    class="max-w-sm w-full lg:max-w-full lg:flex bg-white border-solid border border-gray-400 rounded overflow-hidden"
  >
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="{ backgroundImage: `url(${thumbnail})` }"
    ></div>
    <div class="p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <p class="text-sm text-gray-600 flex items-center">{{ category }}</p>
        <h1 class="text-gray-900 font-bold text-xl mb-2">{{ name }}</h1>
        <p class="text-sm text-gray-600 flex items-center">{{ date }}</p>
      </div>
      <button
        @click="readMore"
        class="mt-4 bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-transparent hover:border-blue-500 rounded"
      >Read more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "recipes",
  props: {
    category: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: String,
    thumbnail: String
  },
  methods: {
    readMore() {
      this.$emit("viewMore");
    }
  }
};
</script>
