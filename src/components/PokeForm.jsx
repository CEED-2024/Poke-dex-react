
import { getPokemonData } from "../pokemon_api"
import { useState, useEffect } from "react"
import Boton from "./PokeForm/Boton.jsx"
import Lenguaje from "./PokeForm/Lenguaje.jsx"
import "../estilos/pokeform.css"

function PokeForm({onSearch}) {
    const [pokemonList, setPokemonList] = useState([])  //lista de los pokemon que devuelve la api
    const [name, setName] = useState("")
    const [language, setLanguage] = useState("7")   //Español por defecto
    const [filteredPokemons, setFilteredPokemons] = useState([])  //pokemons filtrados por lenguaje, para la lista del form

    // CARGAR TODOS LOS POKEMONS EN POKEMONLIST AL MONTAR EL COMPONENTE
    useEffect(() => {
        getPokemonData().then((data) => {
            setPokemonList(data)
        })

    }, [])//saca la lista solo una vez, cuando se monta el componente



    // FILTRAR POKEMONS POR IDIOMA CUANDO CAMBIA EL LENGUAJE SELECCIONADO (O CUANDO CARGA LA LISTA), PARA LA LISTA DEL FORMULARIO
    useEffect(()=>{

        const filtered = pokemonList.filter((pokemon) => pokemon.local_language_id  === language)


        // const filteredPokemons = [];
        // for (let i = 0; i < pokemonList.length; i++) {
        //     if (pokemonList[i].local_language_id === language) {
        //       filteredPokemons.push(pokemonList[i]);
        //     }
        //   }


        /*
        Esto solo se ejecuta si cambia la lista (que no cambia durante la aplicación) o el idioma
        Con lo que el If te sobra
        */
        setFilteredPokemons(filtered);


    }, [pokemonList, language])


    //BUSCA EL POKEMON SI EXISTE PARA PASARSELO AL PADRE
    function handleSearch() {

        if (name.trim() === "") {
            console.log("⚠️ Escribe un nombre antes de buscar.");
            return;
        }

        const foundPokemon = filteredPokemons.find(
            (p) => p.name.toLowerCase() === name.toLowerCase()
        )

        if(foundPokemon){
            onSearch(foundPokemon.pokemon_species_id)           //esto ejecuta el handleSearch de App,jsx
        }else{
            onSearch(name)          //El error lo controla pokedata
          }
    }

    return (

        <div className="pokeform">
            <h1>PokeForm</h1>
            <label htmlFor="nombre">Nombre del pokemon: </label>
            <input type="text" id="nombre" name="name" value={name} onChange={(e) => setName(e.target.value)}  list = "pokemonList"/>
            <datalist id="pokemonList">
                {filteredPokemons.map((pokemon)=>(
                    <option key={pokemon.pokemon_species_id} value={pokemon.name} />
                ))

                }
            </datalist>

           <Lenguaje cambiarLenguaje={setLanguage} lenguaje={language} />

            <Boton buscarIdPokemon = {handleSearch} />
        </div>
    )
}


export default PokeForm
