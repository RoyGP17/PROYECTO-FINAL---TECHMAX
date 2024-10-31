let appLogin = new Vue({
    el: '#appLogin',
    name: 'appLogin',
    data: {
        login: {
            user: '',//wgomezpr
            password: ''//123@2024
        },
        objUser: {
            Codigo: 0,
            Nombres: null,
            ApellidoPaterno: null,
            ApellidoMaterno: null,
            Usuario: null,
            Correo: null,
            Contraseña: null,
            FechaNacimiento: null,
            Genero: null
        }
    },
    created() { },
    methods: {
        iniciarSesion() {
            axios.get('https://localhost:7014/api/User/IniciarSesion', { params: this.login })
                .then(response => {
                    var res = response.data;
                    if (res.Status) {
                        alert('Inicio de sesión existoso.');
                        window.location.href = './index-2.html';
                    } else {
                        console.log(res);
                    }
                })
                .catch(error => {
                    console.error('Error al hacer la petición:', error);
                });
        },
        registrar() {
            axios.post('https://localhost:7014/api/User/Registrar', this.objUser)
                .then(response => {
                    var res = response.data;
                    if (res.Status) {
                        alert('Se ha registrado correctamente.')
                    } else {
                        console.log(res);
                    }
                })
                .catch(error => {
                    console.error('Error al hacer la petición:', error);
                });
        }
    }
});