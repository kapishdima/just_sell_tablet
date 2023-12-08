document.addEventListener("DOMContentLoaded", function () {
  const formFields = document.querySelectorAll(".formField")
  const paymentCards = document.querySelectorAll(".payment-grid__card")
  const submitButton = document.getElementById("chosePaymentSumbitButton")

  function checkFields() {
    let allFieldsFilled = true
    formFields.forEach(function (field) {
      if (field.value.trim() === "") {
        allFieldsFilled = false
      }
    })

    let paymentSelected = false
    paymentCards.forEach(function (card) {
      if (card.classList.contains("payment-card--focused")) {
        paymentSelected = true
      }
    })

    if (allFieldsFilled && paymentSelected && submitButton) {
      submitButton.style.display = "block"
    } else if (submitButton) {
      submitButton.style.display = "none"
    }
  }

  if (submitButton) {
    submitButton.style.display = "none"
  }

  formFields.forEach(function (field) {
    field.addEventListener("input", checkFields)
  })

  paymentCards.forEach(function (card) {
    card.addEventListener("click", checkFields)
  })
})
