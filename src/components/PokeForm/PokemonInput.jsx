import DataList from "./DataList";

function PokemonInput({name, setName,filteredPokemons}){

    return(
        <>
        
        <label htmlFor="nombre">Nombre del pokemon: </label>
         <input type="text" id="nombre" name="name" value={name} onChange={(e) => setName(e.target.value)}  list = "pokemonList"/>
          <DataList filteredPokemons={filteredPokemons} /> 
        </>

    )
}

export default PokemonInput