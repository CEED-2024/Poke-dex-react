import Loading from "./Loading.jsx"
import '../estilos/pokedata.css'

import { getSpeciesSprite } from '../pokemon_api.js'
import { useState, useEffect } from "react"


function PokeData({ species_id }) {

  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Nadie usa ya el .then para esto, utiliza funciones asíncronas

    async function loadData() {
      //resetea en cada busqueda
      setLoading(true)
      setPokemon(null)
      setError(false)

      // Esta funcion la puedes reutilizar, al contrario de como habías hecho
      function wait(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }

      try {
        const url = await getSpeciesSprite(species_id)
        if (!url) {
          throw new Error(`No se encuentra un pokemon con id ${species_id}`)
        }

        await wait(800)

        setPokemon(url);  //añado setTimeout porque sino no se aprecia el loading
        setLoading(false)
      }
      catch (err) {
        console.error(err.message)
        setLoading(false)
        setError(true)
      }
    }

    loadData()

  }, [species_id]) //Se ejecuta cuando cambia el id. si estuviera vacio, se ejecutaria solo una vez cuando el componente se monta


  return (
    <div className="pokedata">
      <h2>Pokémon {species_id}</h2>
      {/* {loading ? <Loading /> : <img src={pokemon} alt={`Pokémon ${species_id}`} />} */}

      {/* Si está cargando, mostrar el spinner */}
      {loading && <Loading />}

      {/* Si hay error, mostrar mensaje de error */}
      {!loading && error && <p style={{ color: "red" }}>❌ No existe un Pokémon con el nombre {species_id}.</p>}

      {/* Si no hay error y ya cargó, mostrar la imagen */}
      {!loading && !error && pokemon && <img src={pokemon} alt={`Pokémon ${species_id}`} />}
    </div>
  )
}

export default PokeData
