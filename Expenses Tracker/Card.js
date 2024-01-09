function submitCard() {
  // Get values from the form
  var cardNumber = document.getElementById('cardNumber').value;
  var expiryDate = document.getElementById('expiryDate').value;
  var cvvCode = document.getElementById('cvvCode').value;
  var nameOnCard = document.getElementById('nameOnCard').value;

  // Create an object with the card details
  var cardDetails = {
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvvCode: cvvCode,
      nameOnCard: nameOnCard
  };

  // Get existing card details from localStorage or initialize an empty array
  var existingCards = JSON.parse(localStorage.getItem('cardDetails')) || [];
