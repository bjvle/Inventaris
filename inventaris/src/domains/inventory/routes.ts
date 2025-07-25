import Overview from './pages/Overview.vue';
import Add from './pages/Add.vue';
import Edit from './pages/Edit.vue';
import Order from './pages/Order.vue';

export const inventoryRoutes: any[] = [
    { path: '/overview', name: 'inventory.overview', component: Overview },
    { path: '/add', name: 'inventory.add', component: Add },
    { path: '/edit:id', name: 'inventory.edit', component: Edit },
    { path: '/order', name: 'inventory.order', component: Order },
];
