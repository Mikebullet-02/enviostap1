import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  getDoc,
} from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../../firebaseConfig";

export const userDatabaseStore = defineStore("database", {
  state: () => {
    return {
      documents: [],
      destinos: [],
    };
  },
  actions: {
    // Get all documents from a collection
    async getDocuments(collectionName) {
      this.documents = [];
      const q = query(collection(db, collectionName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        this.documents.push(doc.data());
      });
    },
    // Get document by key
    async getDocumentByKey(collectionName, key, value) {
      const q = query(collection(db, collectionName), where(key, "==", value));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        this.destinos = doc.data().destinos;
      });
    },
    // Add document to a collection
    async addUrl(name, phoneNumber, enterprise, city, email, envios) {
      this.loadingDoc = true;
      try {
          const docObjeto = {
              nombre: name,
              telefono: phoneNumber,
              empresa: enterprise,
              ciudad: city,
              email: email,
              selectedOption: envios
          };
          const q = query(collection(db, 'contacts'))
          const docRef = await addDoc(q, docObjeto);
          this.documents.push({ id: docRef.id, ...docObjeto });
      } catch (error) {
          console.log(error);
      } finally {
          this.loadingDoc = false;
      }
  },
  },
});
