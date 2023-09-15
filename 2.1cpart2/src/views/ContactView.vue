<!-- Contact.vue -->

<script setup>
import { ref } from "vue";
const name = ref("Bake It");
const address = ref("123 Main Street, City, Country");
const phone = ref("+1234567890");
const email = ref("bakeit@example.com");

const message = ref("");
const errorMessage = ref("");

const sendMessage = () => {
  if (message.value.trim()) {
    errorMessage.value = "";
    // code to send the message to the bakery
  } else {
    errorMessage.value = "Please enter your message.";
  }
};
</script>
<template>
  <div id="Contact">
    <h1>Contact Us</h1>
    <p>We would love to hear from you. You can reach us by any of the following methods:</p>
    <ul>
      <li>Address: {{ address }}</li>
      <li>Phone: {{ phone }}</li>
      <li>Email: {{ email }}</li>
    </ul>
    <p>You can also follow us on our social media accounts:</p>
    <ul class="socials">
      <li v-for="(social, index) in socials" :key="social.name">
        <a v-bind:href="social.url" target="_blank">
          <img v-bind:src="social.icon" v-bind:alt="social.name" />
        </a>
      </li>
    </ul>
    <p>Or you can send us a message using the form below:</p>
    <form @submit.prevent="sendMessage">
      <label for="message">Message:</label>
      <textarea id="message" v-model.trim="message"></textarea>
      <button>Send</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<style>
#contact {
  background-color: #f0f0f0;
  color: #333333;
  font-family: "Roboto", sans-serif;
  text-align: center;
}

#contact h1 {
  font-size: 36px;
  font-weight: bold;
}

#contact p {
  font-size: 18px;
}

#contact ul {
  list-style-type: none;
}

#contact li {
  margin: 10px;
}

.socials {
  display: flex;
  justify-content: center;
}

.socials li {
  margin: 10px;
}

.socials img {
  width: 50px;
  height: 50px;
}

#contact form {
  margin: 20px auto;
}

#contact label {
  display: block;
}

#contact textarea {
  width: 300px;
  height: 100px;
}

#contact button {
  background-color: #333333;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.error {
  color: #ff0000;
}
</style>
