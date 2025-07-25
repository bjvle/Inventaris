import { createMemoryHistory, createRouter } from "vue-router";
import { inventoryRoutes } from "../domains/inventory/routes.ts"

const routes = [...inventoryRoutes];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

