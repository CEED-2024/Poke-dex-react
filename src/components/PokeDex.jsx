import PokeForm from "./PokeForm";
import PokeData from "./PokeData";
import '../estilos/pokedex.css'

import { useState } from "react";


function PokeDex(){

    const [selectedPokemonId, setSelectedPokemonId] = useState(null)


    //funcion que le paso a PokeForm (con la propiedad onSearch, para que pueda asignar desde allí el id del pokemon seleccionado)
    function handleSearch(id){
        setSelectedPokemonId(id)
    }

    return(
        <div className="pokedex">
            <h1>PokeDex</h1>
            
            <PokeForm onSearch= {handleSearch}/>    

            {selectedPokemonId && <PokeData species_id = {selectedPokemonId}/>}
        </div>
    )
}


export default PokeDex

