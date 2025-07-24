import { ref, computed } from 'vue'

// State

const itemsAdded = ref(0);
const inventory = ref([]);

// Getters
export const getAllProducts = computed(() => inventory.value);
export const getProductById = (id) => computed(() => inventory.value.find(product => product.id == id));
export const getOrderList = () => computed(() => inventory.value.filter(product => product.actualAmount < product.minimumAmount));

// Actions
export const addProduct = (product) => { inventory.value.push({ ...product, id: itemsAdded.value }); itemsAdded.value++; };
export const updateProduct = (product) => { inventory.value[inventory.value.findIndex(item => item.id == product.id)] = { ...product } };
export const deleteItemByID = (id) => { inventory.value.splice([inventory.value.findIndex(item => item.id == id)], 1) };

// { name: 'test', price: 4, actualAmount: 4, minimumAmount: 4 }

// Prefilled data

const productName = ref(['Peanut', 'Cashew', 'Pecan', 'Walnut', 'Almond', 'Hazelnut', 'Pistachio']);
const prices = ref([1.25, 2.99, 3.53, 3.23, 2.29, 4.99, 5.99]);
const actualAmounts = ref([7, 6, 5, 4, 3, 2, 1]);
const minimumAmounts = ref([1, 2, 3, 4, 5, 6, 7]);

for (let product in productName.value) {
    addProduct({ name: productName.value[product], price: prices.value[product], actualAmount: actualAmounts.value[product], minimumAmount: minimumAmounts.value[product] });
}

