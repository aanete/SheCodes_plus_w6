 
 function formatDate() {
 let date = now.getDate();
  console.log(date);

  let days = [
   "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
 ]
 
 
  let day = now.getDay();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  console.log(hours);
  console.log(minutes);

 }
 
 function showCity(event) {
   event.preventDefault();
   let cityInput = document.querySelector("#city-input");
   console.log(cityInput.value);
   alert(`${cityInput.value}`);

 }
 
 let cityForm = document.querySelector("#city-form");
 cityForm.addEventListener("submit", showCity);