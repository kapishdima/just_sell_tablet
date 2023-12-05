//popup visibility

const cartIcon = document.querySelector(".cart__icon")
const cartPopup = document.querySelector(".cart-popup")
const cancelBtn = document.querySelector(".cart-popup__buttons--cancel")
const closeBtn = document.querySelector(".cart-popup-top__close")

//input field
const minusButton = document.querySelector(".cart-popup-item-info-options-functional__button--minus")
const plusButton = document.querySelector(".cart-popup-item-info-options-functional__button--plus")
const inputField = document.querySelector(".cart-popup-item-info-options-functional__input")

//popup visibility

function openPopup() {
  cartPopup.style.display = "flex"
}

function closePopup() {
  cartPopup.style.display = "none"
}

cartIcon.addEventListener("click", openPopup)
cancelBtn.addEventListener("click", closePopup)
closeBtn.addEventListener("click", closePopup)

//input field
function decreaseValue() {
  let value = parseInt(inputField.value)
  if (value > 1) {
    inputField.value = value - 1
  }
}

function increaseValue() {
  let value = parseInt(inputField.value)
  if (value !== 0) {
    inputField.value = value + 1
  }
}

minusButton.addEventListener("click", decreaseValue)
plusButton.addEventListener("click", increaseValue)
