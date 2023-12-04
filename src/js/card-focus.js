const cards = document.querySelectorAll(".payment-grid__card")

cards.forEach(card => {
  card.addEventListener("click", function () {
    cards.forEach(c => {
      c.classList.remove("payment-card--focused")
    })

    this.classList.add("payment-card--focused")
  })
})
