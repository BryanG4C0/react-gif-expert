import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {


    // No se debe colocar la ejecución de una función directamente en un componente por que se va a ejecutar n cantidad de veces
    getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
            {/* {
                gifs.map((gif) => (
                    <p>{gif}</p>
                ))
            } */}
        </>
    )
}
