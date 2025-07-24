<script setup>
import { ref } from 'vue'

import { getAllProducts, addProduct} from "../store.js";
import ProductForm from "../components/ProductForm.vue";
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const product = ref({ name: '', price: null, actualAmount: null, minimumAmount: null });

</script>

<template>

<h3> Add the name, price and amount of the product: </h3>

<ProductForm :product="product" @submitNewProduct="addProduct($event); router.push({ path: '/overview' });"/>

</template>