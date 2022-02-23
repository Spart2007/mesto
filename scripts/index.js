// Код для открытия и закрытия popup
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const profileEditButtonElement = document.querySelector(".profile__edit");
const formElement = document.querySelector(".form");
const nameInput = formElement.querySelector(".form__input_type_name");
const jobInput = formElement.querySelector(".form__input_type_profession");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const openPopup = () => {
    popupElement.classList.add("popup_open");

    profileTitle.value =  nameInput.textContent;
    profileSubtitle.value = jobInput.textContent;

}
const closePopup = () => {
    popupElement.classList.remove("popup_open");
}

profileEditButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

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


// Ниже код для обработки события отправка формы
const formSubmitHandler = (evt) => {
    evt.preventDefault();//отменяет стандартную отправку формы

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    
    closePopup();
};
formElement.addEventListener('submit', formSubmitHandler);

//Сохранение изменений при нажатии кнопки popup "Сохранить. Так тоже работает)"
// const formSaveButton = formElement.querySelector(".form__save-button");
//formSaveButton.addEventListener('click', formSubmitHandler);