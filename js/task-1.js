function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  
  orderedItems.forEach(function (orderedItems) {
    totalPrice += orderedItems;
  });
  
  return totalPrice;
}
