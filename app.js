// variables
let search = document.getElementById('inputPassword2').value

let searchHistory = JSON.parse(localStorage.getItem('weatherSearchHistory'))
if (searchHistory === null) {
  searchHistory = []
}

const getUVIndexRange = (val) => {
  if (val > 8) {
    return "red"
  } else if (val > 6) {
    return "orange"
  } else if (val > 3) {
    return "yellow"
  } else {
    return "green"
  }
}

const displayWeather = (city) => {

  
  axios.get(`api.openweathermap.org/data/2.5/weather?q=${search}&appid=7405e1a609d490d0a6b23e2a2070ceea`)
  .then(res => {
    let city = res.name
    let data = res.data
    
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=7405e1a609d490d0a6b23e2a2070ceean`)
    .then(res => {
      let data = res.data
      console.log(data)
      let current = data.current
      let unixTimeStamp = current.dt
      let date = new Date(unixTimeStamp * 1000)
      let html = `<div class="card-body">
      <p id="city">${city}</p>
      <p id="temperature">${current.temp} F°</p>
      <p id="Humidity">${current.humidity}%</p>
      <p id="wind">${wind_speed}mph</p>
      <p id="UV"> <span class="uvi uvi-${getUVIndexRange(current.uvi)}">${current.uvi}</span></p>
      </div>`
      document.getElementById('currentWeather').innerHTML = html
      html = ''
      
      
      for (let i = 1; i < 6; i++) {
        current = data.daily[i]
        unixTimestamp = current.dt
        date = new Date(unixTimestamp * 1000)
        html += `<div class="col-md">
        <div class="card">
        <div class="card-body bg-primary text-light forecast">
        <h4>${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</h4>
        <img src="https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" alt="${data.current.weather[0].icon}@2x.png">
        <p>Temp: ${current.temp.max} °F</p>
        <p>Humidity: ${current.humidity}%</p>
        </div>
        </div>
        </div>`
      }
      document.getElementById('forecast').innerHTML = html
    })
    .catch(err => console.error(err);)
  })
  .catch(err => console.error(err));
})
}

const displaySearchHistory = () => {
  let list = document.getElementById('searchHistory')
  let html = ''
  let len = searchHistory.length - 1
  for (let i = len; i < array.length; i++) {
    const element = array i];
    html += `<li>
    <button type= "button" class="btn btn-outline-secondary" value="${searchHistory[i]}">${searchHistory{i}}</button>
    </li>`
  }
  list.innerHtml = html
}

displaySearchHistory()

if (searchHistory.length) {
  displayWeather(searchHistory[searchHistory.length - 1])
}

document.getElementById('delete').addEventListener('click', => {
  searchHistory[]
  
})