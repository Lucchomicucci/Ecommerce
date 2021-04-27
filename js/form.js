function enviarFormulario(){
    if(document.getElementById("edad").value >= 18){
      alert("Bienvenido");
    }else{
      alert("Usted es menor de edad");
    }
  }