const openBtn = document.querySelector('#openOverlay'); //переменная для кнопки появления overlay
const body = document.body; //переменная для всего body

openBtn.addEventListener('click', e => { //создаем функцию по нажатию на кнопку
  e.preventDefault();

  const overlayBlock = document.createElement('div'); //создать блок
  overlayBlock.classList.add('overlay'); //присвоить класс 
  body.appendChild(overlayBlock); //добавить в body блок overlay

  const overlayContent = document.createElement('div'); 
  overlayContent.classList.add('content');
  overlayContent.innerHTML = "Закрой меня"; //наполнить блок текстовым содержимым
  overlayBlock.appendChild(overlayContent); 

  const overlayClose = document.createElement('a');
  overlayClose.classList.add('close'); 
  overlayClose.innerHTML = "X";
  overlayContent.appendChild(overlayClose);


  overlayClose.addEventListener('click', e => { //функция по клику на крестик
    e.preventDefault();

    body.removeChild(overlayBlock); //удаляем из DOM блок overlay
  });

  overlayBlock.addEventListener('click', e => { //aункция по клику вне блока content
    if (!e.target.classList.contains("content")) {
      overlayClose.click();
    }
  });
})

