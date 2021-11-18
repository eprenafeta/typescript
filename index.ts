let solicitudes : Solicitud[] = [{monto:100, moneda : 'USD'}, {monto : 200, moneda : 'CAN'}]
let cotizaciones : Cotizaciones[] = [
                                     {moneda: 'USD', cotizacionVenta : 200, cotizacionCompra : 195 },
                                     { moneda : 'CAN', cotizacionVenta : 120 , cotizacionCompra : 110}
                                    ]

interface Solicitud {
    monto : number,
    moneda : string
}

interface Cotizaciones {
    moneda : string,
    cotizacionVenta : number,
    cotizacionCompra : number
}

// Clase que tiene un método de consulta las cotizaciones de la moneda solicitada y una vez realizada
// retorna los valores de la divisas correspondientes a la consulta.
class ConversionDivisa {
    monto
    moneda
    constructor( monto , moneda) {
        this.monto = monto
        this.moneda = moneda
    }
    
    consulta(){
        let consulta = cotizaciones.find( cotizacion => cotizacion.moneda === this.moneda )
        return  { 
                  montoOriginal : this.monto,
                  moneda : this.moneda,
                  valorCompra : consulta.cotizacionCompra,
                  totalCompra : consulta.cotizacionCompra * this.monto, 
                  valorVenta : consulta.cotizacionVenta,
                  totalVenta : consulta.cotizacionVenta * this.monto
                } 
    }
}

// Ciclo que lee cada una de las solicitudes y llama a la clase que hace la conversión de divisas y 
// Luego hace la impresión del objeto en pantalla. 

solicitudes.forEach( solicitud => {
    console.log(  new ConversionDivisa( solicitud.monto, solicitud.moneda ).consulta() )
});