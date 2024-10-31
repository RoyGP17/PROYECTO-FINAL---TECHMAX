let appCart = new Vue({
    el: '#appCart',
    name: 'appCart',
    data: {
        products: [],
        totalQuantity: 0,
        totalPrice: 0
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
                this.updateTotals();
            }
        },
        removeProduct(product) {
            this.products = this.products.filter(item => item.Codigo !== product.Codigo);

            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(this.products));
            this.updateTotals();
        },
        clearProducts() {
            this.products = [];
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(this.products));
            this.updateTotals();
        },
        updateTotals() {
            this.totalQuantity = 0;
            this.totalPrice = 0;

            this.products.forEach(item => {
                this.totalQuantity += item.Cantidad;
                this.totalPrice += item.Cantidad * item.PrecioUnitario;
            });
        }
    },
});