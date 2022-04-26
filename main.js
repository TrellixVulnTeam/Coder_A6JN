const arrayPedido = [];
let presentacionProductos;
let cliente;
let contacto;
let miFormulario;
let input1;
let forma;
let forma2;
var i;
var precioTotal = 0;
var k = 0;
let unUsuario;
let precioFinal;
let datos;
let empresa;
var descuento;
const nuevoArray = [];
const empresasRecomendadas = ["renacer", "norton", "crotta"]; // cuando la web reconozca estas empresas, la misma les aplicará un 10% de descuento
const empresasAmigas = ["aroldos", "trivento", "gasconi", "chandon"]; // cuando la web reconozca estas empresas, la misma les aplicará un 20% de descuento
const empresasSocias=["coviar", "fecovita", "Bodegas Argentinas"]; //cuando la web reconozca estas empresas, la misma les aplicará un 30% de descuento


let calculadora;


const arrayPrecio = [{
        nombre: 'Basic 1',
        precio: 100
    },
    {
        nombre: 'Basic 2',
        precio: 200
    },
    {
        nombre: 'Basic 3',
        precio: 300
    },
    {
        nombre: 'Basic 4',
        precio: 400
    },
    {
        nombre: 'Phenolic 1',
        precio: 100
    },
    {
        nombre: 'Phenolic 2',
        precio: 200
    },
    {
        nombre: 'Phenolic 3',
        precio: 300
    },
    {
        nombre: 'Phenolic 4',
        precio: 400
    },
];

console.log(arrayPrecio);


class Analisis {
    constructor(nombre, cantidad, codigo) {
        this.nombre = nombre;
        this.cantidad = parseInt(cantidad);
        this.codigo = parseInt(codigo);
        this.descuento = this.descuento;
    }

    ingresarDatos() {
        do {
            this.cantidad = parseInt(prompt("Ingresar cantidad a analizar:  "));
        } while (this.cantidad < 0);

        this.codigo = parseInt(prompt("Ingrese codigo promocional. Valores válidos para descuentos:\n1 - 14410 para el 10%.\n2 - 24420 para el 20%.\n3 - 34430 para el 30%."));

    }
    ingresarNombre() {
        let confirm;
        do {
            this.nombre = parseInt(prompt("Ingrese nombre del análisis.\nValores válidos:\n1 - Phenolic 1.\n2 - Phenolic 2.\n3 - Phenolic 3.\n4 - Phenolic 4.\n5 - Basic 1.\n6 - Basic 2.\n7 - Basic 3.\n8 - Basic 4."));
            switch (this.nombre) {
                case 1:
                    this.nombre = "Phenolic 1";
                    confirm = false;
                    break;
                case 2:
                    this.nombre = "Phenolic 2";
                    break;
                case 3:
                    this.nombre = "Phenolic 3";
                    confirm = false;
                    break;
                case 4:
                    this.nombre = "Phenolic 4";
                    confirm = false;
                    break;
                case 5:
                    this.nombre = "Basic 1";
                    confirm = false;
                    break;
                case 6:
                    this.nombre = "Basic 2";
                    confirm = false;
                    break;
                case 7:
                    this.nombre = "Basic 3";
                    confirm = false;
                    break;
                case 8:
                    this.nombre = "Basic 4";
                    confirm = false;
                    break;
                default:
                    confirm = true;
                    break;
            }

        } while (confirm);

    }
/*
    evaluarCodigoPromocional() {
        switch (this.codigo) {
            case 14410:
                this.descuento = 0.1;
                break;
            case 24420:
                this.descuento = 0.2;
                break;
            case 34430:
                this.descuento = 0.3;
                break;
            default:
                this.descuento = 0;
                break;
        }
    }
*/
}


let boton1 = document.getElementById("btnNombre");
boton1.addEventListener("click", presentacionCliente);
//boton1.onclick = () => (console.log("boton pinchado"));
//boton1.onmousemove = () => (console.log("pasaste con el raton arriba del botón rojo"));

let boton2 = document.getElementById("btnProductos");
boton2.addEventListener("click", presentacion);
//boton2.onclick = () => (console.log("pinchaste la presentacion de productos"));

let boton3 = document.getElementById("btnAnalisis");
boton3.addEventListener("click", ingresarAnalisis);
//boton3.onclick = () => (console.log("pinchaste la selección de análisis"));

let boton4 = document.getElementById("btnContacto");
boton4.addEventListener("click", ingresarContacto);
//boton4.onclick = () => (console.log("pinchaste el formulario de contacto"));

let boton5 = document.getElementById("btnCalculadora");
boton5.addEventListener("click", calcular);
//boton5.onclick = () => (console.log("pinchaste la calculadora"));

let boton6 = document.getElementById("btnMostrar");
boton6.addEventListener("click", mostrar);
//boton6.onclick = () => (console.log("pinchaste el boton mostrar"));


function presentacionCliente() {
    cliente = document.getElementById("usuario");
    cliente.innerHTML = `
    <form id="formEmpresa" class="container">
    <input type="text" class="form-control" id="miUsuario" placeholder="U & V Análisis">
    </form>`;
    empresa = document.getElementById("miUsuario");
    empresa.addEventListener("submit", validarEmpresa);
    localStorage.setItem('miUsuario', empresa);
    unUsuario = localStorage.getItem('miUsuario');
}





function ingresarAnalisis() {
    do {
        console.log(k);
        arrayPedido[k] = new Analisis();
        arrayPedido[k].ingresarNombre();
        arrayPedido[k].ingresarDatos();
        arrayPedido[k].evaluarCodigoPromocional();
        k++;
        control = confirm("¿Ingresará otro analisis mas?");

    } while (control);
    console.log(arrayPedido);
    const pedidoLocal = (clave, valor) => {
        localStorage.setItem(clave, valor)
    }
    pedidoLocal("listaAnalisis", JSON.stringify(arrayPedido));
}



function presentacion() {
    presentacionProductos = document.getElementById("analisys");
    presentacionProductos.innerHTML = "<h3>Los productos que seleccionó son: <h3>";
    for (const pedido of arrayPedido) {
        contenedor = document.createElement("div");
        contenedor.innerHTML = `<p> Análisis: ${pedido.nombre}</p>
            <p>Cantidad: ${pedido.cantidad}</p>`;
        document.getElementById("analisys").appendChild(contenedor);
    }

}

function ingresarContacto() {
    contacto = document.getElementById("form");
    contacto.innerHTML = `
    <form id="formulario" class= "container">
    <input type="text" class="form-control" id="nombreEmpresa" placeholder="Gondelsol Inc">
    <input type="text" class="form-control" id="nombreUsuario" placeholder="Joaquin">
    <input type="text" class="form-control" id="apellidoUsuario" placeholder="Gonzalez del Solar">
    <input type="number" class="form-control" id="numeroDNI" placeholder="31000111">
    <input type="tel" class="form-control" id="numeroTelefono" placeholder="Ex. +54261666666">
    <input type="email" class="form-control" id="ecorreo" placeholder="example@email.com.ar">
    <input type="submit" value="Enviar">
</form> `;
    miFormulario = document.getElementById("formulario");
    miFormulario.addEventListener("submit", validarFormulario);

    input1 = document.getElementById("nombreUsuario");
    input1.onchange = () => {
        console.log(" Ingresaste el nombre de pila")
    }
}


function validarEmpresa() {
    e.preventDefault();
    forma2 = e.target;

    console.log(Joaquin || "la empresa no está registrada");
}

function validarFormulario(e) {
    e.preventDefault();

    forma = e.target;
    console.log("Formulario enviado con los siguientes datos: ");
    console.log("Empresa: " + forma.children[0].value);
    console.log("Nombre: " + forma.children[1].value);
    console.log("Apellido: " + forma.children[2].value);

    // empleo de operadores avanzados para identificar empresas recomendadas, amigas y socias para aplicar descuentos

    const [a, b, c] = empresasRecomendadas;
    forma.children[0].value == (a || b || c) && alert("La empresa es recomendada. Obtendrá un 10 % de descuento sobre su compra"); descuento = 0.1  ;

   // const [d, e, f] = empresasAmigas;
  //  forma.children[0].value == (d || e || f) && alert("La empresa es amiga. Obtendrá un 20 % de descuento sobre su compra") descuento = 0.3  ;

    //const [g, h, i] = empresasSocias;
    //forma.children[0].value == (g || h || i) && alert("La empresa es socia. Obtendrá un 30 % de descuento sobre su compra"); descuento = 0.3  ;

}



function calcular() {

    for (i = 0; i < arrayPedido.length; i++) {
        for (j = 0; j < arrayPrecio.length; j++) {
            if (arrayPedido[i].nombre == arrayPrecio[j].nombre) {
                precioTotal = precioTotal + ((arrayPedido[i].cantidad) * arrayPrecio[j].precio) * (1 - descuento);
            }
        }
    }
    console.log(precioTotal);
    calculadora = document.getElementById("precio");
    calculadora.innerHTML = ` <div class="container">
<p>El precio total es $ ${precioTotal}</p>
</div> `;
    localStorage.setItem('valor', JSON.stringify(precioTotal));
    precioFinal = localStorage.getItem('valor');

}


function mostrar() {
    console.log("el array tiene objetos:  " + arrayPedido.length);
    const cantidadAnalisis = arrayPedido.reduce((acc, el) => acc + el.cantidad, 0);
    console.log("cantidad de analisis a realizar: " + cantidadAnalisis);

    const arrayBasic = arrayPedido.filter((el) => el.nombre.includes('Basic'));
    console.log(...arrayBasic); //separo los objetos del array para mostrarlos por consola, envío los parámetros por separado


    const arrayPhenolic = arrayPedido.filter((el) => el.nombre.includes('Phenolic'));
    console.log(...arrayPhenolic); //separo los objetos del array para mostrarlos por consola, envío los parámetros por separado

    console.log(precioFinal);
    console.log(unUsuario);
    datos = {
        nombre: unUsuario,
        precio: precioFinal
    };
    console.log(datos);
    const objetos = (clave, valor) => {
        localStorage.setItem(clave, valor)
    }
    objetos("NombrePrecio", JSON.stringify(datos));

}