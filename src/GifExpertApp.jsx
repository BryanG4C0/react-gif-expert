import { useState } from 'react'

/*
cuando queremos almacenar información y cambiar el html, inmediatamente debemos pensar que necesitamos algun HOOK para mantener el estado
 */


export const GifExpertApp = () => {

    const onAddCategory = () => {
        const newCategory = 'Valorant'
        //setCategories([...categories, newCategory]);
        setCategories( cat=> [...cat, newCategory]);
    };

    // Siempre tratar de inicializar el estado
    const [categories, setCategories] = useState(['One punch ', 'Dragon ball']);

    console.log(categories);
    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map((category, index) => {
                    return (
                        <li key={index}>
                            {category}
                        </li>
                    );
                })}
            </ol>
        </>
    )
}

