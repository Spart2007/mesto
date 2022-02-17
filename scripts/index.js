// Код для открытия и закрытия popup
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const profileEditButtonElement = document.querySelector(".profile__edit");

const openPopup = () => {
    popupElement.classList.add("popup_open");

}
const closePopup = () => {
    popupElement.classList.remove("popup_open");

}
profileEditButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);

const closePopupAfterClickOverlay = (event) => {
    console.log(event.target, event.curentTarget);
    if (event.target !== event.curentTarget) {
        return;
    }
    else {
        closePopup();
    }
}

popupCloseButtonElement.addEventListener('click', closePopupAfterClickOverlay);

// Ниже код для обработки события отправка формы
const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");
const nameInput = formElement.querySelector(".form_type_name");
const jobInput = formElement.querySelector(".form_type_profession");
const formSaveButton = formElement.querySelector(".form__save-button");

const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const formSubmitHandler = (evt) => {
    evt.preventDefault();//отменяет стандартную отправку формы

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    
    closePopup();

};

formInput.addEventListener('submit', formSubmitHandler);
formSaveButton.addEventListener('click', formSubmitHandler);
