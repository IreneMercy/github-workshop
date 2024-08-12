function changeCity() {
  let city = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");
  let emoji = document.querySelector(".sunny-cloudy");
  let current = document.querySelector("h2");

  if (temperature <= 0) {
    emoji.innerHTML = "😣";
    current.innerHTML = "Currently " + temperature + "°" + " in " + city;
  } else {
    emoji.innerHTML = "😊";
    current.innerHTML = "Currently " + temperature + "°" + " in " + city;
  }
}

let cityTemp = document.querySelector("button");
cityTemp.addEventListener("click", changeCity);
