// Funciones para la página del gimnasio

// Función para mostrar un consejo de salud aleatorio (para index.html)
function mostrarConsejo() {
    var consejos = [
        "Mantente hidratado: bebe al menos 2 litros de agua al día.",
        "Descansa bien: dormir 7-8 horas es clave para la recuperación.",
        "No te saltes el calentamiento antes de entrenar.",
        "Come frutas y verduras variadas cada día.",
        "La constancia es más importante que la intensidad."
    ];
    
    // Generar un índice aleatorio
    var indice = Math.floor(Math.random() * consejos.length);
    
    // Mostrar el consejo
    alert("Consejo del día: " + consejos[indice]);
}

// Función para calcular el Índice de Masa Corporal (para dieta.html)
function calcularIMC() {
    var peso = prompt("Introduce tu peso en kg:");
    var altura = prompt("Introduce tu altura en metros (ej: 1.75):");
    
    if (peso && altura) {
        var imc = peso / (altura * altura);
        var resultado = "";
        
        if (imc < 18.5) {
            resultado = "Bajo peso";
        } else if (imc >= 18.5 && imc < 25) {
            resultado = "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            resultado = "Sobrepeso";
        } else {
            resultado = "Obesidad";
        }
        
        alert("Tu IMC es: " + imc.toFixed(2) + "\nClasificación: " + resultado);
    } else {
        alert("Por favor, introduce datos válidos.");
    }
}

// Función para validar el formulario de contacto (para contacto.html)
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("fecha-nacimiento").value;
    
    if (nombre == "") {
        alert("El nombre es obligatorio.");
        return false;
    }
    
    var confirmacion = confirm("¿Estás seguro de enviar el formulario, " + nombre + "?");
    return confirmacion;
}
