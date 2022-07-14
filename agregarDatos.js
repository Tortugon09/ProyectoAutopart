const conexion2 = require ('./conectar');
function cargarDatos() {
var nombre=document.getElementById("nombre").value;
var id=document.getElementById("id").value;
var pass=document.getElementById("pass").value;
//console.log(nombre);
//console.log(ape);
$query = `INSERT INTO mecanicos (id_mecanico,passwordd,nombre) VALUES ('${id}','${pass}','${nombre}')`;

conexion2.query($query, function (err, rows){
    if (err){
        console.log("error en el query");
        console.log(err);
        return;
    }
    console.log("ejecutado correctamente");

}
);

};

function consultarDatos(){
    var tablaR = document.getElementById("tabla");
    $query= 'select * from mecanicos;';
conexion2.query($query, function (err, rows, fields){
    if (err){
        console.log("error en query");
        console.log(err);
        return;
    } else {
        console.log("ejecutado correctamente", rows);

        const long= rows.length;
        for (i=0; i<long; i++){
           // var cadena = rows [i].idcliente + " " + rows[i].nombre + " " + rows[i].apellido + " " + rows[i].automovil_idautomovil + "\n";
           var newRow = tablaR.insertRow(-1);
    
           var celdaId = newRow.insertCell(0);
           var celdaNombre = newRow.insertCell(1);

           var textoNombre= document.createTextNode(rows[i].Nombre);
           var textoid = document.createTextNode(rows[i].id_mecanico);
           celdaId.appendChild(textoid);
           celdaNombre.appendChild(textoNombre);
    }
   
    }
}


)
}
function busqueda() {
    var busqueda = document.getElementById("search").value
    $query = `SELECT * FROM mecanicos WHERE apellido = '${busqueda}'`;
    var tablita = document.getElementById('tableSearch');
    conexion.query($query, function (err, rows, fields) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        }
        else {
            console.log("toodo bien", rows, fields)

            if (rows.length == 0) {
                alert("No hay nada")
            }
            else {
                var cadena = "";
                const long = rows.length;
                for (let i = 0; i < long; i++) {
                    const element = rows[i];
                    cadena += element.id_vatos + " " + element.nombre + " " + "\n";

                    var newRow = tablita.insertRow(-1);

                    var celdaId = newRow.insertCell(0);
                    var celdaNombre = newRow.insertCell(1);

                    var TextId = document.createTextNode(element.id_mecanico);
                    var textUser = document.createTextNode(element.apellido);

                    celdaId.appendChild(TextId);
                    celdaNombre.appendChild(textUser);
                }
                console.log(cadena);

            }
        }

    })
}