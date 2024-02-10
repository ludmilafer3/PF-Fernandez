const btnRegister = document.getElementById("btn__register");
const registro = document.getElementById("user_register");

let usuario = JSON.parse(localStorage.getItem("usuario"))

class newUser {
    constructor(user, pass){
        this.id = usuario.length + 1;
        this.user = user
        this.pass = pass
        this.admin = false
    }
}

btnRegister.addEventListener("click", (e) => {
    e.preventDefault()

    const user = registro.children[0].children[1].value
    const pass = registro.children[1].children[1].value

    const nuevoUsuario = new newUser(user, pass)

    validarRegistar(nuevoUsuario)
})

const validarRegistar = (nuevoUsuario) => {
    const usuarioNuevo= usuario.find((usuario) => usuario?.user === nuevoUsuario.user);

    if(nuevoUsuario == undefined){
        usuario.push(nuevoUsuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        sessionStorage.setItem("usuario", JSON.stringify(nuevoUsuario))
        alert("ustedes se a registrado con existo")
        console.log(usuario)
    }else{
        alert("el  usuario ya existe")

        sessionStorage.setItem("usuario", JSON.stringify(usuario))
        location.href = "../inicio.html"
    }
}