<!-- Reviews.vue -->
<script setup>
import { ref } from "vue";
const name = ref("Bake It");
const reviews = ref([
  { id: 1, name: "Alice", rating: 5, comment: "I ordered a chocolate cake for my birthday and it was delicious. The cake was moist and fluffy, and the frosting was rich and creamy. The delivery was on time and the packaging was neat. I highly recommend this bakery." },
  { id: 2, name: "Bob", rating: 4, comment: "I tried the vanilla cupcakes and they were very good. The cupcakes were soft and sweet, and the toppings were colorful and tasty. The only thing I didn't like was that they were a bit too small for my liking." },
  { id: 3, name: "Charlie", rating: 3, comment: "I bought some oatmeal cookies and they were okay. The cookies were crunchy and chewy, but they lacked flavor and freshness. They seemed like they were made a few days ago. I think they could improve their quality." }
]);
const rating = ref(0);
const comment = ref("");
const errorMessage = ref("");

const addReview = () => {
  if (rating.value > 0 && comment.value.trim()) {
    errorMessage.value = "";
    // code to add the review to the database
  } else {
    errorMessage.value = "Please enter your rating and comment.";
  }
};
</script>
<template>
  <div id="reviews">
    <h1>Reviews</h1>
    <p>Here are some of the reviews from our happy customers:</p>
    <ul class="reviews">
      <li v-for="(review, index) in reviews" :key="review.id">
        <h3>{{ review.name }}</h3>
        <p>{{ review.rating }} stars</p>
        <p>{{ review.comment }}</p>
      </li>
    </ul>
    <p>You can also write your own review and share your feedback with us:</p>
    <form @submit.prevent="addReview">
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option value="0">Select a rating</option>
        <option value="1">1 star</option>
        <option value="2">2 stars</option>
        <option value="3">3 stars</option>
        <option value="4">4 stars</option>
        <option value="5">5 stars</option>
      </select>
      <label for="comment">Comment:</label>
      <textarea id="comment" v-model.trim="comment"></textarea>
      <button>Submit</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .Contact{
#reviews {
  background-color: #f0f0f0;
  color: #333333;
  font-family: "Roboto", sans-serif;
  text-align: center;
}

#reviews h1 {
  font-size: 36px;
  font-weight: bold;
}

#reviews p {
  font-size: 18px;
}

.reviews {
  list-style-type: none;
}

.reviews li {
  margin: 20px;
}

.reviews h3 {
  font-size: 24px;
}

.reviews p {
  font-size: 18px;
}

#reviews form {
  margin: 20px auto;
}

#reviews label {
  display: block;
}

#reviews select {
  width: 200px;
}

#reviews textarea {
  width: 300px;
  height: 100px;
}

#reviews button {
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
}}}
</style>
