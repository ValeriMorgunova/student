const leftBtn = document.querySelector('#left'); //переменная для левой стрелки
const rightBtn = document.querySelector('#right'); //переменная для правой стрелки
const items = document.querySelector('#items'); //переменная для списка слайдов
const computedStyles = getComputedStyle(items); //получаем стили до использования функции(то что заложено в css)
const item = document.querySelectorAll(".slider__item"); //ВСЕ переменные списка слайдов

const minRight = 0; //переменная для минимального значения свойства right  
const itemWidth = getComputedStyle(item[0]).width; //вытягиваем из свойства css ширину блока
const step = parseInt(itemWidth); //переводим строку в число(размер шага слайдера)
const preShowItems = 300 / step; //переменная для количества изначально видимых элементов
const maxRight = (item.length - preShowItems) * step; //максимальное значение свойства right
const moveRight = 0; //стартовое значение right

items.style.right = moveRight; //присваиваем текущее значение свойства right(стартовое)

rightBtn.addEventListener('click', e => { //созали функцию по клику на правую стрелку
  e.preventDefault(); //отменили перезагрузку страницы при нажатии по ссылке
  
  let moveRight = parseInt(computedStyles.right) //текущее числовое значение свойства right 

  if(moveRight < maxRight) { //если текущее значение right меньше максимального
    moveRight += step; //увеличиваем это значение на размер шага слайдера для переключения
    items.style.right = `${moveRight}px`; //присваиваем новое значение свойству right
  }
})

leftBtn.addEventListener('click', e => {
  e.preventDefault();

  let moveRight = parseInt(computedStyles.right)

  if(moveRight > 0) {
  moveRight -= step;
  items.style.right = `${moveRight}px`;
  }
})

