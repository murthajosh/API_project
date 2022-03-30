const button = document.querySelector('button')
const phraseDisplay = document.querySelector('.phrase-display')
const copyButton = document.querySelector('.button-copy')

// gets and displays the text
button.addEventListener('click', async () => {
    let response = await axios.get("https://corporatebs-generator.sameerkumar.website/")
    phraseDisplay.innerHTML = ''
    phraseDisplay.append(response.data.phrase)
    copyButton.classList.remove('hidden')
})

// copies that text to the clipboard
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(phraseDisplay.innerHTML);
})