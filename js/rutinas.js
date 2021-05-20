// Pertenece a Rutinas // 

class rutinas{
    constructor(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
  

  }
  
  const rutina1 = new rutinas("Full Body", 1500, "imagenes/img.jpg");
  const rutina2 = new rutinas("Cardio", 1000, "imagenes/img.jpg");
  const rutina3 = new rutinas("Espalda y pecho", 1500, "imagenes/img.jpg");
  const rutina4 = new rutinas("Piernas", 1500, "imagenes/img.jpg");
  
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
  <button class="btn btn-primary" onclick="arrayRutina[${j}].agregarAlCarrito()">Comprar</button>
  </div>
  </div>
  </div>`
  
  }
  
  if(document.getElementById("rutinas")){
    document.getElementById("rutinas").innerHTML = acumuladorRutina;
  }