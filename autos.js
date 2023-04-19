function auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = []

var respuesta = prompt("Quieres registrar un auto Y = 1 N = 2");

while (respuesta != 2) {

    var marca = prompt("Introduce la marca: ");
    var modelo = prompt("Introduce el modelo: ");
    var annio = prompt("Introduce el año: ");
    autos.push(new auto (marca, modelo, annio));

    var respuesta = prompt("Quieres registrar otro auto Y = 1 N = 2");
}


for (var i = 0; i < autos.length; i++){
    console.log(autos[i]);
}
