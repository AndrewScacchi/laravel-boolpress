require('./bootstrap');

// window.Vue = require('vue'); // importiamo la libreria Vue

import Vue from 'vue';  // importiamo la libreria Vue
import VueRouter from 'vue-router'; // importiamo la libreria vue-router
import App from './App.vue'; // importiamo il componente base App.vue e lo assegniamo alla variabile App

// importiamo tutti i componenti delle pagine
import PageHome from './pages/PageHome.vue';
import PageBlog from './pages/PageBlog.vue';
import PageAbout from './pages/PageAbout.vue';
import PageContacts from './pages/PageContacts.vue';
import PageShow from './pages/PageShow.vue';
import Page404 from './pages/Page404.vue';


const routes = [
    {
        // qui mettiamo 9 post random
        path: '/',
        name: 'home',
        component: PageHome,
    },
    {
        // questa è la index (paginata) dei post
        path: '/blog',
        name: 'blog',
        component: PageBlog,
    },
    {
        path: '/about',
        name: 'about',
        component: PageAbout,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: PageContacts,
    },
    {
        // questa è la pagina di dettaglio di un post
        path: '/blog/:slug',
        name: 'show',
        component: PageShow,
        props: true,
    },
    {
        path: '*',
        name: 'page404',
        component: Page404,
    }
];

const router = new VueRouter({
    routes,
    mode: 'history',
});


Vue.use(VueRouter); // diciamo a Vue di usare il plugin vue-router

// inizializziamo l'applicazione Vue passandogli l'oggetto di inizializzazione
const app = new Vue({
    el: '#root', // id del componente nel file HTML dentro il quale opererà Vue
    render: h => h(App), // monta il componente App nell'elemento root
    router, // diciamo a vue di inizializzare la nostra app usando il router
});
