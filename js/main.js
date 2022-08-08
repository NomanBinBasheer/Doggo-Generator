const breedsURL = 'https://dog.ceo/api/breeds/list/all'

const selectTag = document.querySelector('.breeds')


fetch(breedsURL)
    .then(res => {
      return  res.json()
    })
    .then(data => {
        const dataBack = data.message
        const breedsArray = Object.keys(dataBack)
        // console.log(breedsArray)
          
        for (let i = 0; i < breedsArray.length; i++){
            const option = document.createElement('option')
            option.value = breedsArray[i]
            option.innerText = breedsArray[i]
            selectTag.appendChild(option)
        }

    })

    selectTag.addEventListener('change', event => {

        const url = `https://dog.ceo/api/breed/${event.target.value}/images/random`

        getDogImg(url)

    })
    const img = document.querySelector('.dogImage')

    const getDogImg = url => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data.message)
            img.src = data.message
        })
    }