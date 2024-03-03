import { useEffect, useState } from 'react';
import { getPokemons } from '../services/pokemon';

export default function usePokemon() { 
    const [loading, setLoading] = useState(false);
    const [tableRows, setTableRows] = useState([]);
    const [mounted, setMounted] = useState(true);

    useEffect(() => {
        if(mounted){

            setLoading(true);
            getPokemons().then((data) => {
                setLoading(false);
                if(data && data.error){
                    console.log(data.error);
                }
                else{
                    setTableRows(data);
                }
            });
        }

        setMounted(false);

    }, [mounted, tableRows])

    
    

    return { tableRows, setTableRows, loading };
}