import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

/*
cuando queremos almacenar información y cambiar el html, inmediatamente debemos pensar que necesitamos algun HOOK para mantener el estado
 */


export const GifExpertApp = () => {

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        console.log(newCategory);
        //setCategories([...categories, newCategory]);
        setCategories(cat => [...cat, newCategory]);
    };

    // Siempre tratar de inicializar el estado
    const [categories, setCategories] = useState(['One punch ', 'Dragon ball']);

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(newCategory) => { onAddCategory(newCategory) }}
            />

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

