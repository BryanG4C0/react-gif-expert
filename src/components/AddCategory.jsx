import { useState } from 'react';


export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        
        console.log(inputValue.trim().length)  ;
        if (inputValue.trim().length <= 1) return;

        setCategories(categories => [...categories, inputValue]);
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
