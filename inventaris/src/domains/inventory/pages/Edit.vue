<script setup lang="ts">

import { getProductById, updateProduct, type Product } from "../store.ts";
import ProductForm from "../components/ProductForm.vue";
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();

const oldProduct = getProductById(Number(route.params.id[1]));

const update = (product:Product) => {
    updateProduct(product);
    router.push({ name: 'inventory.overview' });
}

</script>

<template>

<h1>Editing item: {{oldProduct?.name}}</h1>

<ProductForm v-if="oldProduct" :product="oldProduct" @submitNewProduct="update($event)"/>

</template>