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

async function renderCharacters() {
  const characters = await fetch("https://hp-api.herokuapp.com/api/characters");
  const charactersData = await characters.json();
  charactersListEl.innerHTML = charactersData
    .map((character) => characterHTML(character))
    .join("");
}

function characterHTML(characters) {
  return `
            <div class="character__container">
                <img src="${characters.image}" class="character__img"></img>
                <div class="character__name">${characters.name}</div>
                <div class="character__house-name">${characters.house}</div>
            </div>
        `;
}
renderCharacters();
