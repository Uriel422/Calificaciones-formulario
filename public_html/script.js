function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;
    
    let edad = document.getElementById("edad").value;

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    
    // agregamos una cuarta calificación
    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Validar que los datos estén completos

    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Calcular promedio (ahora con la cuerta calificacion)

    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Mostrar resultado
    
    //Si la calificación es igual a 10 o mayor o igual a 9

    if (promedio === 10 || promedio >=9) {

        document.getElementById("resultado").innerHTML +=
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>EXCELENTE<br><br>";

    }
    else
    //Si la calificación es mayor o igual a 8 y menor a 9
    if (promedio >= 8  && promedio < 9){
        document.getElementById("resultado").innerHTML +=
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>MUY BIEN<br><br>";
    }
    else
    //Si la calificación es mayor o igual a 7 y menor o igual a 7.9
    if (promedio >= 7 && promedio <= 7.9){
        
        document.getElementById("resultado").innerHTML +=
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>BIEN<br><br>";
    }
    else
    //Si la calificación es mayor o igual a 6.5 y menor o igual a 6.9
    if (promedio >= 6.5 && promedio <= 6.9){
        
        document.getElementById("resultado").innerHTML +=
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>PIENSA EN CONTA<br><br>";
    }
    else
    //Si la calificación es mayor o igual a 6 y menor o igual a 6.4
    if (promedio >= 6 && promedio <= 6.4){
        
        document.getElementById("resultado").innerHTML +=
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>DATE DE BAJA<br><br>";
    }
    else
    //Si la calificación es mayor o igual a 0 y menor o igual a 5.9
    if (promedio >= 0 && promedio <= 5.9){
        // usando .innerHTML += en lugar de .innerHTML =, hacemos que sea posible acumular los resultados del
        //formulario dentro del div de resultado
        document.getElementById("resultado").innerHTML +=
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong>" + edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>VETE A TURISMO O A LA 11<br><br>";
    }

}
//La función limpiar hace que el texto antes escrito en el formulario junto con el resultado en el div
//de resultados vuelva a estar en blanco
function limpiar(){
    document.getElementById("nombre").value="";
    document.getElementById("edad").value="";
    document.getElementById("calificacion1").value="";
    document.getElementById("calificacion2").value="";
    document.getElementById("calificacion3").value="";
    document.getElementById("calificacion4").value="";
    document.getElementById("resultado").innerHTML="";
}
//La función de agregarotro hace que se vacie nuevamente el formulario, pero sin eliminar los resultados
//anteriores, y junto con .innerHTML += que permite que las respuestas se acumulen se logra que 
//se pueda ingresar otro estudiante
function agregarotro(){
    document.getElementById("nombre").value="";
    document.getElementById("edad").value="";
    document.getElementById("calificacion1").value="";
    document.getElementById("calificacion2").value="";
    document.getElementById("calificacion3").value="";
    document.getElementById("calificacion4").value="";
}