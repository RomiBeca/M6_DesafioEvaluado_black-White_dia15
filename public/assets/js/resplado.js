console.log("funciono!! 🚂")

const formularioImage = document.querySelector('#imageUrlForm');
const imageContainer = document.querySelector('#imageContainer');

formularioImage.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(event.target.imageUrl.value)

    const urlImage = {
        url: event.target.imageUrl.value
    }
    console.log(JSON.stringify(urlImage))
    fetch('http://localhost:3000/image', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(urlImage)

    })

});
////////////////////////////////////


const imageUrlForm = document.querySelector('imageUrlForm')
const URL_DOMINIO = 'http://localhost:3000'

imageUrlForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    const urlImage = event.target.imageUrl.value

    // Realizar la solicitud al servidor por medio del query (req.query)
    try {
        const response = await fetch(`${URL_DOMINIO}/image?url=${encodeURIComponent(urlImage)}`);
        console.log(response)
        alert('imagen transformada con exito')

    } catch (error) {
        console.log(error)
    }

});