var nombre = document.querySelector("#nombre");
var apellido = document.querySelector("#Apellido");
var email = document.querySelector("#email");
var telefono = document.querySelector("#telefono");


// Opciones selector...
var model_selector = document.querySelector("#model_select");
var color_selector = document.querySelector("#Color");
var input_number = document.querySelector("#plazos_input");

var recogida_selector = {
    almacen: document.querySelector("#Almacen"),
    domicilio: document.querySelector("#Domicilio")
};

// Estado de validación de los campos
let valida_campo = {
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
};

// Estado de validación de los selectores
let valida_selector = {
    model_selector: false,
    color_selector: false,
    recogida_selector: false,
};

// Función para mostrar error
function seterror(input, mensaje) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    
    formcontrol.classList.remove("set_success_style");
    formcontrol.classList.add("set_error_style");
    
    if (small) {
        small.innerText = mensaje;
    }

}  
// Función para mostrar éxito
function setsuccess(input) {
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    
    formcontrol.classList.remove("set_error_style");
    formcontrol.classList.add("set_success_style");
    
    if (small) {
        small.innerText = ''; // Limpia el mensaje de error en caso de éxito
    }
}

// Función genérica para validar campos
function validarCampo(campo, regex, mensajeErrorVacio, mensajeErrorFormato) {
    campo.addEventListener("blur", () => {

        // Primero, validamos el teléfono
        if (campo.name === 'telefono') {
            if (campo.value == null || campo.value == "") {
                seterror(campo, "Telefono Vacio! Por favor introduzca un numero de telefono.");
                valida_campo[campo.name] = false;
            } else if (!regex.exec(campo.value)) {
                seterror(campo, "Formato de telefono incorrecto");
                valida_campo[campo.name] = false;
            } else {
                setsuccess(campo);
                valida_campo[campo.name] = true;

                // Si el teléfono es válido, no validar los otros campos
                valida_campo['nombre'] = true;
                valida_campo['apellido'] = true;
                valida_campo['email'] = true;
            }
        } else {
            // Si el teléfono es válido, no ejecutar la validación de otros campos
            if (valida_campo['telefono'] === true) return;

            if (campo.value == null || campo.value == "") {
                seterror(campo, mensajeErrorVacio);
            } else if (!regex.exec(campo.value)) {
                seterror(campo, mensajeErrorFormato);
            } else {
                setsuccess(campo);
                valida_campo[campo.name] = true;
            }
        }
    });
}

// Función para validar el selector

function validar_selector(selector, mensajeErrorVacio) {
    selector.addEventListener("blur", () => {
        console.log("Validando selector:", selector.name);
        // Verificar si el valor del selector es válido o está vacío
        if (selector.value === "" || selector.value === null) {
            seterror(selector, mensajeErrorVacio);
            valida_selector[selector.name] = false;
        } else {
            setsuccess(selector);
            valida_selector[selector.name] = true;
        }
    });
}

// Expresiones regulares
const name_re = /^[a-zA-Z ]{2,30}$/;
const email_re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telefono_re = /^[6-9]\d{4}(\d{1}|\d{4})?$/;


// Validación de campos
validarCampo(nombre, name_re, "Nombre vacío!", "Nombre incorrecto");
validarCampo(apellido, name_re, "Apellido vacío!", "Apellido incorrecto");
validarCampo(email, email_re, "Email vacío!", "El email no cumple con los estándares");
validarCampo(telefono, telefono_re, "Por favor introduzca un numero de telefono." , "Formato de telefono incorrecto") 
//validacion de selectores
validar_selector(model_selector,"violence is meaningless")
validar_selector(color_selector , "Por favor seleccione un color")
validar_selector(plazos_input , "Por favor introduzca un numero de plazos valido")
