// initialCards.slice(-6).forEach((item) => {
//   const liEl = document.createElement('li')
//   liEl.classList.add('element')
//   liEl.innerHTML = `
//      <button type="button" class="element__delite-button "></button>
//      <img src="${item.link}" alt="${item.name}" class="element__mask-group">
//      <div class="element__row">
//        <h2 class="element__text">${item.name}</h2>
//        <button class="element__like-button" type="button"></button>
//     </div>
//   `
//   cardContainer.appendChild(liEl)
// })





// const createCard = (item) => {
  //   const card = newCard(item, templateElements);
  //   return card.generateCard();
  // };



  // const data = {};
  // data.name = titleInput.value;
  // data.link = linkInput.value;



  /*
const closePopupAfterClickOverlay = (event) => { 
    console.log(event.target, event.curentTarget); 
    if (event.target !== event.curentTarget) { 
        return; 
    }
    else { 
        closePopup(); 
    } 
} 
popupCloseButtonElement.addEventListener('click', closePopupAfterClickOverlay)
*/


// const cardSubmitHandler = (evt) => {
//   evt.preventDefault(); //отменяет стандартную отправку формы 

//   const data = {};
//   data.name = titleInput.value;
//   data.link = linkInput.value;

//   const newCard = createCard(data);

//   closePopup();
// };
