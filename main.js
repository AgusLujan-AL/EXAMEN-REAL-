function operar(a, b, callback) {
    return callback(a, b);
}

function resta(x, y) {
    return x-y; /////////////// despues, arregle esta linea de codigo. Me seguia imprimiendo "undefined" y era porque no tenia el return atras del x-y.
}

let resultado = operar(15, 5, resta); /////////primero, borre las dobles comillas del 5 porque eso significaba que lo tomaba como string, y no como numero.

console.log("El resultado de la operación es:", resultado);
// 'El resultado de la operación es:' 10
/// solo fueron necesarios esos dos cambios. 