const string = "Привет! Как дела?"; // то, что сравниваем
const vowels = ["а","о","у","э","ы","я","ё","ю","е","и"]; //те значения, с чем сравниваем

const getVowels = stringFilter => { //создали функцию для фильтрации гласных букв
  let extractVowels = ""; //создали переменную для хранения отфильтрованных букв

  for (let i = 0; i < stringFilter.length; i++) { //создали функцию для выборки гласных
    const currentLetter = stringFilter[i].toLowerCase(); //положили  текущий элемент цикла

    if (vowels.includes(currentLetter)) { //создали цикл прохода по массиву строки, чтоб отобрать гласные из всей строки, метод Includes для проверки массивов и строк
      extractVowels += currentLetter; // добавляем отфильтрованный символ в нужную нам строку
    }
  }

  return extractVowels; //вернули переменную из функции
}
console.log(getVowels(string));