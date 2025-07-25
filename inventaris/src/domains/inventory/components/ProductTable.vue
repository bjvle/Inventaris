<script setup lang="ts">

import {useRouter} from 'vue-router'
import {deleteItemByID} from "../store.js";

const router = useRouter()

defineModel("products")

const editItem = (id:number) => {
  router.push({ path: `/edit:${id}`})
}

</script>
 
<template>

<table>
  <thead>
    <tr>
        <th scope="col">Product</th>
        <th scope="col">Price</th>
        <th scope="col">Actual Amount</th>
        <th scope="col">Minimum Amount</th>
        <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(product,index) in products":key=index>
      <th scope="row">{{ product["name"] }}</th>
      <td> {{ product["price"] }} </td>
      <td> {{ product['actualAmount'] }} </td>
      <td> {{ product['minimumAmount'] }} </td>
      <td> <button @click="editItem(product.id)"> Edit </button> </td>
      <td> <button @click="deleteItemByID(product.id)"> Delete </button> </td>
    </tr>
  </tbody>
</table>
</template>
