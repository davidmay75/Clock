setInterval(setClock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')
const datewindow = document.querySelector('[data-date-window]')

const digHour = document.querySelector('[data-dig-hour]')
const digMinute = document.querySelector('[data-dig-minute]')
const digSecond = document.querySelector('[data-dig-second]')

function setClock(){
    const currentDate = new Date()
    const date = currentDate.getUTCDate()//needs time zones
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    datewindow.innerHTML = date

    setRotation(secondhand, secondsRatio)
    setRotation(minutehand, minutesRatio)
    setRotation(hourhand, hoursRatio)

    //DIGITAL CLOCK
    
    digSecond.innerHTML = Math.floor(currentDate.getSeconds())
    digMinute.innerHTML = currentDate.getMinutes()
    digHour.innerHTML = currentDate.getHours()
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()