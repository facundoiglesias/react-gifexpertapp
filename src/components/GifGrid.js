import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__backInRight" > { category } </h3>  
 
            { loading && <p className="animate_animated animate__backOutLeft" >Loading</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                            <GifGridItem 
                            key= {img.id}
                            { ...img } 
                        />
                    ))
                }
            </div> 

        </>
    )
}
