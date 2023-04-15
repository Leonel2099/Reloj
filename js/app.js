let fechaActual = new Date();
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Ocutbre",
  "Noviembre",
  "Diciembre",
];
let mesAnio = document.querySelector("#mesAnio");
console.log(fechaActual.getDay());
mesAnio.innerHTML = `${meses[fechaActual.getMonth()]} ${fechaActual.getFullYear()}`;
let dias = document.querySelector("#dias");
function escribirDiasMes(diasDelMes) {
  for (let i = primerDia(); i > 0; i--) {
    dias.innerHTML += `<li class="diasMesAnterior">${cantidadDiasMeses(fechaActual.getMonth() - 1) - (i - 1)}</li>`;
  }
  for(let i=1; i<=cantidadDiasMeses(diasDelMes); i++){
    if(i===fechaActual.getDate()) {
        dias.innerHTML += `<li class="fechaHoy">${i}</li>`
    }else{
        dias.innerHTML += `<li>${i}</li>`
    }
}
}

function cantidadDiasMeses(mes) {
  if (mes === 3 || mes === 5 || mes === 8 || mes === 10) {
    return 30;
  } else if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
    return 31;
  } else {
    return esAnioViciesto() ? 29 : 28;
  }
}
const primerDia = () => {
  let start = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
  return start.getDay() - 1 === -1 ? 6 : start.getDay() - 1;
};
const esAnioViciesto = () => {
  return (
    (fechaActual.getFullYear() % 100 !== 0 && fechaActual.getFullYear() % 4 === 0) ||
    fechaActual.getFullYear() % 400 === 0
  );
};

escribirDiasMes(fechaActual.getMonth());
