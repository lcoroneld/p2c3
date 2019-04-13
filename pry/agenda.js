$(document).ready(function () {
    $("#btnregistrar").click(function (e) { 
        e.preventDefault();
        registrar();
    });
    
    $("body").on("click", ".opcion-eliminar", function (e) {
        e.preventDefault();
        var fila = $(this).parents().get(1);
        fila.remove();
    });

});

function registrar()
{
    var nombre = $("#txtnombre").val();
    var correo = $("#txtcorreo").val();
    var fecha = $("#txtfecha").val();
    var pais = $("#cbopais").val();
    var sexo = $("input:radio[name=rbsexo]:checked").val();

    // Creacion de fila
    var fila = "";
    fila+="<tr>";
    fila+="<td>"+nombre+"</td>";
    fila+="<td>"+correo+"</td>";
    fila+="<td>"+fecha+"</td>";
    fila+="<td>"+pais+"</td>";
    fila+="<td>"+sexo+"</td>";
    fila+="<td>"+'<button class="btn btn-danger btn-sm opcion-eliminar">x</button>'+"</td>";
    fila+="</tr>";

    // Agregar fila a tbody
    $("#tbldatos").append(fila);

    console.log("Nombre: "+nombre);
    console.log("Correo: "+correo);
    console.log("Fecha nacimiento: "+fecha);
    console.log("País: "+pais);
    console.log("Sexo: "+sexo);
}