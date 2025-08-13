const app =  Vue.createApp({ /* Vue instance Constructor */ 
    data() { /* Data function returns an object that contains the data properties */
        /* Data properties are reactive and can be used in the template */
        /* They can also be accessed in methods and computed properties */
        return {
            title: 'Vue.js 1',
            content: 'Vue.js is a progressive JavaScript framework for building user interfaces.',
        };
    },
}) .mount('#app'); /*id app olan kısmı kontrol et/* Mounts the Vue instance to the DOM element with id 'app' */