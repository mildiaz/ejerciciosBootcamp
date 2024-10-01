function verificarEdad(){
let edad = document.getElementById("edad").value;
let resultado = document.getElementById("resultado");

//Eliminar clases previamente aplicadas
    resultado.classList.remove("mensaje-error", "mensaje-invalido","mensaje-valido");

if(edad == ""){
    resultado.textContent = "Por favor, ingresa tu edad.";
    resultado.classList.add("mensaje-error");

} else if (edad <= 0){
    resultado.textContent = "La edad no puede ser negativa o igual a = 0";
    resultado.classList.add("mensaje-invalido");

} else if (edad >= 120){
    resultado.textContent = "La longitud de la edad es mayor que la esperada";
    resultado.classList.add("mensaje-invalido");
}

else if (edad >18){
    resultado.textContent = "Eres una persona mayor de edad. Puedes ingresar al sitio";
    resultado.classList.add("mensaje-valido");
} else{ 
    resultado.textContent = "Eres menor de edad";
    resultado.classList.add("mensaje-error");
}

}


