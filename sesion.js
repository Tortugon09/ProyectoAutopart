const listaUsuarios = new Array();


function registro(){
    var contraseña = document.getElementById("pass").value;
  var usuario = document.getElementById("usuario").value;

    listaUsuarios.push({user:usuario,pass:contraseña});
    localStorage.setItem("guardar-user",JSON.stringify(listaUsuarios));
    

}
function usuario(){
  var usuario = document.getElementById("usuario").value;
  let usuario1 = JSON.parse(localStorage.getItem("guardar-user"));
        for (let i = 0; i < 3; i++) {
if(usuario == usuario1[i].user){

        check = true;
           break;
  }
  else {
            check = false;
    break;
 }
  }}
  function contraseña(){
    var contraseña = document.getElementById("pass").value;
    let usuario1 = JSON.parse (localStorage.getItem("guardar-user"));
    console.log(usuario1);
          for (let i = 0; i < 3; i++) {
    if (contraseña == usuario1[i].pass) {
      check2 = true;
      break;

    }
    else {

      check2 = false;
      break;
    }
}}
function errores(){
  incorrecto = document.getElementById('incorrecto');
  online = document.getElementById('online-sesion');
  nombreusuer = document.getElementById('nombre-usuario');
  agregar= document.getElementById('agregar-user');
  if (check == true && check2 == true){
    alert("Sesion iniciada");
    incorrecto.style.display = 'none';
    location.href ="index.html";
    online.innerHTML += '<p>Usr</p>';
    }
    else {
      incorrecto = document.getElementById('incorrecto');
    incorrecto.innerHTML += '<li>Contraseña o Usuario Incorrecto</li>';
    }
}


function validar() {
  usuario();
  contraseña();
  errores();

}
