function fetchWeather()
{
const apikey="7729ca5af93ba76a49b6a63912df2334";
var city=document.getElementById("city").value;
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
fetch(url).then((response)=>{return response.json()}).then(data=>{
   fetching(data);
}).catch(err=>console.log(err))
function fetching(d){
    document.write("<table border='1'>");
    document.write("<tr><td>Temperature</td><td>Max temperature</td><td>Min temperature</td>")
    document.write(`<tr><td>${d.main.temp}</td><td>${d.main.temp_max}</td><td>${d.main.temp_min}</td></table>`)
}
}
