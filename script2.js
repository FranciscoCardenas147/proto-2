function limpiar() {
  location.reload();
}


function calcularNeto() {
  impuesto = 19;
  let montoNeto = parseInt(document.getElementById("neto").value);
  let montoBruto = montoNeto + (montoNeto * (impuesto / 100));
  let montoNetoAl25 = montoNeto * 2.5;

  let montoNetoAl25Fixed = montoNetoAl25.toFixed(0);
  let montoNetoAl25Formateado = montoNetoAl25Fixed.toLocaleString('es-ES');



  let descNeto20 = (montoNetoAl25 * (20 / 100));
  // let descNeto20Formateado = descNeto20.toLocaleString('es-ES');
  let descNeto30 = (montoNetoAl25 * (30 / 100));
  let precioMasDescuento20 = montoNetoAl25 - (montoNetoAl25 * (20 / 100))
  let precioMasDescuento30 = montoNetoAl25 - (montoNetoAl25 * (30 / 100))

  // console.log(descNeto20Formateado)

  if (!montoNeto) {
    window.alert("Escriba en alguna casilla")
    return
  }

  document.getElementById("p1").innerHTML = `<b>A Pagar: $ ${montoNetoAl25Formateado}</b>`;
  document.getElementById("p1-1").innerHTML = `<b>Monto Bruto desde Neto: $${montoBruto.toFixed(0)}</b>`;
  document.getElementById("p1-1d20").innerHTML = `<b>${descNeto20.toFixed(0)} </b>`
  document.getElementById("p1-1d30").innerHTML = `<b>${descNeto30.toFixed(0)} </b>`
  document.getElementById("p1-1d30-20").innerHTML = `<b>A Pagar = ${precioMasDescuento20.toFixed(0)} </b>`
  document.getElementById("p1-1d30-30").innerHTML = `<b>A Pagar = ${precioMasDescuento30.toFixed(0)}</b>`


}




function calcularBruto() {

  let montoBrutoInput = parseFloat(document.getElementById("bruto").value);
  let montoBrutoAl21 = montoBrutoInput * 2.1;
  let montoBrutoAl21MasDesc20 = (montoBrutoAl21 * (20 / 100));
  let montoBrutoAl21MasDesc30 = (montoBrutoAl21 * (30 / 100));
  let precio2MasDescuento20 = montoBrutoAl21 - (montoBrutoAl21 * (20 / 100));
  let precio2MasDescuento30 = montoBrutoAl21 - (montoBrutoAl21 * (30 / 100));

  let MontoBrutoAl21Fixed = montoBrutoAl21.toFixed(0);
  let MontoBrutoAl21Formateado = MontoBrutoAl21Fixed.toLocaleString('es-ES');

  if (!montoBrutoInput) {
    window.alert("Escriba en alguna casilla")
    return
  }

  document.getElementById("p2").innerHTML = `<b>A Pagar: $ ${MontoBrutoAl21Formateado}</b>`;
  document.getElementById("p2-2d20").innerHTML = `<b>${montoBrutoAl21MasDesc20.toFixed(0)}</b>`;
  document.getElementById("p2-2d30").innerHTML = `<b>${montoBrutoAl21MasDesc30.toFixed(0)}</b>`;
  document.getElementById("p2-2d30-20").innerHTML = `<b>A Pagar = ${precio2MasDescuento20.toFixed(0)}</b>`;
  document.getElementById("p2-2d30-30").innerHTML = `<b>A Pagar = ${precio2MasDescuento30.toFixed(0)}</b>`;

}
