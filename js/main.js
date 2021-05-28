let totalCarrito = 0;
let productosEnCarrito=[];
let acumuladorCarrito = ``;
let productosEnLocal;
let productosEnLocalJSON =[];


if (localStorage.ProductosCarrito) {
  productosEnLocalJSON = JSON.parse(localStorage.ProductosCarrito);
  productosEnCarrito = productosEnLocalJSON;
} else {
  console.log("no tenemos valores");
}


if(productosEnLocalJSON !== null){
  for (let j = 0; j < productosEnLocalJSON.length; j++){
          
    acumuladorCarrito+= 
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
        <button type="button" class="btn btn-primary">Comprar por $${totalCarrito}</button>`;

        document.getElementById("iconocarrito").innerHTML =
        `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <ion-icon name="cart-outline"></ion-icon>  Carrito<span class="badge badge-light">${productosEnLocalJSON.length}</span>
        </button>`
  }
}

class producto{
    constructor(nombre, precio, imagen, id) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.id = id;
    }   

    pusheoDeItemsAlCarrito(){
      acumuladorCarrito =``;     
      for (let k = 0; k < productosEnCarrito.length; k++){
          
        acumuladorCarrito+= 
        `<div class="card" style="width: 10rem;">
        <img src="${productosEnCarrito[k].imagen}" class="card-img-top" alt="">
        <div class="card-body">
        <h5 class="card-title">${productosEnCarrito[k].nombre}</h5>
        <p class="card-text">$${productosEnCarrito[k].precio}</p>
        </div>
        </div>
        `
        if(document.getElementById("carritototal")){
          document.getElementById("carritototal").innerHTML = acumuladorCarrito;
        }
      }
    }
    
    agregarAlCarrito(){
     
        totalCarrito = totalCarrito + this.precio;

        productosEnCarrito.push(this);
        localStorage.setItem('ProductosCarrito', JSON.stringify(productosEnCarrito));
        this.pusheoDeItemsAlCarrito();
        
        
        document.getElementById("iconocarrito").innerHTML =
        `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <ion-icon name="cart-outline"></ion-icon>  Carrito<span class="badge badge-light">${productosEnCarrito.length}</span>
        </button>`
        
        document.getElementById("preciototalcarrito").innerHTML = 
        `<button type"button" class="btn btn-secondary" onclick="vaciarCarrito()">Vaciar carrito</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary" onclick="generarPago()">Comprar por $${totalCarrito}</button>`;
    }

}


function vaciarCarrito(){
  productosEnCarrito = [];
  acumuladorCarrito = ``;
  totalCarrito = 0;
  localStorage.setItem('ProductosCarrito', '')

  if(document.getElementById("carritototal")){
    document.getElementById("carritototal").innerHTML = `<div class="d-flex p-2 bd-highlight justify-content-center"><p class="text-muted">Carrito vacio</p></div>`;
  }
  
  document.getElementById("iconocarrito").innerHTML =
  `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  <ion-icon name="cart-outline"></ion-icon>  Carrito
  </button>`
  
  document.getElementById("preciototalcarrito").innerHTML = `
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>`;
}
  
const producto1 = new producto("Pain & Pride", 800, "imagenes/REMERA3BIS.png", 1);
const producto2 = new producto("Believe Fitness", 1200, "imagenes/remera2.png", 2);
const producto3 = new producto("SuperHeroes", 900, "imagenes/remera4.png", 3);
const producto4 = new producto("Believe", 800, "imagenes/remera1.png", 4);
const producto5 = new producto("Basica Negra", 650, "imagenes/remera5.png", 5);
const producto6 = new producto("Basica Azul", 500, "imagenes/remera6.png", 6);
const producto7 = new producto("Musculosa Negra", 750, "imagenes/musculosanegra.png", 7);
const producto8 = new producto("Musculosa Bulls", 1350, "imagenes/musculosabulls.png", 8);
const producto9 = new producto("Musculosa Adidas", 1299, "imagenes/musculosaadidas.png", 9);
const producto10 = new producto("Buzo Canguro", 1000, "imagenes/BuzoNegro.png", 10);
const producto11 = new producto("Buzo sin manga", 800, "imagenes/Buzosinmanga.png", 11);
const producto12 = new producto("Buzo blanco", 1200, "imagenes/BuzoblancoBIS.png", 12);

let productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);
productos.push(producto6);
productos.push(producto7);
productos.push(producto8);
productos.push(producto9);
productos.push(producto10);
productos.push(producto11);
productos.push(producto12);

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

if($("productos").html){
$("#productos").html(acumulador)
}

// TEST-58cd5ace-3ea6-4804-8379-1459360ca926
// TOKEN // TEST-6992980073036512-052822-cd1947737690a5402efbe03fa429effa-12792425

// TEST-4218227222193191-051723-7c6373cf3d48251c0d9200c2a947653a-232878277

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