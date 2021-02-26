function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
  numbers.forEach(function (numbers) {
    if (numbers > value) {
        filteredNumbers.push(numbers);
      }
  })
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }
