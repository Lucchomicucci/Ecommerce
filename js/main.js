let acumulador = ``;
let totalCarrito = 0;

class producto{
    constructor(nombre, precio, imagen, stock) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
      this.stock = stock;
    }   
    
    restarStock(cantidad){
      this.stock -= cantidad;
    }
    agregarAlCarrito(){
      if(this.stock > 0){
        totalCarrito = totalCarrito + this.precio;
        this.restarStock(1);
        console.log(`El total de tu carrito es de: $${totalCarrito}`);
      }
      else{
        alert("No tenemos stock.");
      }
    }
}

const producto1 = new producto("Pain & Pride", 800, "/imagenes/REMERA3.jpg", 20);
const producto2 = new producto("Believe", 800, "/imagenes/remera1.jpg", 10);
const producto3 = new producto("SuperHeroes", 900, "/imagenes/remera4.jpg", 15);
const producto4 = new producto("BelieveFitness", 1200, "/imagenes/remera2.jpg", 2);
const producto5 = new producto("BasicaNegra", 650, "/imagenes/remera5.jpg", 5);

let productos = [];
productos.push(producto1); // .push para meter lo que esta entre () en el array declarado arriba "let productos"
productos.push(producto2);
productos.push(producto3);
productos.push(producto4);
productos.push(producto5);

 for (let i = 0; i < productos.length; i++) {



  acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top" src="${productos[i].imagen}" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#">${productos[i].nombre}</a>
    </h4>
    <h5> $${productos[i].precio}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="card-footer">
    <button class="btn btn-primary" onclick="productos[${i}].agregarAlCarrito()">Agregar al carrito</button>
    <p>Stock disponible ${productos[i].stock}</p>
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
    </div>
    </div>`
}

// productos.forEach(function (product){
//   console.log(product);
//   acumulador += `<div class="col-lg-4 col-md-6 mb-4">
//   <div class="card h-100">
//   <a href="#"><img class="card-img-top" src="${product.imagen}" alt=""></a>
//   <div class="card-body">
//   <h4 class="card-title">
//   <a href="#">${product.nombre}</a>
//   </h4>
//   <h5> $${product.precio}</h5>
//   <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
//   </div>
//   <div class="card-footer">
//   <button onclick='${product}.agregarAlCarrito()'>Agregar al carrito</button>
//   <p>Stock disponible ${product.stock}</p>
//   <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
//   </div>
//   </div>
//   </div>`
// });



// console.log(`${acumulador}`);

document.getElementById("productos").innerHTML = acumulador;







// /** Guardamos los datos del storage */
// let ValorDelCarritoEnElStorage = localStorage.carrito; // null
// let carrito = []; // []
// /** Preguntamos si hay datos del carrito en el storage */
// if(ValorDelCarritoEnElStorage == null){ //
//   carrito = []; // Si no hay, lo dejamos vacio // Entra aca porque es null
// }else{
//   console.log(ValorDelCarritoEnElStorage)
//   console.log(JSON.parse(ValorDelCarritoEnElStorage))
//   carrito = JSON.parse(ValorDelCarritoEnElStorage); // Si hay, lo llenamos con los datos que hay
// }
// let productoEnTipoJson = {id: 10, nombre:'Zapas Niky', precio:9000};
// agregarAlCarrito(productoEnTipoJson); 
// function agregarAlCarrito(producto){
//   // Zapas niky
//   carrito.push(producto); // carrito = [{id: 10, nombre:'Zapas Niky', precio:9000}]
//   localStorage.carrito = JSON.stringify(carrito); // Array de carrito
//   // localStorage.validacionCarrito = 'until=10/10/2222'; // Array de carrito
// }
//   // Mostrar las cards de los productos en la pantalla principal ;)
//   // Mostrar el total de lo agregado al carrito :(
//   // Mostrar los productos agregados al carrito :(
//   // El boton de agregar al carrito en la card del producto :/
//   // Borrar producto del carrito
//   // Pagar con mercadopago o paypal