let appIndex2 = new Vue({
    el: '#appShop3Column',
    name: 'appShop3Column',
    data: {
        products: [],
        productSelected: {
            Codigo: null,
            Nombre: null,
            Imagen: null,
            Cantidad: 0,
            PrecioUnitario: 0,
            Total: 0,
        },
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
        },
        addToCart(producto) {
            this.productSelected.Codigo = producto.Codigo;
            this.productSelected.Nombre = producto.Nombre;
            this.productSelected.Imagen = producto.Imagen;
            this.productSelected.Cantidad = 1;
            this.productSelected.PrecioUnitario = producto.PrecioUnitario;
            this.productSelected.Total = producto.PrecioUnitario * this.productSelected.Cantidad;

            let cart = localStorage.getItem('cart');
            if (cart == null) {
                let products = [];
                products.push(this.productSelected);

                localStorage.setItem('cart', JSON.stringify(products));
            }
            else if (cart) {
                let products = [];
                let productsExist = JSON.parse(localStorage.getItem('cart'));

                products = productsExist;
                if (products.some(x => x.Codigo == this.productSelected.Codigo)) {
                    products.forEach(item => {
                        if (item.Codigo == this.productSelected.Codigo) {
                            item.Cantidad = item.Cantidad + 1;
                            item.Total = item.PrecioUnitario * item.Cantidad;
                        }
                    });
                } else {
                    products.push(this.productSelected);
                }


                localStorage.removeItem('cart');
                localStorage.setItem('cart', JSON.stringify(products));
            }
        }
    }
});