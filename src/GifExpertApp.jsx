import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

/*
cuando queremos almacenar información y cambiar el html, inmediatamente debemos pensar que necesitamos algun HOOK para mantener el estado
 */


export const GifExpertApp = () => {

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;        
        //setCategories([...categories, newCategory]);
        setCategories(cat => [...cat, newCategory]);
    };

    // Siempre tratar de inicializar el estado
    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={(newCategory) => { onAddCategory(newCategory) }}
            />

            {
                categories.map((category, index) =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}

