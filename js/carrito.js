import { productosDisponibles } from "./cotillon.js"

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]));

let carrito = JSON.parse(sessionStorage.getItem("carrito"));

export const comprarProducto = (idProducto) => {
    
    const producto = productosDisponibles.find((item) => item.id === idProducto);
    
    const {id, nombre, precio, imagen} = producto
    
    const productoCarrito = carrito.find((item) => item.id === idProducto);

    if(productoCarrito === undefined){
        const productoNuevo = {
            id: id,
            nombre: nombre,
            precio: precio,
            imagen: imagen,
            cantidad: 1,
        }

        carrito.push(productoNuevo)

        sessionStorage.setItem("carrito", JSON.stringify(carrito));

    }else{
        const indexProducto = carrito.findIndex((item) =>  item.id === idProducto)

        carrito[indexProducto].cantidad++;
        carrito[indexProducto].precio = precio * carrito[indexProducto].cantidad

        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"));

    console.log(carrito);
}

