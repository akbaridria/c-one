import { createWebHistory, createRouter } from 'vue-router';
import Facts from '../views/Facts';
import Chi from '../views/Chi'
import Trades from '../views/Trades'
import Predict from '../views/Predict'
const routes = [
    {
        path : "/",
        name : "Facts",
        component : Facts
        
    },
    {
        path : "/Chi",
        name : "Chi",
        component : Chi
    },
    {
        path : "/Trades",
        name : "Trades",
        component : Trades
    },
    {
        path : "/Predict",
        name : "Predict",
        component : Predict
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes,
    linkExactActiveClass: "active"
})

export default router;