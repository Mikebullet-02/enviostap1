<template>
  <div class="sm:bg-white top-0 z-10 sticky w-screen md:w-screen">
    <nav
      class="pl-0 px-6 sm:py-5 mr-4 md:mr-32 mx-auto md:flex md:justify-between md:items-center sm:order-first sm:mr-16 sm:ml-32 md:ml-[20px] lg:mr-[0px] lg:ml-[55px] xl:pl-[90px] 2xl:mr-28"
    >
      <div class="flex items-center justify-between mt-0">
        <!-- Mobile menu button -->
        <div
          @click="toggleNav"
          class="flex md:hidden ml-[300px] sm:ml-[450px] bg-white bg-opacity-70"
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
      <div class="hidden md:block">
        <ul
          class="flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 lg:space-x-16 xl:space-x-0 2xl:space-x-10 md:mt-0 bg-[#003368] h-screen sm:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"
        >
          <img
            src="../assets/enviostap.png"
            class="w-48 2xl:mr-[150px]"
            alt="Logo ODM envios"
          />
          <Links />
        </ul>
      </div>
      <div class="w-full relative md:hidden z-0 top-[-56px] sm:ml-[-128px]">
        <div
          v-if="showMenu"
          @click="toggleNav"
          :class="showMenu ? 'bg-black opacity-25' : ''"
          class="absolute w-screen h-screen md:h-screen md:w-screen"
        ></div>
        <div class="absolute w-3/4 sm:w-3/4 bg-gray-200" @click="toggleNav">
          <img
            src="../assets/enviostap.png"
            class="md:hidden w-full p-8"
            :class="showMenu ? 'flex' : 'hidden'"
            alto="Logo ODM envios"
          />
          <ul
            :class="
              showMenu
                ? 'flex flex-col justify-start opacity-100 w-full'
                : 'hidden'
            "
            class="flex-col mt-0 mr-20 md:flex md:flex-row md:items-center md:space-x-10 md:mt-0 bg-[#003368] h-screen md:h-auto lg:bg-transparent md:bg-white sm:bg-[#003368] z-0"
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
