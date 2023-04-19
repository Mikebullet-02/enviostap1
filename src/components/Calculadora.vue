<template>
  <div class="w-full">
    <h1 class="text-4xl font-black capitalize ml-5 sm:ml-24 py-14">
      CALCULA EL PESO DE TU PAQUETE
    </h1>
    <div class="my-0 mb-0">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-wrap xl:justify-center">
          <img
            src="../assets/Calculadora.webp"
            onerror="this.src='../assets/Calculadora.png'"
            class="h-80 w-80 sm:w-96 sm:h-80"
            alt="CajaCalculadora"
          />
        </div>
        <div class="bg-[#D9D9D9] max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl md:ml-10 font-semibold text-center mt-5">
            Calculadora de peso volumétrico
          </h2>
          <div class="grid grid-cols-1 gap-4 pt-5 mx-full">
            <div class="flex items-center flex-row space-x-4">
              <label
                class="block text-gray-700 text-base font-bold mr-7 text-2xl"
                for="inline-alto"
                >Alto:</label
              >
              <input
                class="flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg"
                v-model="calculos.alto"
                type="text"
                name="inline-alto"
                placeholder="Ingresa el alto"
              />
              <span
                class="flex-none text-gray-700 text-base font-bold ml-2 text-2xl"
                >cm</span
              >
            </div>
            <div class="flex items-center flex-row space-x-4">
              <label
                class="block text-gray-700 text-base font-bold mb-0 mr-3 text-2xl"
                for="inline-ancho"
                >Ancho:</label
              >
              <input
                class="flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg"
                v-model="calculos.ancho"
                type="text"
                name="inline-ancho"
                placeholder="Ingresa el ancho"
              />
              <span
                class="flex-none text-gray-700 text-base font-bold ml-2 text-2xl"
                >cm</span
              >
            </div>
            <div class="flex items-center flex-row space-x-4">
              <label
                class="block text-gray-700 text-base font-bold mb-2 mr-5 text-2xl"
                for="inline-largo"
                >Largo:</label
              >
              <input
                class="flex-1 py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-400 dark:border-gray-700 text-gray-900 font-semibold focus:border-indigo-500 focus:outline-none text-base sm:text-lg"
                v-model="calculos.largo"
                type="text"
                name="inline-largo"
                placeholder="Ingresa el largo"
              />
              <span
                class="flex-none text-gray-700 text-base font-bold ml-2 text-2xl"
                >cm</span
              >
            </div>
          </div>

          <div class="my-4">
            <div class="flex items-center justify-center">
              <span
                class="block text-black text-2xl font-semibold text-center sm:text-left"
              >
                El peso total de tu paquete es:
                <p
                  class="text-center text-4xl"
                  :class="{
                    'text-red-600': peso > 30,
                    'text-black': peso <= 30,
                  }"
                >
                  {{ peso }} Kg
                </p>
                <p class="text-red-600 text-center" v-if="peso > 30">
                  ¡Peso máximo excedido!
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-auto w-auto pt-5 pb-5 text-center bg-blue-900 text-white font-extrabold align-middle text-2xl pl-0 pr-0"
    >
      <p>UTILIZA LA FÓRMULA:</p>
      <p>(Alto(cm) * Ancho(cm) * Largo(cm))/6000</p>
    </div>
  </div>
</template>

<script setup>
import { def } from "@vue/shared";
import { computed, ref } from "vue";
const calculos = ref({
  largo: "",
  ancho: "",
  alto: "",
});
const peso = computed({
  get: () => {
    let resultado = 0;
    resultado =
      (calculos.value.largo * calculos.value.ancho * calculos.value.alto) /
      6000;
    return resultado.toFixed(2);
  },
  set: (value) => {
    calculos.value.largo = value;
    calculos.value.ancho = value;
    calculos.value.alto = value;
  },
});
</script>
