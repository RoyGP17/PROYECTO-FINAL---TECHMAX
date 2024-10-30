let appIndex2 = new Vue({
    el: '#shop-4-column-v02',
    name: 'shop-4-column-v02',
    data: {
        products: [],
        filter: {
            Producto: "",
            Marca: "",
            Categoria: "Lenovo"
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