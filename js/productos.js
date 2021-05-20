let totalCarrito = 0;
let productosEnCarrito=[];
let acumuladorCarrito = ``;


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
    
    vaciarCarrito(){
      productosEnCarrito = [];
      
      if(document.getElementById("carritototal")){
        document.getElementById("carritototal").innerHTML = ``;
      }

        document.getElementById("iconocarrito").innerHTML =
        `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <ion-icon name="cart-outline"></ion-icon>  Carrito
        </button>`
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
      if(this.stock > 0){
        totalCarrito = totalCarrito + this.precio;
        
        this.restarStock(1);
        productosEnCarrito.push(this);
        this.pusheoDeItemsAlCarrito();
        
        document.getElementById("iconocarrito").innerHTML =
        `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        <ion-icon name="cart-outline"></ion-icon>  Carrito<span class="badge badge-light">${productosEnCarrito.length}</span>
        </button>`
        
        document.getElementById("preciototalcarrito").innerHTML = 
        `<button type"button" class="btn btn-secondary" onclick="vaciarCarrito()">Vaciar carrito</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Comprar por $${totalCarrito}</button>`;
      }
      else{
        alert("No tenemos stock.");
      }
    }
    
    
}
  
const producto1 = new producto("Pain & Pride", 800, "imagenes/REMERA3BIS.png", 20);
const producto2 = new producto("Believe Fitness", 1200, "imagenes/remera2.png", 2);
const producto3 = new producto("SuperHeroes", 900, "imagenes/remera4.png", 15);
const producto4 = new producto("Believe", 800, "imagenes/remera1.png", 10);
const producto5 = new producto("Basica Negra", 650, "imagenes/remera5.png", 5);
const producto6 = new producto("Basica Azul", 500, "imagenes/remera6.png", 10);
const producto7 = new producto("Musculosa Negra", 750, "imagenes/musculosanegra.png", 8);
const producto8 = new producto("Musculosa Bulls", 1350, "imagenes/musculosabulls.png", 14);
const producto9 = new producto("Musculosa Adidas", 1299, "imagenes/musculosaadidas.png", 9);
const producto10 = new producto("Buzo Canguro", 1000, "imagenes/BuzoNegro.png", 6);
const producto11 = new producto("Buzo sin manga", 800, "imagenes/Buzosinmanga.png", 5);
const producto12 = new producto("Buzo blanco", 1200, "imagenes/BuzoblancoBIS.png", 10);

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