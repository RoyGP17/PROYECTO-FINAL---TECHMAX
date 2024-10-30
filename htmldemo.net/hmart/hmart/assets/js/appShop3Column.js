let appIndex2 = new Vue({
    el: '#appShop3Column',
    name: 'appShop3Column',
    data: {
        products: [],
        filter: {
            Producto: "",
            Marca: "",
            Categoria: "Teclado"
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts() {
            axios.get('https://localhost:7014/api/Product/GetAll', { params: this.filter })
                .then(response => {
                    var res = response.data;
                    if (res.Status) {
                        this.products = res.Value;
                    } else {
                        console.log(res)
                    }
                })
                .catch(error => {
                    console.error('Error al hacer la petición:', error);
                });
        }
    }
});