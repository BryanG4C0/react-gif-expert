import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10);

    useEffect(() => {
        getGifs(category);
    }, []);

    // No se debe colocar la ejecución de una función directamente en un componente por que se va a ejecutar n cantidad de veces
    //getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
            <h5>{counter}</h5>
            <button onClick={() => { setCounter(counter + 1) }}>+1</button>
            {/* {
                gifs.map((gif) => (
                    <p>{gif}</p>
                ))
            } */}
        </>
    )
}
