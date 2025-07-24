import Overview from './pages/Overview.vue'
import Add from './pages/Add.vue'
import Edit from './pages/Edit.vue'
import Order from './pages/Order.vue'

export const inventoryRoutes = [
    { path: '/overview', component: Overview },
    { path: '/add', component: Add },
    { path: '/edit:id', component: Edit },
    { path: '/order', component: Order },
];
