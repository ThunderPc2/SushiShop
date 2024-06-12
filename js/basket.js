const buyList = []

// Инициализатор кнопок товаров
function initializationButtons() {
  document.querySelectorAll('.buy')
    .forEach(button => button.addEventListener('click', onBuy))
}

// Инициализатор для ссылки корзины
function initializationBasketLink() {
  const basketLink = document.getElementById('basket')
  const modalWindow = document.getElementById('modal')
  const closeWindow = document.getElementById('close-modal')
  const modalHidden = document.getElementById('modal-hidden')
  const blackTop = document.getElementById('black-top')
  
  basketLink.addEventListener('click', () => {
    modalWindow.style.display = 'block'
    blackTop.style.display = 'block'
    buyList.map(product => modalHidden.insertAdjacentHTML('beforebegin', productItem(product.name, product.cost, product.preview)))
  })
  
  closeWindow.addEventListener('click', () => {
    modalWindow.style.display = 'none'
    blackTop.style.display = 'none'
  })
}

// Добавление товара в корзину при нажатии
function onBuy(e) {
  const card = e.target.parentNode.parentNode
  
  buyList.push({
    name: card.querySelector('h1').innerHTML,
    cost: Number(card.querySelector('h2').innerHTML.slice(0, -1)),
    preview: card.querySelector('div').style.backgroundImage.slice('../resources/imgs/previews/'.length + 5, -2)
  })
  
  console.log(buyList)
}