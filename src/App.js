import './App.css';

function App() {

  const useEffect = () => {

  }

  async function getUsers() {
    const info = document.getElementById('info')
    info.replaceChildren()
    await fetch('http://localhost:8080/user/all', {'mode':'cors'})
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      resp.forEach((i) => {
        const user = document.createElement('div')
        const id = document.createElement('div')
        const name = document.createElement('div')
        const pw = document.createElement('div')
        id.innerHTML = i.id
        name.innerHTML = i.name
        pw.innerHTML = i.password
        user.classList.add('userCard')
        user.append(id)
        user.append(name)
        user.append(pw)
        info.appendChild(user)
      })
    })
  }
  
  async function getDecks() {
    const info = document.getElementById('info')
    info.replaceChildren()
    await fetch('http://localhost:8080/deck/all', {'mode':'cors'})
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      resp.forEach((i) => {
        const deck = document.createElement('div')
        const id = document.createElement('div')
        const name = document.createElement('div')
        const user = document.createElement('div')
        id.innerHTML = i.id
        name.innerHTML = i.name
        user.innerHTML = i.userId
        deck.classList.add('deckCard')
        deck.append(id)
        deck.append(name)
        deck.append(user)
        info.appendChild(deck)
      })
    })
  }
  
  async function getCards() {
    const info = document.getElementById('info')
    info.replaceChildren()
    await fetch('http://localhost:8080/card/all', {'mode':'cors'})
    .then(resp => {
      return resp.json()
    })
    .then(resp => {
      console.log(resp)
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
