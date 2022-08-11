// // http://hp-api.herokuapp.com/api/characters

// const characterListEl = document.querySelectorAll(".character-list");

// async function renderCharacters() {
//   const characters = await fetch("http://hp-api.herokuapp.com/api/characters");
//   const charactersData = await characters.json();

//   characterListEl.innerHTML = charactersData.map((character) => characterHTML(character)).join('');

//   console.log(characterListEl.innerHTML);
// }

// function characterHTML(characters) {
//   return `
//             <div class="character__container">
//                 <img class="character__img" src="${characters.image}" alt=""></img>
//                 <div class="character__name">
//                     ${characters.name}
//                 </div>
//                 <div class="character__house-name">
//                     ${characters.house}
//                 </div>
//             </div>
//     `;
// }

// renderCharacters();

const charactersListEl = document.querySelector(".characters-list");
const searchBar = document.getElementById("searchBar");
let charactersData = []


searchBar.addEventListener("keyup", (e) => {  //key on release
  const searchString = e.target.value.toLowerCase()
  const filteredCharacters = charactersData.filter(character => {
    return character.name.toLowerCase().includes(searchString) || character.house.toLowerCase().includes(searchString)
  })
  characterHTML(filteredCharacters)
  console.log(filteredCharacters)
});

async function renderCharacters() {
  const characters = await fetch("https://hp-api.herokuapp.com/api/characters");
  charactersData = await characters.json();

  characterHTML(charactersData)
}

function characterHTML(characters) {
  const htmlString = characters.map((character) =>{
    return `
              <div class="character__container">
                  <img src="${character.image}" class="character__img"></img>
                  <div class="character__name">${character.name}</div>
                  <div class="character__house-name">${character.house}</div>
              </div>
          `;
  }).join('')
  charactersListEl.innerHTML = htmlString
}
renderCharacters();
