const btnComprar = document.querySelector('.container-icon-cart');
const contenedorCarritoOcultos = document.querySelector('.contenedor-carrito-ocultos')

btnComprar.addEventListener('click', () => {
    contenedorCarritoOcultos.classList.toggle('hiden-cart');
})

const cartInfo = document.querySelector('.productos-carrito');
const rowProductos = document.querySelector('.row-productos');

const productsList = document.querySelector('.container-items');

let allProducts = []

const valorTotal = document.querySelector('.total-pagar')


const countProduct = document.querySelector('#contador-carrito')


productsList.addEventListener('click', e => {
    if (e.target.classList.contains('btn-comprar')) {
        const product = e.target.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('.precio-rifa').textContent,
        };

        const exist = allProducts.some(product => product.title === infoProduct.title)

        if (exist){
            const products = allProducts.map(product => {
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                }else{
                    return product
                }
                
            })
            allProducts = [...products];
        } else{
            allProducts = [...allProducts, infoProduct];
        }

        

        showHTML();
    }

});

rowProductos.addEventListener('click', e =>{
    if(e.target.classList.contains('cruz-carrito')){
        const product = e.target.parentElement
        const title = product.querySelector('p').textContent

        allProducts = allProducts.filter( product => product.title !== title
            );

        showHTML()
    }
})

const showHTML = () => {

    if(!allProducts.length){
        containercartProduct.innerHTML=`
        <p class="cart-vacio">El carrito está vacio</p>
        `

    }

    rowProductos.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-productos-carrito">
                <span class="cantidad-productos">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="cruz-carrito">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `

        rowProductos.append(containerProduct);

        total = total + parseInt(product.quantity * product.price.slice(1))
        totalOfProducts = totalOfProducts + product.quantity;

    });


    valorTotal.innerText = `$${total}`
    countProduct.innerText = totalOfProducts;
}