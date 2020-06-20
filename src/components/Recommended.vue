<template>
  <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg">
    <img :src="thumbnail" :alt="title" />
    <div class="px-6 py-4">
      <h1 class="text-gray-900 font-bold text-xl mb-2">{{ title }}</h1>
      <p class="text-gray-700 text-base">
        {{ category }}
      </p>
      <button
        @click="readMore"
        class="mt-4 mb-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Read more
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    // date: String,
    thumbnail: String,
  },
  methods: {
    readMore() {
      this.$emit("viewMore");
    },
  },
};
</script>
