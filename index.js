function changeCity() {
  let city = prompt("What city do you live in?");
  let currentTemperature = prompt("What is your current temperature");
  let h1 = document.querySelector("h1");
  if (currentTemperature < 0) {
    h1.innerHTML = `😣 <br> Currently ${currentTemperature}° in ${city}`;
  } else {
    h1.innerHTML = `😊 <br> Currently ${currentTemperature}° in ${city}`;
  }
}

let clickButton = document.querySelector("button");
clickButton.addEventListener("click", changeCity);
