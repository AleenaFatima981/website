<!-- Home.vue -->
<script setup>
import { ref } from "vue";
const name = ref("Bake It");
const slogan = ref("The best bakery in town");
const products = ref([
{ id: 1, name: "Chocolate Cake", price: "$15", image: "https://th.bing.com/th/id/OIP.8yQ6e2fP2mCPD3laG8QonwHaFA?pid=ImgDet&rs=1",  rating: 4.5 },

  { id: 2, name: "Vanilla Cupcake", price: "$2", image: "https://th.bing.com/th/id/R.47a8dcbb067bbc69873a3b9cb8bf868a?rik=JWfEa1pBCr6mbQ&pid=ImgRaw&r=0&sres=1&sresct=1", rating: 4 },
  { id: 3, name: "Oatmeal Cookie", price: "$1", image: "https://th.bing.com/th/id/R.0f55c5c53fd91296c4c9cd99c6cdf3ff?rik=efHQw1tV5wPZ%2bQ&pid=ImgRaw&r=0", rating: 3.5 }
]);
const banner = ref("Get 10% off on your first order with code BAKEIT10");
</script>
<template>
  <div id="home">
    <h1>{{ name }}</h1>
    <p>{{ slogan }}</p>
    <div class="products">
      <div class="product" v-for="(product, index) in products" :key="product.id">
        <img v-bind:src="product.image" v-bind:alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
        <p>{{ product.rating }} stars</p>
        <button>Add to cart</button>
      </div>
    </div>
    <div class="banner">
      <p>{{ banner }}</p>
    </div>
  </div>
  
</template>

<style>
#home {
  background-color: #f0f0f0;
  color: #333333;
  font-family: "Roboto", sans-serif;
  text-align: center;
}

#home h1 {
  font-size: 36px;
  font-weight: bold;
}

#home p {
  font-size: 18px;
}

.products {
  display: flex;
  justify-content: space-around;
}

.product {
  margin: 20px;
}

.product img {
  width: 200px;
  height: 200px;
}

.product h3 {
  font-size: 24px;
}

.product p {
  font-size: 18px;
}

.product button {
  background-color: #333333;
  color: #ffffff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.banner {
  background-color: #d81515;
  color: #ffffff;
}
</style>
