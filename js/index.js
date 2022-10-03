document.addEventListener("DOMContentLoaded", () => {
  fetchMonster()
})

const fetchMonster = () => {
  let monsterContainer = document.querySelector("#monster-container")
  fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(response => response.json())
    .then(monsterData => {
      monsterData.forEach((monster) => {
        let card = document.createElement('div')
        let name = document.createElement('h2')
        let age = document.createElement('h4')
        let description = document.createAttribute('p')

        name.innerText = monster.name
        age.innerText = `Age: ${monster.age}`
        description.innerText = `Bio: ${monster.description}

        card.append(name, age, description)
        monsterContainer.append(card)
    })
  })
}
      