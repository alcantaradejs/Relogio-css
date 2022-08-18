function updateClockTime() {
    const time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes() 
    let seconds = time.getSeconds()
    
    hours = hours > 9 ? hours : "0"+hours
    minutes = minutes > 9 ? minutes : "0"+minutes
    seconds = seconds > 9 ? seconds : "0"+seconds
    
    const display = document.querySelector(".display")
    display.innerText = `${hours}:${minutes}:${seconds}`
}

setInterval(updateClockTime, 999)