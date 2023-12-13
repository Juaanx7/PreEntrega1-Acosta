let monto = Number(prompt("Ingrese el monto a solicitar:"));

let cuotas = Number(prompt("Ingrese la cantidad de cuotas en que quiera pagarlo, como maximo 12"));

let tasaInteres = calculoInteres(cuotas);

let precioCuota = calculoCuotas(monto, tasaInteres, cuotas);

let devolucionTotal = devolucion(precioCuota, cuotas);



if (cuotas <= 12){    
    for (let i = 1; i <= cuotas; i ++){       
        calculoInteres(cuotas);       
        alert("Precio cuota " + i + ": " + precioCuota);
    }
    alert("En total devolvera: " + devolucionTotal);    
}else {
    alert("supero el maximo de cuotas permitido!");
}

function calculoInteres (cuotas){
   let tasaInteres = 0;
    if (cuotas <= 3){
    tasaInteres = 30;
   } else if (cuotas <= 6){
    tasaInteres = 60;
   } else if (cuotas <= 12){
    tasaInteres = 90;
   }
    
    return tasaInteres;
}

function calculoCuotas (monto, tasaInteres, cuotas){
    let interes = tasaInteres * 100;
    let precioCuota = (monto + interes) / cuotas;
    return precioCuota;
}


function devolucion (precioCuota, cuotas){    
    let total = precioCuota * cuotas
    return total
}