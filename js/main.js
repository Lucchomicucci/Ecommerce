let acumulador = ``;
let precios = [800, 800, 900, 500, 1500, 1000];
let nombres = ['Pain & Pride', 'Believe', 'SuperHeroes', 'Believe Fitness', 'Remera', 'Modelo Negro'];
let totalCarrito = 0;
let stock = 20;

for (let i = 0, j = 0; i < precios.length, j < nombres.length; i++, j++) {
  console.log(precios[i]);
  console.log(nombres[j]);


  acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
    <div class="card-body">
    <h4 class="card-title">
    <a href="#">${nombres[j]}</a>
    </h4>
    <h5> $${precios[i]}</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="card-footer">
    <button onclick="agregarAlCarrito(${precios[i]})">Agregar al carrito</button>
    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
    </div>
    </div>
    </div>`
}

// console.log(`${acumulador}`);

document.getElementById("productos").innerHTML = acumulador;



function agregarAlCarrito(precio) {
  if(verificarStock(stock)){
    totalCarrito = totalCarrito + precio;
    console.log(totalCarrito);
  }
  else{
    alert("No tenemos stock.");
  }
  
}

function verificarStock(stock){
  return stock > 0 
}



