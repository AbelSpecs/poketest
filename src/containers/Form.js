import React, { useState } from "react";
import Text from "../components/Text";
import PokeSelect from "../components/Select";
import StandardImageList from "../components/ImageList";
import { useNavigate, useLocation } from "react-router-dom";
import { matchPokemon } from "../helpers/matchPokemon";

// * use spritesTitles to set the titles to Images

const spriteTitles = {
  back_default: "Macho posterior",
  back_female: "Hembra posterior",
  back_shiny: "Macho brillante posterior",
  back_shiny_female: "Hembra brillante posterior",
  front_default: "Macho frontal",
  front_female: "Hembra frontal",
  front_shiny: "Macho frontal brillante",
  front_shiny_female: "Hembra frontal brillante",
};

export default function Form(props) {
  const { pokemonTypesOptions, tableRows, handleUpdatePokemonRow } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const [filterTypes, setFilterTypes] = useState([]);
  const [friends, setFriends] = useState([]);
  const [newPokemon, setNewPokemon] = useState({
    id: state.id,
    name: state.name,
    description: state.description,
    types: state.types,
    friends: state.friends,
    sprite: ''
  });
  // * Use navigate to return root path

  const types = pokemonTypesOptions?.results;
  const filteredPokemons = matchPokemon(tableRows, filterTypes);

  const onSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    handleUpdatePokemonRow(newPokemon, () => { navigate('/')});
  };

  return (
    <form onSubmit={onSubmit}>
      <Text label={"name"} defaultValue={''} newPokemon={newPokemon} setNewPokemon={setNewPokemon} />
      <Text label={"description"} defaultValue={''} newPokemon={newPokemon} setNewPokemon={setNewPokemon} />
      <PokeSelect label={"types"} 
                  defaultValue={''} 
                  options={types} 
                  setFilterTypes={setFilterTypes} 
                  newPokemon={newPokemon} 
                  setNewPokemon={setNewPokemon}/>
      
      <PokeSelect label={"friends"}
                  defaultValue={''}
                  options={filteredPokemons}
                  setFriends={setFriends}
                  newPokemon={newPokemon}
                  setNewPokemon={setNewPokemon}
      />
    
      <StandardImageList defaultValue={''} sprites={state.sprites} newPokemon={newPokemon} setNewPokemon={setNewPokemon}/>
      
      <button type="submit">Submit</button>
    </form>
    
  );
}
