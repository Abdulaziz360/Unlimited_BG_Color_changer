

const random_color = function () {
  const hex = '0123456789ABCDEF'

  let color = '#'
  for (let i = 0; i < 6; i++) {
    console.log('loop:', i)
    const randomIndex = parseInt(Math.random() * 16)
    console.log('random', randomIndex)
    const randomHexChar = hex[randomIndex];
    console.log(randomHexChar)
    color += randomHexChar
  }
  return color
}
console.log(random_color())





let intervalId

const body_bg = document.querySelector('body')
const start = document.getElementById('btn1')
const stop_change = document.getElementById('btn2')


const startColourChange = function () {
  intervalId = setInterval(changeColor, 1000)
}

const changeColor = function () {
  body_bg.style.backgroundColor = random_color()
}
const stopColourChange = function () {
  clearInterval(intervalId)
  intervalId = null
}

start.addEventListener('click', startColourChange)
stop_change.addEventListener('click', stopColourChange)
