import Routes from "./Routes";
import "./App.css";
import React from "react";
import { Outlet } from "react-router-dom";
import usePokemon from "./hooks/usePokemon";
import usePokemonType from "./hooks/usePokemonType";

function App() {
  const { tableRows, setTableRows, loading } = usePokemon();
  const { pokemonTypesOptions } = usePokemonType();

  const handleUpdatePokemonRow = (newPokemon, callback) => {
    const { id, name, description, types, friends, sprite } = newPokemon;

    const itemList = [...tableRows];
    const index = tableRows.findIndex(poke => poke.id === id);
    const updatedPokemon = {...itemList[index], name, description, types, friends, sprite};
    itemList[index] = updatedPokemon;
    setTableRows([...itemList]);
    callback();
  };

  return (
    <div className="App">
      <Routes
        loading={loading}
        tableRows={tableRows}
        pokemonTypesOptions={pokemonTypesOptions}
        handleUpdatePokemonRow={handleUpdatePokemonRow}
      />
      <Outlet />
    </div>
  );
}

export default App;
