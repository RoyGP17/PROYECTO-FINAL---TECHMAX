let appContact = new Vue({
    el: '#appContact',
    name: 'appContact',
    data: {
        products: [],
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            let cart = localStorage.getItem('cart');
            if (cart) {
                let productsExist = JSON.parse(localStorage.getItem('cart'));

                this.products = productsExist;
            }
        },
        showCart() {
            let cart = document.getElementById('offcanvas-cart');
            cart.classList.add('offcanvas-open')
        },
        closeCart() {
            let cart = document.getElementById('offcanvas-cart');
            cart.classList.remove('offcanvas-open')
        }
    }
});