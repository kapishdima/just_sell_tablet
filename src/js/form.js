document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("paymentForm")
  const formFields = document.querySelectorAll(".formField")
  const submitButton = document.getElementById("submitButton")

  if (form && submitButton) {
    const fieldsArray = Array.from(formFields)

    fieldsArray.forEach(function (field) {
      field.addEventListener("input", function () {
        let allFieldsFilled = true
        fieldsArray.forEach(function (field) {
          if (field.value.trim() === "") {
            allFieldsFilled = false
          }
        })

        if (allFieldsFilled) {
          submitButton.classList.add("active")
        } else {
          submitButton.classList.remove("active")
        }
      })
    })

    form.addEventListener("submit", function (event) {
      event.preventDefault()
    })
  } else {
    console.error("Form or submit button not found")
  }
})
