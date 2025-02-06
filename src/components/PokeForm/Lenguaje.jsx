

function Lenguaje({cambiarLenguaje, lenguaje}){

    return(
        <>
         <label htmlFor="lenguaje">Idioma: </label>
            <select id="lenguaje" name="language" value={lenguaje} onChange={(e) => cambiarLenguaje(e.target.value)} >

                <option value="7">Español</option>
                <option value="9">Inglés</option>
                <option value="1">Japonés</option>
            </select>
        </>
    )
}

export default Lenguaje