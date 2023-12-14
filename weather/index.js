var inputvalue = document.querySelector( '#cityinput' )
var btn =  document.querySelector( '#add' )
var city  = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector( '#wind' )
apkey = 'a8363e242f9f9bcd14b269f217eeb777'
function convertion(val)
{
    return(val - 273).toFixed(3)
}

btn.addEventListener( 'click',  function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?'+inputvalue.value+'&appid='+apkey)
    .then ( res  => res.json())

    .then( data  =>  
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp' ]
            var windspeed = data['wind']['speed']


            city.innerHTML = `Weather of <span>${nameval}</span>`
            temp.innerHTML = `Temerature: <span>${ convertion(temperature)} c</span>`
            description.innerHTML = `sky condition: <span>${descrip}</span>`
            wind.innerHTML= `wind speed: <span>${windspeed} km/h</span>`
        })

        .catch(err => alert('you have entered wrong city name'))
})


