import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([ 'Shingeki No Kyojin' ])
    const onAddCategory = (onNewCategory) => {
        if(categories.includes(onNewCategory)) return;
        setCategories([ onNewCategory, ...categories ])
    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />
            {/* Listado de Gif */}
            <ol>
                {categories.map( category => (<GifGrid key={category} category={category}/>) )}
            </ol>
        </>
    )
}
