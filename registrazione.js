const nomeKey = 'nome-memory'

const nomeUtente = document.getElementById('text-input')
const savedButton = document.getElementById('save-button')
const resetButton = document.getElementById('reset-button')
const resetUtentiButton = document.getElementById('reset-utenti-button')
const lista = document.getElementById('lista')

const salvaNome = () => {
  const valoreNomeUtente = nomeUtente.value
  localStorage.setItem(nomeKey, valoreNomeUtente)
  if (valoreNomeUtente) {
    alert('Nome Utente salvato!')
  } else {
    alert('Non hai inserito nessun testo!')
  }

  stampa()
}

savedButton.addEventListener('click', salvaNome)

const reset = () => {
  nomeUtente.value = ''
  localStorage.removeItem(nomeKey)
}

const resetUtenti = () => {
  if (window.confirm('Vuoi davvero resettare tutti gli utenti?')) {
    lista.innerHTML = ''
    localStorage.removeItem(nomeKey)
  }
}

resetButton.addEventListener('click', reset)
resetUtentiButton.addEventListener('click', resetUtenti)

const stampa = () => {
  const nomiSalvati = localStorage.getItem(nomeKey)

  console.log(nomiSalvati)

  //IF nomiSalvati è TRUE (ovvero se nomiSalvati è una stringa)
  if (nomiSalvati) {
    console.log('OK')

    let newLi = document.createElement('li')
    newLi.innerText = nomiSalvati
    lista.appendChild(newLi)
  } else {
    console.log('no ok')
  }
}

let timer
let contatoreSecondi = 0

const contatore = () => {
  contatoreSecondi++
  document.getElementById('secondi').innerHTML = contatoreSecondi
  sessionStorage.setItem('secondi', contatoreSecondi)
  //salva 'contatoreSecondi' in sessionStorage.
}

const contatoreStart = () => {
  //'contatoreStart', che avvia un intervallo di tempo
  timer = setInterval(contatore, 1000)
  // chiamo la funzione contatore ogni 1000 millisecondi (1 secondo)
}
// const contatoreEnd = () => {
//   clearInterval(timer)
// }
//

const secondiSalvati = sessionStorage.getItem('secondi')
// Verifica se ci sono dati salvati in sessionStorage con chiave 'secondi'

if (secondiSalvati && parseInt(secondiSalvati) > 0) {
  // Se ci sono dati salvati e il valore è maggiore di 0, ripristina 'contatoreSecondi' da sessionStorage,
  // visualizza il valore nell'elemento HTML con ID 'secondi', e avvia il contatore.
  contatoreSecondi = parseInt(secondiSalvati)
  document.getElementById('secondi').innerHTML = contatoreSecondi
  contatoreStart()
} else {
  // Se non ci sono dati salvati, avvia il contatore dall'inizio.
  contatoreStart()
}

// metodo più elegante
const a = sessionStorage.getItem('conteggio')

let i = a ? parseInt(a) : 0

const conta = () => {
  i += 1
  document.getElementById('secondi2').innerText = 'Tempo trascorso:' + i
  sessionStorage.setItem('conteggio', i)
}

setInterval(conta, 1000)
