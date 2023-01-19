export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qX8v1hmxYH7BK1AwWz1z0dlm4oow9LGu&q=${category}&limit=10`;
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
};