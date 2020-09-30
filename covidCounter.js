const div = document.querySelector("#contador");

function cogerDatosCOVID() {
  fetch("https://disease.sh/v3/covid-19/countries/spain")
    .then((response) => response.json()) //Lo paso de http a json
    .then((datos) => {
      const data = datos;

      div.innerHTML = `
            
            <h3>Casos totales: ${data.cases}</h3>
            <h3>Muertes totales: ${data.deaths}</h3>
            <h3>Casos hoy: ${data.todayCases}</h3>
            <h3>Muertes hoy: ${data.todayDeaths}</h3>
            <h3>Estado critico: ${data.critical}</h3>
                    `;
    })
    .catch((error) => {
      console.log(error);
    });
}

cogerDatosCOVID();

setInterval(() => {
  cogerDatosCOVID();
}, 600000);
