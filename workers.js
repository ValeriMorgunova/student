const workers = [ //данный массив
  {name:"John",salary:500},
  {name:"Mike",salary:1300},
  {name:"Linda",salary:1500}];

const getWorthyWorkers = (workersArray) => { //завели функцию и передали в качестве аргумента массив
  const WorthyWorkers = []; //переменная нового массива для выборки

    for (let i=0; i<workers.length; i++) { //проходим циклом по массиву
      const currentWorker = workersArray[i]; //переменная для всех значений массива
      if (currentWorker.salary > 1000){  //условие по задаче
        WorthyWorkers.push(currentWorker.name); //добавим в новый массив элемент соответствующий условию
      } 
    }

  return WorthyWorkers; //вернули значение нового массива
}

console.log(getWorthyWorkers(workers)); // вывели в консоль новый массив