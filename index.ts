let solicitudes : Solicitud[] = [{monto:100, moneda : 'USD'}, {monto : 100, moneda : 'CAN'}]
let cotizaciones : Cotizaciones[] = [{moneda: 'USD', cotizacion : 200 }, { moneda : 'CAN', cotizacion : 120 }]

interface Solicitud {
    monto : number,
    moneda : string
}

interface Cotizaciones {
    moneda : string,
    cotizacion : number
}