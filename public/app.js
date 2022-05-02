import { initializeApp } from "firebase/app";

const button = document.querySelector('button')
const phraseDisplay = document.querySelector('.phrase-display')
const copyButton = document.querySelector('.button-copy')

const firebaseConfig = {
    apiKey: "AIzaSyD03tRyiudR57HCt9ocemBTB3M44mqFQ7A",
    authDomain: "bosstalk.firebaseapp.com",
    projectId: "bosstalk",
    storageBucket: "bosstalk.appspot.com",
    messagingSenderId: "748201144915",
    appId: "1:748201144915:web:b6c90ea8a0382d93288ca6"
  };

  const app = initializeApp(firebaseConfig);

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