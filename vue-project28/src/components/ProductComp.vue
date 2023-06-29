<template>
    <div class="products">
      <div class="card-wrapper" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.imageUrl" class="card-img-top" alt="Product Image" loading="lazy">
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">Price: R{{ product.description }}</p>
            <p class="card-text">{{ product.content }}</p>
            <button class="add-to-cart-btn" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['products']),
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
  },
};

  </script>
  
  <style scoped>
  .card-wrapper {
    display: flex;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
  }
  
  .card {
    width: 90%;
  }
  
  .card-img-top {
    width: 100%;
    height: 50%;
    object-fit: cover;
    object-position: center;
  }
  .card-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 25px;
    margin-bottom: 10px;
  }
  
  .add-to-cart-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .add-to-cart-btn:hover {
    background-color: #0056b3;
  }
  
  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  </style>
  