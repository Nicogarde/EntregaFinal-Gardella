const boton = document.getElementById("buttonrifa");

const productos = [

    {
        nombre: 'Rifa Premium',
        precio: 50000,
    },

    {
        nombre: 'Rifa de Oro',
        precio: 30000,
    },

    {
        nombre: 'Rifa de Plata',
        precio: 15000,
    },
]

let carrito = [];

productos.forEach((rifas))=> {
    
}



boton.addEventListener("click", () => {
    carrito.push({
        id: rifas.id,
        nombre: rifas.nombre,
        precio: rifas.precio,
    });
    console.log(carrito);
})
