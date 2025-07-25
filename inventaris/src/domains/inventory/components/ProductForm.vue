<script setup lang="ts">
import { ref } from 'vue'
//import type { Ref } from 'vue'
import { useRouter } from 'vue-router';
import type { Product } from '../store';

const router = useRouter();

const { product } = defineProps<{product: Product}>()

const newProduct =  ref({...product});

const emit = defineEmits(['submitNewProduct']);

const emitSubmit = (newProduct:{name:string,price:number,actualAmount:number,minimumAmount:number}) => {
    emit('submitNewProduct', newProduct);
};

</script>

<template>
<form> 
<table>
    <thead>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Actual Amount</th>
        <th>Minimum Amount</th>
     </tr>
    </thead>
    <tbody>
        <tr>
            <td><input v-model="newProduct.name" type="text" placeholder="Name" /></td>
            <td><input v-model="newProduct.price" type="number" placeholder="Price" /></td>
            <td><input v-model="newProduct.actualAmount" type="number" placeholder="Actual Amount" /></td>
            <td><input v-model="newProduct.minimumAmount" type="number" placeholder="Minimum Amount" /></td>
        </tr>
    </tbody>
</table>

</form>
<button @click="emitSubmit(newProduct)"> Confirm </button>
<button @click="router.push({ path: '/overview' })"> Cancel </button>
</template>

