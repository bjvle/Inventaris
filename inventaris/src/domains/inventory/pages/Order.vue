<script setup lang="ts">

import { getOrderList } from "../store.ts";
import ProductTable from "../components/ProductTable.vue";

const products = getOrderList;

</script>

<template>

<h1> List of Orders </h1>

<ProductTable v-model:products="products"/>

</template>