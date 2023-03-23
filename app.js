"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

async function initApp() {
  const harry = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/harry.json"
  );
  showCharacter(harry);
  const ron = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/ron.json"
  );
  showCharacter(ron);
  const hermione = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/hermione.json"
  );
  showCharacter(hermione);
  const draco = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/draco.json"
  );
  showCharacter(draco);
  const snape = await getCharacter(
    "https://raw.githubusercontent.com/cederdorff/dat-js/main/data/severus.json"
  );
  showCharacter(snape);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function showCharacter(character) {
  console.log(character);
  document.querySelector("body").insertAdjacentHTML(
    "beforebegin",
    /*html*/ `
  <article>
  <img src="${character.image}" />
     <h2>${character.name}</h2>
  </article> 
  `
  );
}

/*
function initApp() {
    // Harry Potter
    const potterName = "Harry Potter";
    const potterGender = "male";
    const potterHouse = "Gryffindor";
    const potterDateOfBirth = "31-07-1980";
    const potterAncestry = "half-blood";
    const potterEyeColour = "green";
    const potterHairColour = "black";
    const potterActor = "Daniel Radcliffe";
    const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

    console.log(
        potterName,
        potterGender,
        potterHouse,
        potterDateOfBirth,
        potterAncestry,
        potterEyeColour,
        potterHairColour,
        potterActor,
        potterImage
    );
}
*/
