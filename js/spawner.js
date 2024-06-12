// Отобрадает список товаров из потока stream
function spawnProducts(stream) {
  const container = document.getElementById('shop-list')
  
  stream.map(product => {
    container.insertAdjacentHTML('beforebegin', productItem(product.name, product.cost, product.preview))
  })
}

// Вернëт HTML код для карточки товара
function productItem(name, cost, preview) {
   return `<div class='card'>
      <div class='preview' style='background-image: url("../resources/imgs/previews/${preview}")'></div>
      <h1>${name}</h1>
      <h2>${cost}¥</h2>
      <div class='panel'>
        <button class='buy'>купить</button>
      </div>
    </div>`
}