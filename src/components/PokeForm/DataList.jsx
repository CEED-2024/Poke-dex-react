


function DataList({filteredPokemons}){

    return(

        <datalist id="pokemonList">
        {filteredPokemons.map((pokemon)=>(
            <option key={pokemon.pokemon_species_id} value={pokemon.name} />
        ))
        }
    </datalist>

    )
}

export default DataList