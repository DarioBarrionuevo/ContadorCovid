// Contador España

const divSpain = document.querySelector("#contadorSpain");

function cogerDatosSpain() {
  fetch("https://disease.sh/v3/covid-19/countries/spain")
    .then((response) => response.json()) //Lo paso de http a json
    .then((datos) => {
      const data = datos;

      // number.toLocaleString('de-DE', { style: 'decimal', decimal: '3' }) para que ponga los puntos

      divSpain.innerHTML = `
            
            <h3>Casos totales: ${data.cases.toLocaleString("de-DE")}</h3>
            <h3>Muertes totales: ${data.deaths.toLocaleString("de-DE")}</h3>
            <h3>Casos hoy: ${data.todayCases.toLocaleString("de-DE")}</h3>
            <h3>Muertes hoy: ${data.todayDeaths.toLocaleString("de-DE")}</h3>
            <h3>Estado critico: ${data.critical.toLocaleString("de-DE")}</h3>
                    `;
    })
    .catch((error) => {
      console.log(error);
    });
}

cogerDatosSpain();

setInterval(() => {
  cogerDatosSpain();
}, 43200000); //12 horas en milisegundos

// Contador Europa

const divEurope = document.querySelector("#contadorEurope");

function cogerDatosEurope() {
  fetch("https://disease.sh/v3/covid-19/continents/europe")
    .then((response) => response.json()) //Lo paso de http a json
    .then((datos) => {
      const data = datos;

      // number.toLocaleString('de-DE', { style: 'decimal', decimal: '3' }) para que ponga los puntos

      divEurope.innerHTML = `
            
            <h3>Casos totales: ${data.cases.toLocaleString("de-DE")}</h3>
            <h3>Muertes totales: ${data.deaths.toLocaleString("de-DE")}</h3>
            <h3>Casos hoy: ${data.todayCases.toLocaleString("de-DE")}</h3>
            <h3>Muertes hoy: ${data.todayDeaths.toLocaleString("de-DE")}</h3>
            <h3>Estado critico: ${data.critical.toLocaleString("de-DE")}</h3>
                    `;
    })
    .catch((error) => {
      console.log(error);
    });
}

cogerDatosEurope();

setInterval(() => {
  cogerDatosEurope();
}, 600000); //10 minutos en milisegundos

// Contador Mundo

const divAll = document.querySelector("#contadorAll");

function cogerDatosAll() {
  fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json()) //Lo paso de http a json
    .then((datos) => {
      const data = datos;

      // number.toLocaleString('de-DE', { style: 'decimal', decimal: '3' }) para que ponga los puntos

      divAll.innerHTML = `
            
            <h3>Casos totales: ${data.cases.toLocaleString("de-DE")}</h3>
            <h3>Muertes totales: ${data.deaths.toLocaleString("de-DE")}</h3>
            <h3>Casos hoy: ${data.todayCases.toLocaleString("de-DE")}</h3>
            <h3>Muertes hoy: ${data.todayDeaths.toLocaleString("de-DE")}</h3>
            <h3>Estado critico: ${data.critical.toLocaleString("de-DE")}</h3>
                    `;
    })
    .catch((error) => {
      console.log(error);
    });
}

cogerDatosAll();

setInterval(() => {
  cogerDatosAll();
}, 600000); //10 minutos en milisegundos
