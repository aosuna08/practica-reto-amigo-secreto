// Lista donde se almacenan los amigos
const amigos = []

const input = document.getElementById('amigo')
const listaAmigos = document.getElementById('listaAmigos')

const btnSortear = document.getElementById('btnSortear')
const resultado = document.getElementById('resultado')

// Funcion que actualiza la lista de amigos
const actualizarListaAmigos = () => {
    listaAmigos.innerHTML = ''

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li')
        li.textContent = amigo
        listaAmigos.append(li)
    })
}

// Funcion que agrega amigos a la lista
const agregarAmigo = () => {
    const value = input.value
    if(value){
        amigos.push(value)
        actualizarListaAmigos()
        input.value = ''
    } else {
        alert('Por favor, ingrese algo en el input')
    }
    return amigos
}

// Funcion para sortear amigos
const sortearAmigo = () => {
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo para seleccionar')
        return
    }
    const randomIndex = Math.floor(Math.random() * amigos.length)
    listaAmigos.innerHTML = ''
    resultado.innerHTML = amigos[randomIndex]
}
