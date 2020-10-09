let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  fetch("http://localhost:3000/toys")
  .then(function(res){
    return res.json()
  })
  .then(cardDatas => {
    let i;
    for(i=0; i< cardDatas.length; i++){
      
      let divCard = document.createElement('div')
      divCard.classList.add('card')
      divCard.innHTML = cardDatas[i]
      console.log(divCard.innHTML)
      //let toyCollection = document.querySelector('#toy-collection')
      //toyCollection.append(divCard)
      

    }
    
  })
  
    

  


});
