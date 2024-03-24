const path = "/users/download/index.html"; //строка для сравнения

const isHtml = path => { //создали функцию для сравнения строк
  const compareWord = ".html"; //то с чем сравниваем (5знаков)
  const compareString = path.slice(-5); //то что сравниваем,метод slice с конца отсчитывает 5 знаков

  return compareWord == compareString; //возвращаем результат сравнения
}

console.log(isHtml(path)); //выводим результат функции