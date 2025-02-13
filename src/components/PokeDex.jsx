import PokeForm from "./PokeForm";
import PokeData from "./PokeData";
import '../estilos/pokedex.css'

import { useState } from "react";


function PokeDex(){

    const [selectedPokemonId, setSelectedPokemonId] = useState(null)


    // Puedes pasarle setSelectedPokemonId a PokeData directamente

    return(
        <div className="pokedex">
            <h1>PokeDex</h1>

            <PokeForm onSearch= {setSelectedPokemonId}/>

            {selectedPokemonId && <PokeData species_id = {selectedPokemonId}/>}
        </div>
    )
}


export default PokeDex

