<script setup>
import { ref } from 'vue'

import { getProductById, updateProduct} from "../store.js";
import ProductForm from "../components/ProductForm.vue";
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();

const oldProduct = {...(getProductById(route.params.id[1])).value};

</script>

<template>

<h1>Editing item: {{oldProduct.name}}</h1>

<ProductForm :product="oldProduct" @submitNewProduct="updateProduct($event); router.push({ path: '/overview' });"/>

</template>