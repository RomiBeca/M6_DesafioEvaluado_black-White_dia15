const formularioImage = document.querySelector('#imageUrlForm');
const URL_DOMINIO = 'http://localhost:3000/'

formularioImage.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log(e.target.imageUrl.value)
    const urlImage = e.target.imageUrl.value

    console.log(JSON.stringify(urlImage))
    try {
        // Realizar la solicitud al servidor por medio del query (req.query)
        const encodeUrl = encodeURIComponent(urlImage)
        const response = await fetch(`${URL_DOMINIO}/image?url=${encodeUrl}`);
        console.log(response)
        alert('imagen transformada con exito')

    } catch (error) {
        console.log(error)
    }
})