import { comprarProducto } from "./carrito.js";

const divProductos = document.getElementById("productos");

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"));

document.addEventListener("DOMContentLoaded", () => {
    cardProductos(productosDisponibles)
})

const cardProductos = (productos) => {
    productos.forEach((item) => {

        const {id, nombre, precio, imagen} = item

        let card = document.createElement("div")

        card.className = "producto"
        card.innerHTML = `
        <div class="card-index"  style="width: 18rem;">
            <img src=${imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p >Precio: <b>$${precio}</b> </p>
                    <button id="boton${id}" class = "btn btn-primary">Comprar</button>
                </div>
        </div>
        `

        divProductos.appendChild(card);
        const botonComprar = document.getElementById(`boton${id}`)
        botonComprar.addEventListener("click", () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Agregado al carrito",
                showConfirmButton: false,
                timer: 1500

            });

            comprarProducto(id);
        })
    });
}