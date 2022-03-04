const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// переменные и константы
// popup
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupCloseProfileButton = popupProfile.querySelector(".popup__close-button");
const popupCloseCardButton = popupCard.querySelector(".popup__close-button");
// профиль
const profileEditButton = document.querySelector(".profile__edit");
const cardEditButton = document.querySelector(".profile__add");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
// форма
const formElement = document.querySelector(".form");
//const formCard = document.queryselector(".form_type_card");
const nameInput = formElement.querySelector(".form__input_type_name");
const jobInput = formElement.querySelector(".form__input_type_profession");
const titleInput = formElement.querySelector(".form__input_type_title")
const linkInput = formElement.querySelector(".form__input_type_src")
const cardContainer = document.querySelector(".elements__list")
const formSaveButton = document.querySelector(".form__save-button")

//like-button
const likeMark = document.querySelectorAll(".element__like-button");


// init
/*
пробегаеися по initialCards
и для каждого объекта создаем новый li
в cardContainer
*/
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



function addElem (item) {
  const templateElements = document.getElementById("template");
  const clone = templateElements.content.cloneNode(true);  
  clone.querySelector('img').setAttribute('src', item.link)
  clone.querySelector('img').setAttribute('alt', item.name)
  clone.querySelector('.element__text').innerText = item.name
  clone.querySelector('.element__delete-button').addEventListener('click', () => {
    const index = initialCards.findIndex(el => el.link == item.link)
    initialCards.splice(index, 1)
    render()
    console.log(initialCards)
  })
  cardContainer.appendChild(clone)
}


function render () {
  cardContainer.innerHTML = ''
  initialCards.forEach((item) => {
    addElem(item)
  })  
}


formSaveButton.addEventListener('click', () => {
  const newObj = {
    name: '',
    link: ''
  }

  // data.name = titleInput.value;
  // data.link = linkInput.value;


  initialCards.push(newObj)
  render()
})


render()


// for (el in initialCards) {
//   cardContainer.createElement(el)
// }

// end init

//код для открытия и закрытия popup
const openPopup = (popupName) => {
  popupName.classList.add("popup_open");

  profileTitle.value = nameInput.textContent;
  profileSubtitle.value = jobInput.textContent;
}
const closePopup = (popupName) => {
  popupName.classList.remove("popup_open");
}

profileEditButton.addEventListener('click', () => {
  openPopup(popupProfile);
});

cardEditButton.addEventListener('click', () => {
  openPopup(popupCard);
});

popupCloseProfileButton.addEventListener('click', () => {
  closePopup(popupProfile);
});

popupCloseCardButton.addEventListener('click', () => {
  closePopup(popupCard);
});

// код для обработки события отправка формы 
const formSubmitHandler = (evt) => {
  evt.preventDefault(); //отменяет стандартную отправку формы 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup();
};
formElement.addEventListener('submit', formSubmitHandler);


//код добавления карточки
//template

  const createCard = (item) => {
    const card = newCard(item, templateElements);
    return card.generateCard();
  };

const cardSubmitHandler = (evt) => {
  evt.preventDefault(); //отменяет стандартную отправку формы 

  const data = {};
  data.name = titleInput.value;
  data.link = linkInput.value;

  const newCard = createCard(data);

  closePopup();
};

// createCard.addEventListener('submit', cardSubmitHandler);

/*initialCards.forEach((item) => {
	const cardElement = createCard(item);
	cardContainer.append(cardElement);
});*/






//активация лайка на карточке
for (let i = 0; i < likeMark.length; i++) {
  likeMark[i].addEventListener('click', () => {
   likeMark[i].classList.toggle('element__like-button_activated')});
};

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
popupCloseButtonElement.addEventListener('click', closePopupAfterClickOverlay)*/
