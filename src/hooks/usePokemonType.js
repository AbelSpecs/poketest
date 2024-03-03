import { useEffect, useState } from 'react';
import { getPokemonTypes } from '../services/pokemon';

export default function usePokemonType() { 
    const [pokemonTypesOptions, setPokemonTypesOptions] = useState();
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if(mounted){

            
            getPokemonTypes().then((data) => {
                if(data && data.error){
                    console.log(data.error);
                }
                else{
                    setPokemonTypesOptions(data);
                }
            });
        }

        setMounted(false);

    }, [mounted, pokemonTypesOptions])

    
    

    return { pokemonTypesOptions, setPokemonTypesOptions };
}