var solicitudes = [{ monto: 100, moneda: 'USD' }, { monto: 200, moneda: 'CAN' }];
var cotizaciones = [
    { moneda: 'USD', cotizacionVenta: 200, cotizacionCompra: 195 },
    { moneda: 'CAN', cotizacionVenta: 120, cotizacionCompra: 110 }
];
// Clase que tiene un método de consulta las cotizaciones de la moneda solicitada y una vez realizada
// retorna los valores de la divisas correspondientes a la consulta.
var ConversionDivisa = /** @class */ (function () {
    function ConversionDivisa(monto, moneda) {
        this.monto = monto;
        this.moneda = moneda;
    }
    ConversionDivisa.prototype.consulta = function () {
        var _this = this;
        var consulta = cotizaciones.find(function (cotizacion) { return cotizacion.moneda === _this.moneda; });
        return {
            montoOriginal: this.monto,
            moneda: this.moneda,
            valorCompra: consulta.cotizacionCompra,
            totalCompra: consulta.cotizacionCompra * this.monto,
            valorVenta: consulta.cotizacionVenta,
            totalVenta: consulta.cotizacionVenta * this.monto
        };
    };
    return ConversionDivisa;
}());
// Ciclo que lee cada una de las solicitudes y llama a la clase que hace la conversión de divisas y 
// Luego hace la impresión del objeto en pantalla. 
solicitudes.forEach(function (solicitud) {
    console.log(new ConversionDivisa(solicitud.monto, solicitud.moneda).consulta());
});
