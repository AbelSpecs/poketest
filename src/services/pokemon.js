const getPokemons = async() => {
    
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
        const res = await response.json();

        const pokemonDetail = await Promise.all(
            res.results.map(async (pokemon) => {
                const detail = await fetch(pokemon.url);
                const pokemonInfo = await detail.json();
                return {
                    id: pokemonInfo.id,
                    name: pokemonInfo.name,
                    height: pokemonInfo.height,
                    weight: pokemonInfo.weight,
                    types: pokemonInfo.types,
                    sprites: pokemonInfo.sprites
                }
            })
        )

        return pokemonDetail;
    } catch (error) {
        throw new Error(error)
    }
}

const getPokemonTypes = async() => {
    
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type/')
        const res = await response.json();

        return res;
    } catch (error) {
        throw new Error(error)
    }
}

export { getPokemons, getPokemonTypes };