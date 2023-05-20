<template>
  <div
    class="bg-gray-300 w-full sm:w-full md:w-full lg:w-auto xl:w-auto 2xl:w-auto mt-auto mb-0 h-auto"
  >
    <h1
      class="text-4xl font-black capitalize ml-5 sm:ml-10 md:ml-14 lg:ml-14 xl:ml-14 2xl:ml-24 pt-10 pb-5"
    >
      TIPOS DE ENVÍOS
    </h1>
    <div
      class="flex flex-wrap justify-center items-center gap-0 sm:gap-2 md:gap-4"
    >
      <div
        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-60 xl:w-72 sm:h-96"
      >
        <div class="p-5 sm:p-5">
          <h1
            class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"
          >
            Sobres
          </h1>
          <p
            class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"
          >
            Hasta 25 hojas
          </p>
        </div>
        <img
          class="mr-5 sm:w-40 sm:h-28 w-32 h-28 mt-[-100px] sm:mx-auto ml-48 sm:mt-16 sm:mb-5"
          src="../assets/SobreODM.webp"
          onerror="this.src='../assets/SobreODM.png'"
          alt="Sobre"
        />
      </div>
      <div
        class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-60 xl:w-72 sm:h-96"
      >
        <div class="p-5 sm:p-5">
          <h1
            class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7"
          >
            Paquetes
          </h1>
          <p
            class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"
          >
            De 0 a 1 kg
          </p>
        </div>
        <img
          class="mr-5 sm:w-36 sm:h-36 w-32 h-32 mt-[-100px] sm:mx-auto ml-48 sm:mt-7 sm:mb-0"
          src="../assets/CajaODM.webp"
          onerror="this.src='../assets/CajaODM.png'"
          alt="Paquete"
        />
      </div>
      <div
        class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-60 xl:w-72 sm:h-96"
      >
        <div class="p-5 pt-3 sm:p-5">
          <h1
            class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"
          >
            Paquetes
          </h1>
          <span
            class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"
          >
            <p>De 1-10 kg</p>
            <p>De 11-20 kg</p>
            <p>De 21-30 kg</p>
          </span>
        </div>
        <img
          class="mr-5 sm:w-40 sm:h-40 w-32 h-36 mt-[-150px] sm:mx-auto ml-48 sm:mt-[-5px] sm:mb-0"
          src="../assets/CajaODM.webp"
          onerror="this.src='../assets/CajaODM.png'"
          alt="Paquetes"
        />
      </div>
      <div
        class="flex flex-col max-w-md bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 my-3 sm:my-0 sm:w-72 md:w-72 lg:w-60 xl:w-72 sm:h-96"
      >
        <div class="p-5 pt-3 sm:p-5">
          <h1
            class="text-2xl sm:text-3xl font-extrabold text-left sm:text-center text-gray-800 dark:text-white pt-0 sm:pt-7 sm:pb-5"
          >
            Maletas
          </h1>
          <span
            class="mt-1 text-2xl sm:mt-16 sm:mb-0 text-gray-800 text-left sm:text-center dark:text-gray-400"
          >
            <p>De 1-10 kg</p>
            <p>De 11-20 kg</p>
            <p>De 21-30 kg</p>
          </span>
        </div>
        <img
          class="mr-5 sm:w-24 sm:h-36 w-32 h-36 mt-[-150px] sm:mx-auto ml-48 sm:mt-0 sm:mb-0"
          src="../assets/maleta.webp"
          onerror="this.src='../assets/maleta.png'"
          alt="Maletas"
        />
      </div>
    </div>

    <div
      class="h-auto w-auto pt-5 pb-5 mt-10 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"
    >
      <p>VOLUMEN MÁXIMO EN TU ENVÍO:</p>
      <p>65 X 50 X 55 = 30cm^3</p>
    </div>
  </div>
</template>
