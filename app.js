// variables
let search = document.getElementById('inputPassword2').value

document.getElementById('search').addEventListener('click', function () {
  event.preventDefault()
  axios.get(`api.openweathermap.org/data/2.5/weather?q=${search}&appid=7405e1a609d490d0a6b23e2a2070ceea`)
    .then(res =>{
      let city = res.name
      let data = res.data 

      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=7405e1a609d490d0a6b23e2a2070ceean`)
      .then(res => {
        let data = res.data
        console.log(data)
        let current = data.current
        let 
      })
    })
    .catch(err => console.error(err);
})



api.openweathermap.org/data/2.5/forecast?q={input}&appid={ API key }

