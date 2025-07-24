<script setup>

import { getOrderList } from "../store.js";
import ProductTable from "../components/ProductTable.vue";

const products = getOrderList();

</script>

<template>

<h1> List of Orders </h1>

<ProductTable v-model:products="products"/>

</template>