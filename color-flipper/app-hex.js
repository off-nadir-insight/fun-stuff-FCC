const btn = document.getElementById('btn')
const colorDisplay = document.getElementById('colorId')

function getRandomHexColor() {
  const randNum = Math.floor(Math.random()*16777215).toString(16)
  return `#${randNum}`
}

btn.addEventListener('click', () => {
  // const newColor = getRandomColorFromArray(colorArray)
  const newColor = getRandomHexColor()
  document.body.style.backgroundColor = newColor
  colorDisplay.textContent = newColor
  colorDisplay.style.color = newColor
})