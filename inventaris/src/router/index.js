import { createMemoryHistory, createRouter } from "vue-router";
import { inventoryRoutes } from "../domains/inventory/routes.js"

const routes = [...inventoryRoutes];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

