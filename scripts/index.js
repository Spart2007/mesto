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

// Код для открытия и закрытия popup
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupCloseProfileButton = popupProfile.querySelector(".popup__close-button");
const popupCloseCardButton = popupCard.querySelector(".popup__close-button");

const profileEditButton = document.querySelector(".profile__edit");
const cardEditButton = document.querySelector(".profile__add");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const formElement = document.querySelector(".form");
const nameInput = formElement.querySelector(".form__input_type_name");
const jobInput = formElement.querySelector(".form__input_type_profession");
const titleInput = formElement.querySelector(".form__input_type_title")
const linkInput = formElement.querySelector(".form__input_type_link")

const openPopup = (popupName) => {
    popupName.classList.add("popup_open");

    profileTitle.value = nameInput.textContent;
    profileSubtitle.value = jobInput.textContent;
}

const closePopup = (popupName) => {
    popupName.classList.remove("popup_open");
}

/*addButton.addEventListener('click', () => { openPopup(popupPhoto); });
cardEditButton.addEventListener("click", openPopup)
popupCloseButton.addEventListener("click", closePopup);*/

profileEditButton.addEventListener('click', () => {
    openPopup(popupProfile); 
    });

cardEditButton.addEventListener('click',() => {
    openPopup(popupCard);
    });

popupCloseProfileButton.addEventListener('click', () => {
    closePopup(popupProfile);
    });

popupCloseCardButton.addEventListener('click', () => {
    closePopup(popupCard);
    });


// Ниже код для обработки события отправка формы 
const formSubmitHandler = (evt) => {
    evt.preventDefault(); //отменяет стандартную отправку формы 
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
};
formElement.addEventListener('submit', formSubmitHandler);

//Сохранение изменений при нажатии кнопки popup "Сохранить. Так тоже работает)" 
// const formSaveButton = formElement.querySelector(".form__save-button"); 
//formSaveButton.addEventListener('click', formSubmitHandler); 

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
