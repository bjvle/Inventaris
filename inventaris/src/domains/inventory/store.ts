import { ref, computed } from 'vue'

// Interfaces

export interface Product {
    name: string;
    price: number;
    actualAmount: number;
    minimumAmount: number;
    id?: number;
}

class Products implements Product {
    name: string;
    price: number;
    actualAmount: number;
    minimumAmount: number;
    id?: number;

    constructor({ name, price, actualAmount, minimumAmount, id }: Product) {
        this.name = name;
        this.price = price;
        this.actualAmount = actualAmount;
        this.minimumAmount = minimumAmount;
        this.id = id;
    }
}

// State

const itemsAdded = ref(0);
const inventory = ref<Product[]>([]);


// Getters
export const getAllProducts = computed(() => inventory.value);
export const getProductById = (id: number | undefined) => computed(() => {
    if (typeof id == 'number') {
        return inventory.value.find(product => product.id === id);
    }
    return inventory.value.find(() => true);
});
export const getOrderList = computed(() => inventory.value.filter(product => product.actualAmount < product.minimumAmount));

// Actions
export const addProduct = (product: Product) => { inventory.value.push({ ...product, id: itemsAdded.value }); itemsAdded.value++; };
export const updateProduct = (product: Product) => { inventory.value[inventory.value.findIndex(item => item.id == product.id)] = { ...product } };
export const deleteItemByID = (id: number) => { inventory.value.splice(inventory.value.findIndex(item => item.id == id), 1) };

// Prefilled data

addProduct(new Products({ name: 'Peanut', price: 1.25, actualAmount: 7, minimumAmount: 1 }));
addProduct(new Products({ name: 'Cashew', price: 2.99, actualAmount: 6, minimumAmount: 2 }));
addProduct(new Products({ name: 'Pecan', price: 3.53, actualAmount: 5, minimumAmount: 3 }));
addProduct(new Products({ name: 'Walnut', price: 3.23, actualAmount: 4, minimumAmount: 4 }));
addProduct(new Products({ name: 'Almond', price: 2.29, actualAmount: 3, minimumAmount: 5 }));
addProduct(new Products({ name: 'Hazelnut', price: 4.99, actualAmount: 2, minimumAmount: 6 }));
addProduct(new Products({ name: 'Pistachio', price: 5.99, actualAmount: 1, minimumAmount: 7 }));


