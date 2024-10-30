let appIndex2 = new Vue({
    el: '#appshop-4-column-v01',
    name: 'appshop-4-column-v01',
    data: {
        products: [],
        filter: {
            Producto: "",
            Marca: "HP",
            Categoria: "Laptop"
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