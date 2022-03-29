const templateCard = document.querySelector(".template-card").content;
const card = document.querySelector(".card");
const fragment = document.createDocumentFragment();
document.addEventListener("DOMContentLoaded", () => {
    const getId = getRandom(1,201)
    pokeData(getId)
})

const getRandom = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

document.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e.target.value)
    if (e.target.value != undefined) {
        const getId = getRandom(1,201)     
        pokeData(getId)      
    } 
});

const pokeData = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    renderData(data);
  } catch (error) {
    
    console.log(error.message);
  }
};

const renderData = (pokemon) => {
  card.textContent = "";

  const clone = templateCard.cloneNode(true);

  clone.querySelector(".card-img img").setAttribute("src", pokemon.sprites.other.dream_world.front_default);
  clone.querySelector("#name-title").textContent = pokemon.name;
  clone.querySelector("#name-id").textContent = pokemon.id;
  clone.querySelector("#name-exp").textContent = pokemon.base_experience+" EXP";
  clone.querySelector("#speed").textContent = pokemon.stats[5].base_stat;
  clone.querySelector("#defense").textContent = pokemon.stats[2].base_stat;
  clone.querySelector("#attack").textContent = pokemon.stats[1].base_stat;
    
  fragment.appendChild(clone);

  card.appendChild(fragment);
};
