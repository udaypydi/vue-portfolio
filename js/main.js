Vue.component('Header', {
    props: {
        header: {
            type: String,
            required: true,
        }
    },
    template: `
        <h1>Header</h1>
    `
});

// vue app
const app = new Vue({
    el: '#app',
    data: {
        header: 'Uday Bhaskhar'
    }
})
