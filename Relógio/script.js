const areaHora = document.getElementById('hora');
const areaMinuto = document.getElementById('minuto');
const areaSegundo = document.getElementById('segundo');

const contar = setInterval(() => {
    let relogio = new Date();

    let hora = relogio.getHours();
    let minuto = relogio.getMinutes();
    let segundo = relogio.getSeconds();

    areaHora.innerHTML = hora;
    areaMinuto.innerHTML = minuto;
    areaSegundo.innerHTML = segundo;
})

