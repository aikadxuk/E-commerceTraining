// Animação de abertura da notificação de checkout
const checkoutButton = document.querySelector('.checkoutButton')
const checkouNotification = document.querySelector('.checkout-notification')

checkoutButton.addEventListener('click', openNotification)
function openNotification() {
    if (checkouNotification.classList.contains('active')) {
        checkouNotification.classList.remove('active')
    } else {
        checkouNotification.classList.add('active')
    }
}

// Slide de imagens

let principalImg = document.querySelector('.slidePrincipalImg')
let cardImg = document.querySelectorAll('.cardImg')

cardImg.forEach(function (card, index) {
    card.addEventListener('click', function () {
        showImage(card, index)
        imagePrincipal(card)
        sendImageOverlay(card, index)
    })
})

function showImage(card, index) {
    switch (index) {
        case 0:
            principalImg.src = `../images/image-product-1.jpg`
            overlayImg.src = `../images/image-product-1.jpg`
            break
        case 1:
            principalImg.src = `../images/image-product-2.jpg`
            overlayImg.src = `../images/image-product-2.jpg`
            break
        case 2:
            principalImg.src = `../images/image-product-3.jpg`
            overlayImg.src = `../images/image-product-3.jpg`
            break
        case 3:
            principalImg.src = `../images/image-product-4.jpg`
            overlayImg.src = `../images/image-product-4.jpg`
            break
    }
}

// Abre a imagem do produto em um galeria

const overlayBackground = document.querySelector('.overlayBackground')
principalImg.addEventListener('click', openGalleryBackground)
const closeOverlay = document.querySelector('.fa-xmark')
let overlayImg = document.querySelector('#overlayImgOn')

function openGalleryBackground() {
    if (overlayBackground.classList.contains('activeOverlay')) {
        overlayBackground.style.display = 'flex'
    }
}

closeOverlay.addEventListener('click', closeBackground)

function closeBackground() {
    if (overlayBackground.classList.contains('activeOverlay')) {
        overlayBackground.style.display = 'none'
    }
}

// Função de clique que aumenta ou diminui a quantidade de itens

const quantityButtons = document.querySelectorAll('.quantityButtons')
let productQuantityNumber = document.querySelector('#productQuantityNumber')

quantityButtons.forEach(function (quantButton, index) {
    quantButton.addEventListener('click', function () {
        calcQuantity(quantButton, index)
    })
})

function calcQuantity(quantButton, index) {
    let productQuantityConvert = parseInt(productQuantityNumber.textContent)
    if (index === 0 && productQuantityConvert > 0) {
        productQuantityConvert--
        productQuantityNumber.textContent = `${productQuantityConvert}`
    } else if (index === 1) {
        productQuantityConvert++
        productQuantityNumber.textContent = `${productQuantityConvert}`
    }
}

// console.log(productQuantityNumber)