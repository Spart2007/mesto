const initialCards = [
  {
    title: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
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
// const formCard = document.queryselector(".form_type_card");
const nameInput = formElement.querySelector(".form__input_type_name");
const jobInput = formElement.querySelector(".form__input_type_profession");
const titleInput = document.querySelector(".form__input_type_title");
const linkInput = document.querySelector(".form__input_type_src");
const cardContainer = document.querySelector(".elements__list");
const formCreateButton = document.querySelector(".form__create-button");


// код для открытия и закрытия popup
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

// код для обработки события отправка формы профиля
const formSubmitHandler = (evt) => {
  evt.preventDefault(); //отменяет стандартную отправку формы 
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;

  closePopup();
};

formElement.addEventListener('submit', formSubmitHandler);
const render = () => {
  cardContainer.innerHTML = ''
  initialCards.forEach((item) => {
    addElem(item)
  })
};

function addElem(item) {
  const templateElements = document.getElementById("template");
  const clone = templateElements.content.cloneNode(true);
  clone.querySelector('img').setAttribute('src', item.link)
  clone.querySelector('img').setAttribute('alt', item.title)
  clone.querySelector('.element__text').innerText = item.title
  clone.querySelector('.element__delete-button').addEventListener('click', () => {
    const index = initialCards.findIndex(el => el.link == item.link)
    initialCards.splice(index, 1)
    render()
    console.log(initialCards)
  })
  cardContainer.appendChild(clone)
}
render();

formCreateButton.addEventListener('click', () => {
  let newObject =  {}
  newObject.title = titleInput.value;
  newObject.link = linkInput.value;
  initialCards.unshift(newObject);
  render();
});
render();



//активация лайка на карточке
//like-button
const likeMark = document.querySelectorAll(".element__like-button");
for (let i = 0; i < likeMark.length; i++) {
  likeMark[i].addEventListener('click', () => {
    likeMark[i].classList.toggle('element__like-button_activated')
  });
};
