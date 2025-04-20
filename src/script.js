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
}
  
function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">
        ${cityTime.format("MMMM	Do YYYY")}
        </div>
      </div>
      <div class="time">
      ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>
    `;
}
  
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);