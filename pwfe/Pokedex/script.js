const fetchPokemon = () => {
    const pokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    for (let i = 1; i <= 150; i++){
        pokemons.push(fetch(getPokemonUrl(i)).then(response => response.json()));
    }
}

fetchPokemon()