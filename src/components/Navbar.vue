<template>
  <div class="sm:bg-white top-0 z-10 sticky w-screen sm:w-auto">
    <nav
      class="pl-0 px-6 sm:py-5 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center sm:order-first"
    >
      <div class="flex items-center justify-between mt-0">
        <!-- Mobile menu button -->
        <div
          @click="toggleNav"
          class="flex md:hidden ml-auto bg-white bg-opacity-70"
        >
          <button
            type="button"
            class="text-[#003368] hover:text-gray-900 focus:outline-none focus:text-gray-800"
            id="mobile-menu-button"
          >
            <svg viewBox="0 0 24 24" class="w-14 h-14 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        class="hidden md:block sm:mr-16 sm:ml-32 sm:ml-5 md:ml-[100px] md:mr-[50px] lg:ml-[200px] lg:ml-[120px] xl:ml-[240px]"
      >
        <ul
          class="flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"
        >
          <img
            src="../assets/ODMenvios.webp"
            onerror="this.src='../assets/ODMenvios.png'"
            class="w-48 2xl:mr-[150px]"
          />
          <Links />
        </ul>
      </div>
      <div class="w-full relative sm:hidden z-0 top-[-56px]">
        <div
          v-if="showMenu"
          @click="toggleNav"
          :class="showMenu ? 'bg-black opacity-25' : ''"
          class="absolute w-screen h-screen"
        ></div>
        <div class="absolute w-3/4 bg-gray-200" @click="toggleNav">
          <img
            src="../assets/ODMenvios.webp"
            onerror="this.src='../assets/ODMenvios.png'"
            class="sm:hidden w-full p-8"
            :class="showMenu ? 'flex' : 'hidden'"
          />
          <ul
            :class="
              showMenu
                ? 'flex flex-col justify-start opacity-100 w-full'
                : 'hidden'
            "
            class="flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"
          >
            <Links />
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Links from "./Links.vue";

export default {
  components: { Links },
  name: "Navbar",
  setup() {
    let showMenu = ref(false);

    const toggleNav = () => {
      showMenu.value = !showMenu.value;
    };

    const closeMenu = (event) => {
      const mobileButton = document.getElementById("mobile-menu-button");
      if (mobileButton && !mobileButton.contains(event.target)) {
        showMenu.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener("click", closeMenu);
    });

    return { showMenu, toggleNav };
  },
};
</script>
