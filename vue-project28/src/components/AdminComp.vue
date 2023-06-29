<template>
    <div>
      <button class="btn-sort">Sort Products</button>
      <input type="text" id="title-name" placeholder="Title">
      <input type="text" id="description" placeholder="Description">
      <input type="text" id="image-url" placeholder="Image URL">
      <input type="text" id="content" placeholder="Content">
      <button class="btn-add">Add Product</button>
  
      <table id="tbl-admin">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description(Price)</th>
            <th>Content</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="products in products" :key="products.id">
            <td>{{ products.id }}</td>
            <td>{{ products.title }}</td>
            <td><img :src="products.imageUrl" alt="Product Image" class="product-image"></td>
            <td>{{ products.description }}</td>
            <td>{{ products.content }}</td>
            <td>
              <button class="btn-edit">Edit</button>
              <button class="btn-delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    text-align: left;
  }
  
  thead {
    background-color: #f2f2f2;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  .product-image {
    width: 50px;
    height: auto;
  }
  
  .btn-sort,
  .btn-add {
    margin-bottom: 10px;
  }
  </style>
  