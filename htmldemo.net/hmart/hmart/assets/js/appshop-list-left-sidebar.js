let appIndex2 = new Vue({
    el: '#appshop-list-left-sidebar',
    name: 'appshop-list-left-sidebar',
    data: {
        products: [],
        filter: {
            Producto: "",
            Marca: "",
            Categoria: "Placa Base"
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