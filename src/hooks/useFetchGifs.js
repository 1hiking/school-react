import { useEffect, useState } from 'react';
import { getGifs } from './getGifs';



export const useFetchGifs = (category) => {
    // Creamos una variable de estado images y una función para actualizarla setImages
    const [images, setImages] = useState([]);
    // Creamos una variable de estado isLoading y una función para actualizarla setIsLoading
    const [isLoading, setIsLoading] = useState(true);
    // Definimos una función asíncrona getImages
    const getImages = async () => {
        // Obtenemos nuevas imágenes de la categoría con la función getGifs
        const newImages = await getGifs(category);
        // Actualizamos images con las nuevas imágenes
        setImages(newImages);
        // Establecemos isLoading en falso
        setIsLoading(false);
    }

    // Usamos useEffect para llamar a getImages cuando se monta el componente
    useEffect(() => {
        getImages();
    }, []);
    // Devolvemos un objeto con images e isLoading
    return {
        images,
        isLoading
    }
}