//PRIMER PUNTO  
var dato = document.getElementById("dato")
var claseDato = document.querySelector(".dato")
var btnEnviar = document.getElementById('btn-enviar')
var tableta = document.getElementById("tableta")
var suma = document.getElementById("suma")
var regExpNumero = /^[0-9]/
var total = 0

function sumar() {
    //generar error
    if (regExpNumero.test(dato.value)) {
        claseDato.lastElementChild.innerHTML = " "
    } else {
        claseDato.lastElementChild.innerHTML = `<span class="text-danger">El dato debe contener NUMEROS </span>`
    }

    for (var n = 1; n <= dato.value; n++) {
        var div = document.createElement("div")
        var tr = document.createElement('tr')
        var th = document.createElement('th')

        tableta.appendChild(div)
        div.appendChild(tr)
        tr.appendChild(th)
        th.innerHTML = `${n}`

        total += n
    }
    suma.lastElementChild.innerHTML = `${total}`
}

//SEGUNDO PUNTO

var datoIngresado = document.getElementById("datoIngresado")
var seraPar = document.getElementById("esPar")
var btnEnviar2 = document.getElementById("btn-enviar2")

function esPar() {
    if (datoIngresado.value % 2 == 0) {
        seraPar.innerHTML = `<span class="text-success h2">ES PAR</span>`
    } else {
        seraPar.innerHTML = `<span class="text-danger h2">ES IMPAR</span>`
    }
}

//TERCER PUNTO

var edad = document.getElementById("edad")
var genero = document.getElementById("genero")
var premio = document.getElementById("premio")
var premio2 = document.getElementById("premio2")

function validar() {
    if (edad.value <= 10) {
        premio.innerHTML = `<span class="text-success h2">GANASTE UN JUGO</span>`
    } if (edad.value >= 18) {
        premio.innerHTML = `<span class="text-success h2">GANASTE UNA CERVEZA</span>`
        if (genero.value === "hombre") {
            premio2.innerHTML = `<span class="text-success h2"> Y UNA PORCION DE PIZZA CON TRES CARNES</span>`
        } if (genero.value === "mujer") {
            premio2.innerHTML = `<span class="text-success h2"> Y UNA PORCION DE PIZZA HAWAIANA</span>`
        }
    } else {
        if (edad.value > 10 && edad.value < 18) {
            premio.innerHTML = `<span class="text-danger h2">NO GANASTE NADA</span>`
            premio2.innerHTML = " "
        }
    }
}

// CUARTO PUNTO

var lomoCerdo = document.getElementById("lomoCerdo")
var polloSalsa = document.getElementById("polloSalsa")
var costillaB = document.getElementById("costillaB")
var maracuya = document.getElementById("maracuya")
var mora = document.getElementById("mora")
var limonada = document.getElementById("limonada")
var ensalada = document.getElementById("ensalada")
var gelatina = document.getElementById("gelatina")
var donas = document.getElementById("donas")
var modalBody = document.querySelector('.modal-body')


function agregar() {
    //Lomo Cerdo
    if (lomoCerdo.checked) {
        localStorage.setItem('lomo cerdo', lomoCerdo.value)
    } else {
        localStorage.removeItem('lomo cerdo')
    }
    //Pollo en Salsa
    if (polloSalsa.checked) {
        localStorage.setItem('polloSalsa', polloSalsa.value)
    } else {
        localStorage.removeItem('polloSalsa')
    }
    //Costillas BBQ
    if (costillaB.checked) {
        localStorage.setItem('costillaB', costillaB.value)
    } else {
        localStorage.removeItem('costillaB')
    }
    //Maracuya en leche
    if (maracuya.checked) {
        localStorage.setItem('maracuya', maracuya.value)
    } else {
        localStorage.removeItem('maracuya')
    }
    //Mora en agua
    if (mora.checked) {
        localStorage.setItem('mora', mora.value)
    } else {
        localStorage.removeItem('mora')
    }
    //Limonada
    if (limonada.checked) {
        localStorage.setItem('limonada', limonada.value)
    } else {
        localStorage.removeItem('limonada')
    }
    //Ensalada
    if (ensalada.checked) {
        localStorage.setItem('ensalada', ensalada.value)
    } else {
        localStorage.removeItem('ensalada')
    }
    //Gelatina
    if (gelatina.checked) {
        localStorage.setItem('gelatina', gelatina.value)
    } else {
        localStorage.removeItem('gelatina')
    }
    //Donas
    if (donas.checked) {
        localStorage.setItem('donas', donas.value)
    } else {
        localStorage.removeItem('donas')
    }

}

function resumen_carrito() {
    //Lomo Cerdo
    if(localStorage.getItem('lomo cerdo') != null){
        var lomoCerdo = localStorage.getItem("lomo cerdo")
        modalBody.innerHTML = `
    <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-50">Lomo de Cerdo</li>
        <li class="list-group-item w-50"> <b>$${lomoCerdo}</b> </li>
    </ul>`
    }else{
        modalBody.innerHTML = ` `
    }
    //Pollo en Salsa
    if(localStorage.getItem('polloSalsa') != null){
        var polloSalsa = localStorage.getItem("polloSalsa")
        modalBody.innerHTML += `
    <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-50">Pollo en Salsa</li>
        <li class="list-group-item w-50"> <b>$${polloSalsa}</b> </li>
    </ul>`
    }else{
        modalBody.innerHTML = ` `
    }
    //costilla BBQ
    if(localStorage.getItem('costillaB') != null){
        var costillaB = localStorage.getItem("costillaB")
        modalBody.innerHTML += `
    <ul class="list-group list-group-horizontal w-100">
        <li class="list-group-item w-50">Costilla BBQ</li>
        <li class="list-group-item w-50"> <b>$${costillaB}</b> </li>
    </ul>`
    }else{
        modalBody.innerHTML = ` `
    }
}