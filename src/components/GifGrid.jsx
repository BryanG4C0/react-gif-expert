import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const images = await getGifs(category);        
        setImages(images)
    };

    useEffect(() => {
        getImages(category);
    }, []);

    // No se debe colocar la ejecución de una función directamente en un componente por que se va a ejecutar n cantidad de veces
    //getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(( img ) => (
                        <GifItem key={img.id} {...img}/>
                        // <li >{title}</li>
                    ))
                }
            </div>            
        </>
    )
}
