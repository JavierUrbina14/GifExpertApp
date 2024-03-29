import { useEffect, useState } from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs"
// import { useFetchGifs } from "../Hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images , isLoading } = useFetchGifs(category)
    
    
    
    
    return (
        <>
            <h3>{category}</h3>
            {
                // ? Representa un if, es como decir, "Esta cargando?" en el caso que si, retorna un h2, 
                // caso contrario devuelve null
                isLoading? (<h2>Cargando...</h2>):null
            }
            <div className="card-grid">
                {
                images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))
                }
            </div>
        </>
    )
}
