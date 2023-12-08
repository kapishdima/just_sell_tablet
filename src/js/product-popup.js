document.addEventListener("DOMContentLoaded", function () {
  const productItem = document.querySelector(".product-list__item")

  const productPopup = document.querySelector(".product-popup")

  function displayProductPopup() {
    productPopup.style.display = "flex"
  }

  productItem.addEventListener("click", displayProductPopup)

  const closePopupButton = document.querySelector(".product-popup-top__close")
  closePopupButton.addEventListener("click", function () {
    productPopup.style.display = "none"
  })
})
