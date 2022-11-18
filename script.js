function porcentajeEstudiantes(){
var cantidadVarones = parseInt(document.getElementById('cantidadVarones').value);
var cantidadMujeres = parseInt(document.getElementById('cantidadMujeres').value);

console.log(cantidadVarones);
console.log(cantidadMujeres);

var cantidadTotal = cantidadVarones+cantidadMujeres;
var porcentajeVarones = (cantidadVarones/cantidadTotal)*100
var porcentajeMujeres = (cantidadMujeres/cantidadTotal)*100
var cadenaHombre=`${Math.round(porcentajeVarones)} %`;
var cadenamujer=`${ Math.round(porcentajeMujeres)} %`;

document.getElementById('cantidadEstudiantes').value=cantidadTotal;
document.getElementById('porcentajeVarones').value= cadenaHombre;
document.getElementById('porcentajeMujeres').value=cadenamujer;
}

function repartoMonto(){
var monto = parseFloat(document.getElementById('montoDinero').value);
var montoRepartido;
       var avMar =monto*0.35;
       var avAbancay=monto*0.25;
       var avJulio=monto*0.10;
       var avAviacion=monto*0.15;
       var montoRepartido=avMar+avAbancay+avJulio+avAviacion;
       var avTacna=monto-montoRepartido;

       var cadenMar = `S/. ${Math.round(avMar)}.00`;
       var cadenAbancay = `S/. ${Math.round(avAbancay)}.00`;
       var cadenJulio = `S/. ${Math.round(avJulio)}.00`;
       var cadenAviacion = `S/. ${Math.round(avAviacion)}.00`;
       var cadenTacna = `S/. ${Math.round(avTacna)}.00`;

    document.getElementById('avMar').value=cadenMar;
    document.getElementById('avAbancay').value=cadenAbancay;
    document.getElementById('avJulio').value=cadenJulio;
    document.getElementById('avAviacion').value=cadenAviacion;
    document.getElementById('avTacna').value=cadenTacna;

    console.log("Avenida La Mar :" + avMar);
    console.log("Avenida Ababcay :" + avAbancay);
    console.log("Avenida 28 de Julio :" + avJulio);
    console.log("Avenida Aviacion :" + avAviacion);
    console.log("Monto repartido:" + montoRepartido);
    console.log("Avenida Tacna:" + avTacna);
    }
    
    function entradasVendias(){
        var eGeneral = parseInt(document.getElementById('eGeneral').value);
        var eMayores = parseInt(document.getElementById('eMayores').value);
        var eMenores = parseInt(document.getElementById('eMenores').value);

        var totalEgeneral=eGeneral*150;
        var totalEmayores=eMayores*50;
        var totalEmenores=eMenores*80;

        var cadenEgeneral = `S/ ${totalEgeneral}.00`;
        var cadenEmayores = `S/ ${totalEmayores}.00`;
        var cadenEmenores = `S/ ${totalEmenores}.00`;

    document.getElementById('totalEgeneral').value=cadenEgeneral;
    document.getElementById('totalEmayores').value=cadenEmayores;
    document.getElementById('totalEmenores').value=cadenEmenores;

        console.log("Entrada General:" + totalEgeneral);
        console.log("Entrada Mayores de 65:" + totalEmayores);
        console.log("Entrada Menores:" + totalEmenores);
        }
//suma(90,60);
//repartoMonto(100);
//entradasVendias(10,5,6);
