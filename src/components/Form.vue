<template>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" v-model="formData.name" required />
      </label>
      <label>
        Email:
        <input type="email" v-model="formData.email" required />
      </label>
      <label>
        Message:
        <textarea v-model="formData.message" required></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
import { sendMail } from '../mailer.js';

  
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
   
      async handleSubmit() {
        try {
          await sendMail(this.formData);
          alert('Message sent successfully!');
          this.formData = { name: '', email: '', message: '' };
        } catch (error) {
          console.error(error);
          alert('An error occurred. Please try again later.');
        }
      },
    
  };
  </script>
  