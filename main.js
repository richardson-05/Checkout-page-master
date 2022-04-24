// Products price
const backbag_value = 54.99
const shoes_value = 74.99

const btn_less = document.querySelectorAll(".btn_less")
const btn_more = document.querySelectorAll(".btn_more")
const quantity = document.querySelectorAll(".quantity")

const country = document.querySelector("#country")
const countries = ["Argentina", "Dominican Reoublic", "Puerto Rico", "Venezuela", "Mexico", "Spain", "Italy", "Salvador", "Chile", "China"].sort()

function loadCountries() {
  for (let i = 0; i < countries.length; i++) {
    const newOption = document.createElement("option")
    newOption.textContent = countries[i]
    newOption.setAttribute("value", countries[i])
    country.appendChild(newOption)
  }
}

function load() {
  loadCountries()

  quantity[0].textContent = 0 // Article #1
  quantity[1].textContent = 0 // Article #2
}
load()

const money = document.querySelectorAll(".value")
let total = 0, shipping = 0
function calculateTotal(totalArticle1, totalArticle2) {
  total = totalArticle1 + totalArticle2 // Sub total
  shipping = (total * 10) / 100 // 10% of the total
  total = total + shipping // total to pay
  money[0].textContent = "$ " + shipping.toFixed(2) // shipping value
  money[1].textContent = "$ " + total.toFixed(2) // total value
}

let value1 = parseFloat(quantity[0].textContent)
let value2 = parseFloat(quantity[1].textContent)
btn_more.forEach((btn, i)  => {
  btn.addEventListener("click", () => {
    if (i == 0) {
      if (value1 < 10) { quantity[i].textContent = value1 += 1 }
    }
    if (i == 1) {
      if (value2 < 10) { quantity[i].textContent = value2 += 1 }
    }
    calculateTotal((value1 * backbag_value), (value2 * shoes_value))
  })
})

btn_less.forEach((btn, i)  => {
  btn.addEventListener("click", () => {
    if (i == 0) {
      if (value1 > 0) { quantity[i].textContent = value1 -= 1 }
    }
    if (i == 1) {
      if (value2 > 0) { quantity[i].textContent = value2 -= 1 }
    }
    calculateTotal((value1 * backbag_value), (value2 * shoes_value))
  })
})

const btn_continue = document.querySelector("#btn_continue")
btn_continue.addEventListener("click", (e) => {
  e.preventDefault()
  alert("This form is not validated but thank you for your test.")
})