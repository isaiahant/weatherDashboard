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


document.getElementById('search').addEventListener('click', function () {
  event.preventDefault()
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
          let date = newDate(unixTimeStamp * 1000)
          let html = `<div class="card-body">
            <p id="city">${city}</p>
            <p id="temperature">${current.temp} F°</p>
            <p id="Humidity">${current.humidity}%</p>
            <p id="wind">${wind_speed}mph</p>
            <p id="UV"> <span class="uvi uvi-${getUVIndexRange(current.uvi)}">${current.uvi}</span></p>
            </div>`
         document.getElementById('currentWeather').innerHTML = html
         html = ''
        })
    })
    .catch(Error => console.error(Error));
})


