/* || TIME */

const year = document.getElementById("year");
const thisYear = new Date().getFullYear();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;

/* || THEME */

const root = document.querySelector(':root');
const checkbox = document.querySelector('.theme');
const logo = document.querySelector('.logo');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        root.setAttribute('class','light');
        logo.src = './img/chat-regular-black.png';
    } else {
        root.removeAttribute('class', 'light');
        logo.src = './img/chat-regular-white.png';
    }
});

/* || TEXT */

const pikachu = document.querySelector('.result__text');

function removePikachu(){
    if(resultText.value.length != 0) {
        pikachu.style.backgroundImage = "none";
    }
}

const textArea = document.querySelector(".text");
const resultText = document.querySelector(".result__text");

function btnEncrypt() {
    const encryptedText = encrypt(textArea.value);
    resultText.value = encryptedText;
    textArea.value = "";
    removePikachu();
}

function encrypt(encryptedString) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    
    encryptedString = encryptedString.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(encryptedString.includes(matrizCodigo[i][0])) {
            encryptedString = encryptedString.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return encryptedString;
}


function btnDecrypt() {
    const decryptedText = decrypt(textArea.value);
    resultText.value = decryptedText;
    textArea.value = "";
    removePikachu();
}


function decrypt(decryptedString) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" ,"ai"] , ["o" , "ober"], ["u" , "ufat"]];
    decryptedString = decryptedString.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(decryptedString.includes(matrizCodigo[i][1])) {
            decryptedString = decryptedString.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return decryptedString;
}

const copyContent = async () => {
    try {
        if(resultText.value.length != 0){
            await navigator.clipboard.writeText(resultText.value);
            alert('Conteúdo copiado para a área de transferência');
        }
        else{
            alert('Nenhum texto para copiar!')
        }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }



