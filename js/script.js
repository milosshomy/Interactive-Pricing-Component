// Getting elements

const price = document.querySelector(".price");
const pageViews = document.querySelectorAll(".text")[1];
const date = document.querySelectorAll(".text")[2];
const slider = document.querySelector(".slider");
const toggleBtn = document.querySelector(".toggle-btn");
const circle = document.querySelector(".circle");
const primaryBtn = document.querySelector(".primary-btn");
const discount = document.querySelector(".discount");
const progressBar = document.querySelector(".progress-bar");
let sliderValue;

//Changing date and button style on click

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  if (toggleBtn.classList.contains("active")) {
    updateCashOnChange();
    date.textContent = "/ year";
  } else {
    date.textContent = "/ month";
    calculateMonthlyMoney(sliderValue);
  }
});

//Change discount text on tablet screen size

window.addEventListener("resize", (e) => {
  const width = e.currentTarget.innerWidth;
  if (width <= 768) {
    discount.textContent = "25%";
  } else {
    discount.textContent = "25% discount";
  }
});

//Updating cash on button click

function updateCashOnChange() {
  if (sliderValue === "0") {
    price.textContent = "$0.00";
  } else if (sliderValue === "20") {
    price.textContent = "$2.00";
  } else if (sliderValue === "40") {
    price.textContent = "$4.00";
  } else if (sliderValue === "60") {
    price.textContent = "$8.00";
  } else if (sliderValue === "80") {
    price.textContent = "$16.00";
  } else if (sliderValue === "100") {
    price.textContent = "$32.00";
  }
}

// Changing progressBar width

function changeProgressBarWidth(sliderValue) {
  progressBar.style.width = sliderValue + "%";
}

//Calculate monthly money

function calculateMonthlyMoney(sliderValue) {
  if (sliderValue === "0") {
    pageViews.textContent = "PAGEVIEWS";
    price.textContent = "$0.00";
  } else if (sliderValue === "20") {
    pageViews.textContent = "1K PAGEVIEWS";
    price.textContent = "$4.00";
  } else if (sliderValue === "40") {
    pageViews.textContent = "10K PAGEVIEWS";
    price.textContent = "$8.00";
  } else if (sliderValue === "60") {
    pageViews.textContent = "100K PAGEVIEWS";
    price.textContent = "$16.00";
  } else if (sliderValue === "80") {
    pageViews.textContent = "1M PAGEVIEWS";
    price.textContent = "$32.00";
  } else if (sliderValue === "100") {
    pageViews.textContent = "10M PAGEVIEWS";
    price.textContent = "$64.00";
  }
}

//Calculate yearly money

function calculateYearlyMoney(sliderValue) {
  if (toggleBtn.classList.contains("active") && sliderValue === "0") {
    price.textContent = "$0.00";
  } else if (toggleBtn.classList.contains("active") && sliderValue === "20") {
    price.textContent = "$2.00";
  } else if (toggleBtn.classList.contains("active") && sliderValue === "40") {
    price.textContent = "$4.00";
  } else if (toggleBtn.classList.contains("active") && sliderValue === "60") {
    price.textContent = "$8.00";
  } else if (toggleBtn.classList.contains("active") && sliderValue === "80") {
    price.textContent = "$16.00";
  } else if (toggleBtn.classList.contains("active") && sliderValue === "100") {
    price.textContent = "$32.00";
  }
}

//Calling functions on slider input event

slider.addEventListener("input", (e) => {
  sliderValue = e.target.value;
  changeProgressBarWidth(sliderValue);
  calculateMonthlyMoney(sliderValue);
  calculateYearlyMoney(sliderValue);
});
