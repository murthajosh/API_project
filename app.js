const button = document.querySelector('button')
const phraseDisplay = document.querySelector('.phrase-display')

button.addEventListener('click', async () => {
    let response = await axios.get("https://corporatebs-generator.sameerkumar.website/")
    console.log(response.data.phrase)
    phraseDisplay.append(response.data.phrase)
})