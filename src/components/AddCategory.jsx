import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = (e) => setInputValue(e.target.value)

    const mandarSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={(e) => mandarSubmit(e)}>
            <input type='text' placeholder="Buscar Gif" value={inputValue} onChange={onInputChange}></input>
        </form>
    )
}
