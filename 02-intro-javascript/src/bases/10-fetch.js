const apiKey = 'AIzaSyBn7TQJ-xd74BbR5EA4oUcQlMFffBcVats';

const peticion = fetch(`https://tenor.googleapis.com/v2/search?q=genshin&random=true&key=${apiKey}`)

peticion
    .then(resp => resp.json())
    .then(({ results }) => {
        const { url } = results[0].media_formats.gif;

        const img = document.createElement('img');

        img.src = url;

        document.body.append(img)
        console.log(results);
        console.log(url);
    })
    .catch(console.warn);