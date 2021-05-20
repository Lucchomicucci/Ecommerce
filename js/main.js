
const usuarioEnLocal = localStorage.usuario;
if(usuarioEnLocal == null){
  const usuario = prompt("Ingrese su nombre:");
  localStorage.usuario = usuario;
  alert(`Bienvenido ${usuario}`);
}else{
  alert(`Bienvenido ${usuarioEnLocal}`);
}


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
    <p>Stock disponible ${productos[i].stock}</p>
    </div>
    </div>
    </div>`
}

if($("productos").html){
$("#productos").html(acumulador)
}
