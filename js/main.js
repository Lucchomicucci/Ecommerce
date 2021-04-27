let acumulador = ``;
let totalCarrito = 0;
let carrito=[];

const usuarioEnLocal = localStorage.usuario;
if(usuarioEnLocal == null){
  const usuario = prompt("Ingrese su nombre:");
  localStorage.usuario = usuario;
  alert(`Bienvenido ${usuario}`);
}else{
  alert(`Bienvenido ${usuarioEnLocal}`);
}


// Pertenece a productos //
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

if(document.getElementById("productos")){
document.getElementById("productos").innerHTML = acumulador;
}



// Pertenece a Rutinas // 

class rutinas{
  constructor(nombre, precio, imagen){
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;
  }

  agregarAlCarrito(){
        totalCarrito = totalCarrito + this.precio;
        console.log(`El total de tu carrito es de: $${totalCarrito}`);
  }
}

const rutina1 = new rutinas("Full Body", 1500, "/imagenes/img.jpg");
const rutina2 = new rutinas("Cardio", 1000, "/imagenes/img.jpg");
const rutina3 = new rutinas("Espalda y pecho", 1500, "/imagenes/img.jpg");
const rutina4 = new rutinas("Piernas", 1500, "/imagenes/img.jpg");

let arrayRutina = [];
arrayRutina.push(rutina1);
arrayRutina.push(rutina2);
arrayRutina.push(rutina3);
arrayRutina.push(rutina4);

let acumuladorRutina = ``;

for(let j = 0; j < arrayRutina.length; j++) {

acumuladorRutina+= `<div class="col-lg-3 col-md-6 mb-4">
<div class="card h-100">
<img class="card-img-top" src="http://placehold.it/500x325" alt="">
<div class="card-body">
<h4 class="card-title">${arrayRutina[j].nombre}</h4>
<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
<h5> $${arrayRutina[j].precio}</h5>
</div>
<div class="card-footer">
<button class="btn btn-primary" onclick="arrayRutina[${j}].agregarAlCarrito()">Agregar al carrito</button>
</div>
</div>
</div>`

}

if(document.getElementById("rutinas")){
  document.getElementById("rutinas").innerHTML = acumuladorRutina;
}



// let carritoStorage = localStorage.carrito
// let carrito = [];

// if(carritoStorage == null){
//   carrito = [];
// }else{
//   console.log(carritoStorage)
//   console.log(JSON.parse(carritoStorage))
//   carrito = JSON.parse(carritoStorage)
// }

// let productoEnTipoJson = [productos];
// agregarAlCarrito(productoEnTipoJson); 
// function agregarAlCarrito(producto){
//   carrito.push(producto); 
//   localStorage.carrito = JSON.stringify(carrito); // Array de carrito
//   localStorage.validacionCarrito = 'until=10/10/2222'; // Array de carrito
// }
