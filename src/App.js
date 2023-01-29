import './App.css';

function App() {
  const url = 'http://localhost:8080'
  const useEffect = () => {

  }

  const createElement = (i, type, parent) => {
    const container = document.createElement('div')
    container.classList.add(type)
    for (let n = 0; n < Object.keys(i).length; n++) {
      const d = document.createElement('div')
      d.innerHTML = i[Object.keys(i)[n]]
      container.appendChild(d)
    }
    parent.appendChild(container)
    if (type === 'user') {
      container.addEventListener('click', () => {
        getDecks(i)
      })
    } else if (type === 'deck') {
      container.addEventListener('click', () => {
        getCards(i)
      })
    }
  }

  async function getUsers() {
    const info = document.getElementById('info')
    info.replaceChildren()
    await fetch(url + '/user/all', {'mode':'cors'})
    .then(resp => resp.json())
    .then(resp => { 
      resp.forEach((i) => createElement(i, 'user', info))
    })
  }
  
  async function getDecks(usr) {
    const info = document.getElementById('info')
    info.replaceChildren()
    const path = !usr.name ? '/deck/all' : `/user/${usr.name}/decks`
    await fetch(url + path, {'mode':'cors'})
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      resp.forEach((i) => {
        createElement(i, 'deck', info)
      })
    })
  }
  
  async function getCards(usr) {
    const info = document.getElementById('info')
    info.replaceChildren()
    const path = !usr.name ? '/card/all' : `/deck/${usr.name}/cards`
    await fetch(url + path, {'mode':'cors'})
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      resp.forEach((i) => {
        createElement(i, 'card', info)
      })
    })
  }

  return (
    <div className="App" id="app">
      <button onClick={getUsers}>Users</button>
      <button onClick={getDecks}>Decks</button>
      <button onClick={getCards}>Cards</button>
      <div id="info"></div>
    </div>
  );
}

export default App;
