<template>
  <Navbar></Navbar>
  <Header></Header>
  <div
    id="envios"
    class="flex flex-col w-full 2xl:px-32 xl:px-32 lg:px-0 md:px-0 sm:px-0 px-0 my-auto"
  >
    <Envios></Envios>
  </div>
  <div
    id="cobertura"
    class="flex flex-col w-full sm:w-full md:w-full lg:w-auto xl:w-auto 2xl:w-full px-3 2xl:px-32 xl:px-32 lg:px-0 md:px-0 sm:lg:px-0 my-auto"
  >
    <h1
      class="text-4xl font-black capitalize ml-5 sm:ml-8 md:ml-14 lg:ml-14 xl:ml-14 2xl:ml-24 pt-16 pb-5 sm:pt-15 sm:pb-5"
    >
      COBERTURA DE ENVÍOS
    </h1>
    <h2
      class="text-2xl font-regular ml-5 sm:ml-10 md:ml-16 lg:ml-18 xl:ml-16 2xl:ml-32 pb-8"
    >
      Selecciona la ciudad desde donde envías tu paquete y el destino.
    </h2>
    <div class="mx-auto">
      <div
        class="flex flex-wrap justify-center pt-0 pb-5 pl-0 sm:pl-0 lg:pr-32 xl:pl-24 md:px-auto sm:pb-8 space-x-0 sm:space-x-0 lg:space-x-0"
      >
        <div class="w-full md:w-1/2 lg:w-1/2 px-4 mb-8 md:mb-8">
          <select
            v-model="origen"
            @change="(e) => cargar(e)"
            class="block w-[300px] sm:w-[580px] md:w-[300px] lg:w-80 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="¿Dónde dejar tus paquetes?"
          >
            <option>¿Dónde dejar tus paquetes?</option>
            <option
              v-for="destinos in databaseStore.$state.documents"
              :key="destinos.id"
              :value="destinos"
            >
              {{ destinos.origen }}
            </option>
          </select>
          <div class="mt-4 flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold">Dirección</h2>
              <h3 class="text-gray-500 text-xl sm:text-xl">De:</h3>
              <p
                v-if="origen != null"
                class="text-xl sm:text-2xl text-[#003386]"
              >
                {{ origen.ubicacion }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 pl-4 mb-0 md:mb-0">
          <select
            v-model="destino"
            class="block w-[300px] sm:w-[580px] md:w-[300px] lg:w-80 py-3 px-4 leading-tight text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[#D9D9D9] dark:border-white dark:placeholder-gray-200 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">¿Dónde recoger tus paquetes?</option>
            <option
              v-for="destinos in databaseStore.$state.destinos"
              :key="destinos.id"
              :value="destinos"
            >
              {{ destinos.nombre }}
            </option>
          </select>
          <div class="mt-4 flex items-center">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="text-blue-900 mr-4 w-16 h-16 sm:w-30 sm:h-30"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <h2 class="text-2xl sm:text-3xl font-bold">Dirección</h2>
              <h3 class="text-gray-500 text-xl sm:text-xl">A:</h3>
              <p
                v-if="destino != null"
                class="text-xl sm:text-2xl text-[#003386]"
              >
                {{ destino.direccion }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 sm:gap-3 place-items-center px-auto sm:px-fixed xl:px-auto mx-0 sm:mx-20 xl:px-20"
    >
      <div
        v-if="destino != null"
        class="bg-gray-800 p-4 rounded-lg text-center w-full sm:w-full xl:w-3/4"
      >
        <p
          class="font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
        >
          Sobres
        </p>
        <p
          class="font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
        >
          Hasta 25 hojas
        </p>
        <p
          class="mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
        >
          {{ formatterMXN.format(destino.precios.SOB) }}
        </p>
      </div>
      <div
        v-if="destino != null"
        class="bg-gray-800 p-4 rounded-lg text-center w-full sm:w-full xl:w-3/4"
      >
        <p
          class="font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
        >
          Paquetes
        </p>
        <p
          class="font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
        >
          De 0 - 1 kg.
        </p>
        <p
          class="mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
        >
          {{ formatterMXN.format(destino.precios.PAQ) }}
        </p>
      </div>
      <div
        v-if="destino != null"
        class="bg-gray-800 p-4 rounded-lg text-center w-full sm:w-full xl:w-3/4"
      >
        <p
          class="font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
        >
          Cajas
        </p>
        <p
          class="font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
        >
          De 1 - 10 kg.
        </p>
        <p
          class="mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
        >
          {{ formatterMXN.format(destino.precios.C1) }}
        </p>
      </div>
      <div
        v-if="destino != null"
        class="bg-gray-800 p-4 rounded-lg text-center w-full sm:w-full xl:w-3/4"
      >
        <p
          class="font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
        >
          Cajas
        </p>
        <p
          class="font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
        >
          De 11 - 20 kg.
        </p>
        <p
          class="mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
        >
          {{ formatterMXN.format(destino.precios.C2) }}
        </p>
      </div>
      <div
        v-if="destino != null"
        class="bg-gray-800 p-4 rounded-lg text-center col-span-1 sm:col-span-2 w-full sm:w-1/2"
      >
        <p
          class="font-extrabold text-2xl sm:text-4xl text-center sm:pt-2 text-white"
        >
          Maletas
        </p>
        <p
          class="font-extrabold text-xl sm:text-3xl text-center sm:pt-5 text-gray-300"
        >
          De 21 - 30 kg.
        </p>
        <p
          class="mt-0 sm:mt-4 text-3xl sm:text-4xl text-center sm:pt-0 sm:pb-0 text-gray-50"
        >
          {{ formatterMXN.format(destino.precios.C3) }}
        </p>
      </div>
    </div>

    <div
      class="h-auto w-full pt-5 pb-5 mt-5 sm:w-full text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0 px-3"
    >
      <p>***VALOR DE REFERENCIA SUJETO A CAMBIOS***</p>
    </div>
  </div>
  <div
    id="calcula"
    class="flex flex-col w-full 2xl:px-32 xl:px-32 md:px-0 sm:lg:px-0 px-0 my-auto"
  >
    <Calculadora></Calculadora>
  </div>
  <div
    id="tarifas"
    class="flex flex-col w-full 2xl:px-32 xl:px-32 md:px-0 sm:lg:px-0 px-0 my-auto"
  >
    <Formulario></Formulario>
  </div>
  <Footer></Footer>
</template>

<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import Envios from "./components/Envios.vue";
import Calculadora from "./components/Calculadora.vue";
import Footer from "./components/Footer.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { userDatabaseStore } from "./stores/database.js";
import Formulario from "./components/Formulario.vue";

const databaseStore = userDatabaseStore();
onMounted(async () => {
  await databaseStore.getDocuments("envios");
});
const origen = ref(null);
const destino = ref(null);
// on origen change
const cargar = async () => {
  destino.value = null;
  await databaseStore.getDocumentByKey("envios", "id", origen.value.id);
};

const formatterMXN = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
});
</script>
