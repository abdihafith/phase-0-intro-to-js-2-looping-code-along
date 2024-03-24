// Code your solutions in this file
function writeCards(names = ["Ada", "Brendan", "Ali"]) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  function countDown(startingNumber) {
      for (let i = startingNumber; i >=0; i--){
          console.log(i);
      }
  }