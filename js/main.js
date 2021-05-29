let totalCarrito = 0;
let productosEnCarrito = [];
let acumuladorCarrito = ``;
let productosEnLocal;
let productosEnLocalJSON = [];

// Generacion de cards segun cantidad de productos //

let acumulador = ``;
for (let i = 0; i < productos.length; i++) {
  acumulador += `<div class="col-lg-4 col-md-6 mb-4" id="producto${[i]}">
    <div class="card h-100">
    <img class="card-img-top" src="${productos[i].imagen}" alt="">
    <div class="card-body">
    <h4 class="card-title">
    ${productos[i].nombre}
    </h4>
    <h5> $${productos[i].precio}</h5>
    </div>
    <div class="card-footer">
    <button class="btn btn-primary" onclick="productos[${i}].agregarAlCarrito()">Agregar al carrito</button>
    </div>
    </div>
    </div>`
}
if ($("productos").html) {
  $("#productos").html(acumulador)
}

if (localStorage.ProductosCarrito) {
  productosEnLocalJSON = JSON.parse(localStorage.ProductosCarrito);
  productosEnCarrito = productosEnLocalJSON;
}

if (productosEnLocalJSON !== null) {
  for (let j = 0; j < productosEnLocalJSON.length; j++) {

    acumuladorCarrito +=
      `<div class="card" style="width: 10rem;">
    <img src="${productosEnLocalJSON[j].imagen}" class="card-img-top" alt="">
    <div class="card-body">
    <h5 class="card-title">${productosEnLocalJSON[j].nombre}</h5>
    <p class="card-text">$${productosEnLocalJSON[j].precio}</p>
    </div>
    </div>
    `
    totalCarrito += productosEnLocalJSON[j].precio;

    document.getElementById("carritototal").innerHTML = acumuladorCarrito;

    document.getElementById("preciototalcarrito").innerHTML =
      `<button type"button" class="btn btn-secondary" onclick="vaciarCarrito()">Vaciar carrito</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="generarPago()">Comprar por $${totalCarrito}</button>`;

    document.getElementById("iconocarrito").innerHTML =
      `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <ion-icon name="cart-outline"></ion-icon>  Carrito<span class="badge badge-light">${productosEnLocalJSON.length}</span>
        </button>`
  }
}


// TEST-58cd5ace-3ea6-4804-8379-1459360ca926
// TOKEN // TEST-6992980073036512-052822-cd1947737690a5402efbe03fa429effa-12792425

async function generarPago() {
  const productosAMP = productosEnCarrito.map((element) => {
    let nuevoElemento = {
      title: element.nombre,
      description: "",
      picture_url: "",
      category_id: element.id,
      quantity: 1,
      currency_id: "ARS",
      unit_price: Number(element.precio),
    };
    return nuevoElemento;
  });
  console.log(productosAMP);
  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer TEST-6992980073036512-052822-cd1947737690a5402efbe03fa429effa-12792425",
      },
      body: JSON.stringify({
        items: productosAMP,
      }),
    }
  );
  const data = await response.json();
  window.open(data.init_point, "_blank");
}