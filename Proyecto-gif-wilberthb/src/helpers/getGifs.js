// Definimos una función asíncrona getGifs que toma una categoría como argumento
export const getGifs = async( category ) => {
 const url = `https://api.giphy.com/v1/gifs/search?api_key=R1mC6lPP8cZYMtOxmZqVOBaF0clFytHa&q=${ category
}&limit=12`;
// Hacemos una petición a la API de Giphy
const resp = await fetch( url );
// Extraemos los datos de la respuesta en formato JSON
const { data } = await resp.json();
// Mapeamos los datos a un nuevo arreglo de objetos con id, título y URL de cada imagen
const gifs = data.map( img => ({
id: img.id,
title: img.title,
url: img.images.downsized_medium.url
}));
// Devolvemos el arreglo de objetos
return gifs;
}