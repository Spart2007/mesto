const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close-button");
const profileEditButtonElement = document.querySelector(".profile__edit");

const togglePopupVisibilyty = () => {
    popupElement.classList.toggle("popup_open");
}
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
