function writeCards(namesArray, eventName) {
    let messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
      messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return messagesArray;
  }
  function countDown() {
    let countDown = 0;
    while(countDown<11) {
        console.log(countDown++)
    }
  }
  
