const poke_container = document.getElementById('container');
const limitarPoke = 201;
const cores = {
    fire: '#F08030',
    grass: '#78C850',
    electric: '#F8D030',
    water: '#6890F0',
    ground: '#E0C068',
    rock: '#B8A038',
    fairy: '#EE99AC',
    poison: '#A040A0',
    bug: '#A8B820',
    dragon: '#97B3E6',
    psychic: '#F85888',
    flying: '#F5F5F5',
    fighting: '#C03028',
    normal: '#A8A878',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8'
}

const fetchTeste = async () => {
    for(let i = 1; i < limitarPoke; i++) {
        await getPokemon(i);
    }
}
// manda e espera resposta antes de mandar dnv, p nao virar bagunça

const getPokemon = async (id) => {
    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const resp = await fetch(api);
    const data = await resp.json();
    card(data);
}

const card = (pokemon) => {
    const innerHTML = `
    <div class="pokemon" style="border: 2px solid ${ifzao(pokemon.types[0].type.name)}">
        <div class="img-container">
            <img src=${pokemon.sprites.front_default}>
        </div>
        <div class="info">
            <h3 class="name">${pokemon.forms[0].name}</h3>
            <span class="type">tipo: ${maisTipos(pokemon.types)}</span>
        </div>
    </div>`

    poke_container.innerHTML += innerHTML;
}

function ifzao(type){
    if(type == "fire"){
        return cores.fire;
    }else if(type == "grass") {
        return cores.grass;
    }else if(type == "electric") {
        return cores.electric;
    }else if(type == "water") {
        return cores.water;
    }else if(type == "ground") {
        return cores.ground;
    }else if(type == "rock") {
        return cores.rock;
    }else if(type == "fairy") {
        return cores.fairy;
    }else if(type == "poison") {
        return cores.poison;
    }else if(type == "bug") {
        return cores.bug;
    }else if(type == "dragon") {
        return cores.dragon;
    }else if(type == "psychic") {
        return cores.psychic;
    }else if(type == "flying") {
        return cores.flying;
    }else if(type == "fight") {
        return cores.fight;
    }else if(type == "ice") {
        return cores.ice;
    }else if(type == "ghost") {
        return cores.ghost;
    }else if(type == "dragon"){
        return cores.dragon
    }else{
        return cores.normal;
    }
}

function maisTipos(tipos){
    if(tipos.length > 1){
        return `${tipos[0].type.name} | ${tipos[1].type.name}`;
    } else {
        return `${tipos[0].type.name}`;
    }
}