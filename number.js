const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => { //создали функцию проверки на четность
  return num % 2 == 0; //вернули true/false
};

const filterArray = (arr, filterFn) => { //создали функцию для переборки массива с фильтрацией
  const numEven = []; //создали новй массив для отфильтрованных чисел

  arr.forEach(num => {
    if (filterFn(num)){
      numEven.push(num);
    }
  })

  return numEven; //вернули знаение нового массива
}


console.log(filterArray(mixedArray, isEven));