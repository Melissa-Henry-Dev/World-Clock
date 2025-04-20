function updateTime() {
    let johannesburgElement = document.querySelector("#johannesburg");
    if (johannesburgElement) {
      let johannesburgDateElement = johannesburgElement.querySelector(".date");
      let johannesburgTimeElement = johannesburgElement.querySelector(".time");
      let johannesburgTime = moment().tz("Africa/Johannesburg");
  
      johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM	Do YYYY");
      johannesburgTimeElement.innerHTML = johannesburgTime.format("h:mm:ss [<small>]A[</small>]");
    }

    let rotterdamElement = document.querySelector("#rotterdam");
    if (rotterdamElement) {
      let rotterdamDateElement = rotterdamElement.querySelector(".date");
      let rotterdamTimeElement = rotterdamElement.querySelector(".time");
      let rotterdamTime = moment().tz("Europe/Rotterdam");
  
      rotterdamDateElement.innerHTML = rotterdamTime.format("MMMM	Do YYYY");
      rotterdamTimeElement.innerHTML = rotterdamTime.format("h:mm:ss [<small>]A[</small>]");
    }

    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");

        tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
    }
}
  
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (!cityTimeZone) return;

    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let selectedCityElement = document.querySelector("#selected-city");

    selectedCityElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    <div>
      <a href="/" style="text-decoration: none;">Back to homepage</a>
    </div>
    `;
}
  
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);