<script setup>

import { getAllProducts, addProduct} from "../store.js";
import ProductTable from "../components/ProductTable.vue";

const products = getAllProducts;

</script>

<template>

<h1> Overview </h1>

<ProductTable v-model:products="products"/>
<button>
    <RouterLink to="/add">Add a product</RouterLink>
</button>

<button>
    <RouterLink to="/order">Go to Orders</RouterLink>
</button>
</template>