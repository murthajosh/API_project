const button = document.querySelector('button')
const phraseDisplay = document.querySelector('.phrase-display')

button.addEventListener('click', async () => {
    let response = await axios.get("https://corporatebs-generator.sameerkumar.website/")
    phraseDisplay.innerHTML = ''
    phraseDisplay.append(response.data.phrase)
})