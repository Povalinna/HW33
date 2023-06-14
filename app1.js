async function logJSONData() {
  let answerData = {};
  let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&appid=2deaf2a2c50142d4cd22676b3542612c");
  answerData = await response.json();
  console.log(answerData);
  
  let city = answerData["name"];
  let temp = answerData["main"]["temp"];
  let pressure = answerData["main"]["pressure"];
  let descr = answerData["weather"][0]["description"];
  let hum = answerData["main"]["humidity"];
  let speed = answerData["wind"]["speed"];
  let deg = answerData["wind"]["deg"];
  let allResult = `Mісто` + ` ` + city + `</br>` +
                  'температура повітря' + ' ' + temp + `град` + `</br>` +
                   `атмосферний тиск` + ` ` + pressure + 'гект-паск' + `</br>` +
                   `опис` + ` ` + descr + `</br>` +
                   `вологість` + ` ` + hum + '%' + `</br>` +
                   `швидкість вітру` + ` ` + speed + 'м/сек' + `</br>` +
                   `напрямок вітру` + ` ` + deg + 'град' + `</br>`;

  let block = document.querySelector(`#container`);
  let img = document.createElement(`img`);
  img.src = "http://openweathermap.org/img/w/04d.png";
  block.appendChild(img);
  
  let result = document.createElement(`div`);
  result.setAttribute("id", "result");
  result.innerHTML = allResult;
  document.body.append(result);
}
logJSONData();



