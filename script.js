// Variables de la funcion obtenerUsuario
let nombre = "";
let apellido = "";
let edad = "";
// Variables de la funcion mostrarMenu
let articulos = "Tu carrito de compra contiene: \n";
let precioParcial = 0;
let precioTotal = 0;
let iva = 0;
let continuarCompra = true;


function obtenerUsuario(){

    nombre = prompt("Ingresa tu nombre: ");
    apellido = prompt("Ingresa tu apellido: ");
    edad = prompt("Ingresa tu edad: ");

    while(nombre === "" || apellido === "" || edad === "" || isNaN(edad) || edad < 18){
        
        nombre = prompt("Ingresa tu nombre: ");
        apellido = prompt("Ingresa tu apellido: ");
        edad = prompt("Ingresa tu edad: ");

        if(nombre === "" || apellido === "" || edad === ""){
            alert("Por favor ingresa Nombre, Apellido y Edad nuevamente.");
        }else if (isNaN(edad)) {
            alert("Por favor, ingresa una edad válida.");
        }else if (edad < 18) {
            alert("Debes ser mayor de 18 años.");
        }

    }

    alert("Bienvenido a nuestro sitio " + nombre + " " + apellido);

}

function mostrarMenu(){

    obtenerUsuario();

    let categoria = prompt("Selecciona la categoría:\n 1. Computadoras.\n 2. Impresoras.\n 3. Monitores.\n 4. Salir ");

    while(continuarCompra){


        switch(categoria){

            case "1": 

                    let computadoras = prompt("Computadoras.\n 1. Acer A350 - U$S 650\n 2. Mcbook Air M3 - U$S 1049\n 3. Lenovo T490S - U$S 509\n 4. Volver al menú");

                    if(computadoras === "1"){
                        alert("Agregaste a tu carrito: Acer A350 - U$S 650");
                        articulos = articulos.concat("Acer A350 - U$S 650\n");
                        precioParcial += 650;
                        iva += 650 * 0.21;
                    }else if(computadoras === "2"){
                        alert("Agregaste a tu carrito: Mcbook Air M3 - U$S 1049");
                        articulos = articulos.concat("Mcbook Air M3 - U$S 1049\n");
                        precioParcial += 1049;
                        iva += 1049 * 0.21;
                    }else if(computadoras === "3"){
                        alert("Agregaste a tu carrito: Lenovo T490S - U$S 509");
                        articulos = articulos.concat("Lenovo T490S - U$S 509\n");
                        precioParcial += 509;
                        iva += 509 * 0.21;
                    }
                    else if(computadoras === "4"){

                        categoria = prompt("Selecciona la categoría:\n 1. Computadoras.\n 2. Impresoras.\n 3. Monitores.\n 4. Salir ");

                    }else{
                        alert("Opción no valida!!");
                    }

            break;

            case "2": 

                    let impresoras = prompt("Impresoras.\n 1. Epson L220 - U$S 220\n 2. Canon G4110 - U$S 330\n 3. Brother HL1212 - U$S 129\n 4. Volver al menu");

                    if(impresoras === "1"){
                        alert("Agregaste a tu carrito: Epson L220 - U$S 220");
                        articulos = articulos.concat("Epson L220 - U$S 220\n");
                        precioParcial += 220;
                        iva += 220 * 0.21;
                    }else if(impresoras === "2"){
                        alert("Agregaste a tu carrito: Canon G4110 - U$S 330");
                        articulos = articulos.concat("Canon G4110 - U$S 330\n");
                        precioParcial += 330;
                        iva += 330 * 0.21;
                    }else if(impresoras === "3"){
                        alert("Agregaste a tu carrito: Brother HL1212 - U$S 129");
                        articulos = articulos.concat("Brother HL1212 - U$S 129\n");
                        precioParcial += 129;
                        iva += 129 * 0.21;
                    }
                    else if(impresoras === "4"){

                        categoria = prompt("Selecciona la categoría:\n 1. Computadoras.\n 2. Impresoras.\n 3. Monitores.\n 4. Salir ");

                    }else{
                        alert("Opción no valida!!");
                    }

            break;

            case "3":

                    let monitores = prompt("Monitores.\n 1. Acer VG270 - U$S 311\n 2. LG 27GP750 - U$S 315\n 3. Samsung Odyssey - U$S 699\n 4. Volver al menu");

                    if(monitores === "1"){
                        alert("Agregaste a tu carrito: Acer VG270 - U$S 311");
                        articulos = articulos.concat("Acer VG270 - U$S 311\n");
                        precioParcial += 311;
                        iva += 311 * 0.21;
                    }else if(monitores === "2"){
                        alert("Agregaste a tu carrito: LG 27GP750 - U$S 315");
                        articulos = articulos.concat("LG 27GP750 - U$S 315\n");
                        precioParcial += 315;
                        iva += 315 * 0.21;
                    }else if(monitores === "3"){
                        alert("Agregaste a tu carrito: Samsung Odyssey - U$S 699");
                        articulos = articulos.concat("Samsung Odyssey - U$S 699\n");
                        precioParcial += 699;
                        iva += 699 * 0.21;
                    }
                    else if(monitores === "4"){

                        categoria = prompt("Selecciona la categoría:\n 1. Computadoras.\n 2. Impresoras.\n 3. Monitores.\n 4. Salir ");

                    }else{
                        alert("Opción no valida!!");
                    }
                
            break;

            case "4":

                continuarCompra = false;

            break;

        }

    }

    precioTotal = precioParcial + iva;
    alert(articulos + "\nPrecio Parcial U$S " + precioParcial + "\nIva 21% U$S " + iva.toFixed(2) + "\nPrecio Total U$S " + precioTotal.toFixed(2) + "\nGracias por tu compra, te esperamos pronto!");

}

mostrarMenu();
