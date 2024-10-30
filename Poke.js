const pokeCount=151;
const pokeConteinar=document.querySelector(`#poke-conteinar`)

function initPokemon(){
    for(let i=1;i<=pokeCount;i++){
        getPokemon(i);
    }

}
async function getPokemon(id){
    url=`https://pokeapi.co/api/v2/pokemon/${id}`
    const response=await fetch(url);
    const data=await response.json();
    createPokemon(data);
}
function createPokemon(pokemon){
    const pokemonEl=document.createElement(`div`);
    pokemonEl.classList.add(`poke-box`);
    const name=pokemon.name;
    const id=pokemon.id.toString().padStart(3,`0`);
    const type=pokemon.types[0].type.name;
    const weight=pokemon.weight;

    pokemonEl.innerHTML=`
            <img id="pokeSprite" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" >
            <h4 id="pokeName">${name}</p>
            <p id="pokeId">#${id}</p>
            <p id="weight">${weight}</p>
            <p id="pokeType">Type: ${type}</p>
    
    
    
    
    `
    pokeConteinar.appendChild(pokemonEl)

}
initPokemon();