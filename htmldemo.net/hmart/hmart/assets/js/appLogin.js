let appLogin = new Vue({
    el: '#appLogin',
    name: 'appLogin',
    data: {
        login: {
            user: '',//wgomezpr
            password: ''//123@2024
        }
    },
    created() { },
    methods: {
        iniciarSesion() {
            axios.get('https://localhost:7014/api/User/IniciarSesion', { params: this.login })
                .then(response => {
                    var res = response.data;
                    if (res.Status) {
                        alert('Inicio de sesión existoso.')
                        window.location.href = './index-2.html';
                    } else {
                        console.log(res)
                        alert(res.Message)
                    }
                })
                .catch(error => {
                    console.error('Error al hacer la petición:', error);
                });
        }
    }
});