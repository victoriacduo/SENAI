const poke_container = document.getElementById('poke-container');
const pokemon_count = 204;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF2FD',
    ground: '#F4E7DA',
    rock: '#D5D5D4',
    fairy: '#FCEAFF',
    poison: '#98D7A5',
    bug: '#F8D5A3',
    dragon: '#97B3E6',
    psychic: '#EAEDA1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#FFFFFF'
}

const fetchTeste = async () => {
    for(let i =1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
}

const createPokemonCard = (pokemon) => {
    
    const pokemonInnerHTML = `
    <div class="pokemon" style="background: ${ifzao(pokemon.types[0].type.name)} !important">
        <div class="img-container">
            <img src=${pokemon.sprites.front_default} alt="">
        </div>
        <div class="info">
            <span class="number">#${pokemon.id}</span>
            <h3 class="name">${pokemon.forms[0].name}</h3>
            <small class="type">tipo: <span>${maisTipos(pokemon.types)}</span> </small>
        </div>
    </div>
    `

    poke_container.innerHTML += pokemonInnerHTML;
}

function ifzao(type){
    if(type == "fire"){
        return colors.fire;
    }else if(type == "grass") {
        return colors.grass;
    }else if(type == "electric") {
        return colors.electric;
    }else if(type == "water") {
        return colors.water;
    }else if(type == "ground") {
        return colors.ground;
    }else if(type == "rock") {
        return colors.rock;
    }else if(type == "fairy") {
        return colors.fairy;
    }else if(type == "poison") {
        return colors.poison;
    }else if(type == "bug") {
        return colors.bug;
    }else if(type == "dragon") {
        return colors.dragon;
    }else if(type == "psychic") {
        return colors.psychic;
    }else if(type == "flying") {
        return colors.flying;
    }else if(type == "fight") {
        return colors.fight;
    }else{
        return colors.normal;
    }
}

function maisTipos(tipos){
    if(tipos.length > 1){
        return `${tipos[0].type.name} | ${tipos[1].type.name}`;
    } else {
        return `${tipos[0].type.name}`;
    }
}

fetchTeste();