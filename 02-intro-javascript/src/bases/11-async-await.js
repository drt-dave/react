const getImagen = async() => {

    try {

        const apiKey = 'AIzaSyBn7TQJ-xd74BbR5EA4oUcQlMFffBcVats';

        const resp = await fetch(`https://tenor.googleapis.com/v2/search?q=genshin&random=true&key=${apiKey}`)

        const { results } = await resp.json();

        const { url } = results[0].media_formats.gif;
        const img = document.createElement('img');

        img.src = url;

        document.body.append(img)
        console.log(results);
        console.log(url)

    } catch (error) {
        // manejo del error
        console.error(error);
    }


}

getImagen()