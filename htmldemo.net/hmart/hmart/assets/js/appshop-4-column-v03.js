let appIndex2 = new Vue({
    el: '#shop-4-column-v03',
    name: 'shop-4-column-v03',
    data: {
        products: [],
        filter: {
            Producto: "",
            Marca: "",
            Categoria: "Asus"
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