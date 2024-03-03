export const matchPokemon = (tableRows, filterTypes) => {
    return tableRows.filter((pokemon) => {
        return pokemon.types.some(({type}) => {
            return filterTypes.includes(type.name)
        });
    });
  };
