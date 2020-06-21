<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Cocktailspedia</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4"
        >
          {{ $t("linkHome") }}
        </router-link>
        <a
          target="_blank"
          class="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4"
          href="https://fukuo.design/"
          >{{ $t("linkPorto") }}</a
        >
      </div>
      <div class="relative">
        <select
          v-model="$i18n.locale"
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option
            v-for="entry in languages"
            :key="entry.title"
            :value="entry.language"
          >
            <flag :iso="entry.flag" v-bind:squared="false" /> {{ entry.title }}
          </option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
        <!-- <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Language</a
        > -->
      </div>
    </div>
  </nav>
</template>

<script>
import i18n from "@/plugins/i18n";
export default {
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "de", language: "de", title: "German" },
      ],
      activeBtn: "",
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
  },
};
</script>

<style>
.active {
  background-color: white;
  color: black;
}
</style>
