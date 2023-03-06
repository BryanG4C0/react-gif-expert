export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=PiSCIjh7zEtaJo9dXvjZFrgkpaXfK3Ep&q=${category}&limit=10`
    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
}