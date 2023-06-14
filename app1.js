async function logJSONData() {

  let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&units=metric&appid=2deaf2a2c50142d4cd22676b3542612c");
  let answerData = await response.text();
  console.log(answerData);
  let result = document.createElement(`div`);
  result.setAttribute("id", "result");
  result.innerHTML = answerData;

  document.body.append(result);
}
logJSONData();


