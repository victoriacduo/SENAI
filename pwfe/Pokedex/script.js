const fetchPokemon = () => {
    const promises = [];
    for(let i = 1; i <= 150; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    promises.push(fetch(url).then((resp) => resp.json()));
    }

    Promise.all(promises).then( results => {
        const pokemon = results.map( result => ({
            name: info.name,
            id: info.id,
            image: info.sprites['front_default'],
            type: info.types.map((type) => type.type.name).join(', ')
        }));
        displayPokemon(pokemon);
    });
}

const displayPokemon = (pokemon) => {

}