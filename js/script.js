// menu hamburguer no mobile

const hamburguer = document.querySelector('#hamburguer')

hamburguer.addEventListener('click', () => {
    const navegacao = document.querySelector('.nav-1')

    if (navegacao.classList.contains('activeMenu')) {
        navegacao.style.left = `-53px`
        hamburguer.classList.add('activeHamburguer')
        navegacao.classList.remove('activeMenu')
    } else {
        navegacao.style.left = `-455px`
        hamburguer.classList.remove('activeHamburguer')
        navegacao.classList.add('activeMenu')
    }
})

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
    } else if (index === 1 && productQuantityConvert < 30) {
        productQuantityConvert++
        productQuantityNumber.textContent = `${productQuantityConvert}`
    }

    return productQuantityConvert
}

// Função de mandar a quantidade de itens pro carrinho

const addCart = document.querySelector('#addCart')
const productPrice = document.querySelector('#product-info-price')
const priceValueNoti = document.querySelector('.price-value')
const quantityNoti = document.querySelector('.quantity-noti')
const multiplyResultNoti = document.querySelector('.multiply-result')
const productName = document.querySelector('#productName')
const productNotiName = document.querySelector('#productNotiName')
const imgNoti = document.querySelector('#img-noti')
const imgNotiContainer = document.querySelector('#img-noti-container')
const xnoti = document.querySelector('#x-noti')

addCart.addEventListener('click', addCartToNoti)

function addCartToNoti() {
    let productPriceToNoti = productPrice.textContent
    let productNameToNoti = productName.textContent
    const actualQuantity = calcQuantity()
    addItemToCart(actualQuantity)
    quantityNoti.textContent = `${actualQuantity}`
    let addItemToCartConvert = addItemToCart(actualQuantity)
    multiplyResultNoti.textContent = `$ ${addItemToCartConvert}`
    priceValueNoti.textContent = `$ ${productPriceToNoti}`
    productNotiName.textContent = `${productNameToNoti}`
    xnoti.textContent = 'X'

    return {
        productNameToNoti,
        productPriceToNoti,
        addItemToCartConvert,
        actualQuantity
    }
}

function addItemToCart(actualQuantity) {
    let productPriceConvert = parseInt(productPrice.textContent)
    let calcMultiplyProduct = actualQuantity * productPriceConvert
    return calcMultiplyProduct
}

// Função pra apagar o item do carrinho

const deleteItemCart = document.querySelector('.delete-noti')
deleteItemCart.addEventListener('click', deleteItem)

function deleteItem() {
    quantityNoti.textContent = ``
    multiplyResultNoti.textContent = ``
    priceValueNoti.textContent = ``
    productNotiName.textContent = ``
    xnoti.textContent = ''
}

// Função pra armazenar os dados dos produtos
const checkout = document.querySelector('#submit')

checkout.addEventListener('click', buyProduct)

function buyProduct() {
    const productNotiData = addCartToNoti()
    event.preventDefault()

    let productData = []

    if (localStorage.hasOwnProperty('item')) {
        productData = JSON.parse(localStorage.getItem('item'))
    }

    productData.push({
        nomeProduct: productNotiData.productNameToNoti,
        quantityProduct: productNotiData.actualQuantity,
        originalPriceProduct: productNotiData.productPriceToNoti,
        totalPriceProducts: productNotiData.addItemToCartConvert
    })

    localStorage.setItem('item', JSON.stringify(productData))
}