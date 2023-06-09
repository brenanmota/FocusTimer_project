// DOM
// Document object Model
const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonFireplace = document.querySelector('.fireplace')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut 


function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)


    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

// Event-driven
// imperative programming
// callback 

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
  resetControls()
  resetTimer()
})

buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
})

buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSet.addEventListener('click', function () {
  let newMinutes = prompt('How many minutes?') 
  if (!newMinutes) {
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.add('buttonSelect') 
  buttonRain.classList.remove('buttonSelect') 
  buttonCafeteria.classList.remove('buttonSelect') 
  buttonFireplace.classList.remove('buttonSelect') 
})
buttonRain.addEventListener('click', function() {
  buttonRain.classList.add('buttonSelect') 
  buttonForest.classList.remove('buttonSelect') 
  buttonCafeteria.classList.remove('buttonSelect') 
  buttonFireplace.classList.remove('buttonSelect') 
})
buttonCafeteria.addEventListener('click', function() {
  buttonCafeteria.classList.add('buttonSelect') 
  buttonRain.classList.remove('buttonSelect') 
  buttonForest.classList.remove('buttonSelect') 
  buttonFireplace.classList.remove('buttonSelect') 
})
buttonFireplace.addEventListener('click', function() {
  buttonFireplace.classList.add('buttonSelect') 
  buttonRain.classList.remove('buttonSelect') 
  buttonCafeteria.classList.remove('buttonSelect') 
  buttonForest.classList.remove('buttonSelect') 
})





