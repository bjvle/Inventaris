<script setup lang="ts">
import { ref } from 'vue'

import { addProduct, type Product} from "../store.ts";
import ProductForm from "../components/ProductForm.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const product = ref<Product>({ name: '', price: 0, actualAmount: 0, minimumAmount: 0 });

</script>

<template>

<h3> Add the name, price and amount of the product: </h3>

<ProductForm :product="product" @submitNewProduct="addProduct($event); router.push({ name: 'inventory.overview' });"/>

</template>