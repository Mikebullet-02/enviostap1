import {
  defineStore
} from "pinia";

export const userDatabaseStore = defineStore("database", {
  state: () => {
    return {
      documents: [],
    };
  },
  actions: {

  },
});