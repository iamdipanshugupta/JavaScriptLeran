let qrImage;

const qrContainer = document.querySelector("#qrContainer");
const qrText = document.querySelector("#qrText");
const genBtn = document.querySelector("#genBtn");
const downloadBtn = document.querySelector("#downloadBtn");


const generateQr = (text) => {
    qrContainer.innerHTML = "";
    return new QRCode(qrContainer ,{
        text:qrText,
        width:200,
        height:200,
        colorDark:"#000000",
        colorLight:"#ffffff",
        correctLevel:QRCode.CorrectLevel.H
    });
}

const downloadQR = () =>{
    qrImage = document.querySelector("#qrContainer img")
    const imgSrc = qrImage.getAttribute('src')
    console.log(imgSrc)
    downloadBtn.setAttribute("href" , imgSrc)
}

// common function to generate QR

const handleGenerate = () => {
    const text = qrText.value
    if(text.length > 0){
        generateQr(text)
        qrContainer.classList.add('img-show')
        downloadBtn.classList.add('download-active')
    }
}

// button click

genBtn.addEventListener('click' , () => handleGenerate());

// enter key input

qrText.addEventListener("keydown" , (event) => {
    if(event.key === "Enter"){
        handleGenerate()
    }
})

// download click

downloadBtn.addEventListener("click" , downloadQR)