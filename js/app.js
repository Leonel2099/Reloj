function obtenerHora() {
  let fechaActual = new Date();
  if (fechaActual.getHours() >= 12 ) {
    let tarde = document.querySelector("#pm");
    tarde.classList.add("ampm");
  } else {
    let mañana = document.querySelector("#am");
    mañana.classList.add("ampm");
  }
  let hora = document.querySelector("#hora");
  let horas = fechaActual.getHours(),
    minutos = fechaActual.getMinutes(),
    segundos = fechaActual.getSeconds();
  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
  hora.innerHTML = `${horas}:${minutos}:${segundos}`;
}
function obtenerFecha() {
  function escribirDiasMes(diasDelMes) {
    for (let i = primerDia(); i > 0; i--) {
      fechas.innerHTML += `<li class="diasMesAnterior">${cantidadDiasMeses(fechaActual.getMonth() - 1) - (i - 1)}</li>`;
    }
    for (let i = 1; i <= cantidadDiasMeses(diasDelMes); i++) {
      if (i === fechaActual.getDate()) {
        fechas.innerHTML += `<li class="fechaHoy">${i}</li>`;
      } else {
        fechas.innerHTML += `<li>${i}</li>`;
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
  let fechas = document.querySelector("#fecha");
  escribirDiasMes(fechaActual.getMonth());
}

obtenerFecha();
setInterval(obtenerHora, 1000);
