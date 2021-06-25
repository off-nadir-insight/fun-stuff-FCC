const btn = document.getElementById('btn')
const colorDisplay = document.getElementById('colorId')

const colorArray = ['red', 'green', 'blue']


function getRandomColorFromArray(arr) {
  const randNum = Math.floor(Math.random() * arr.length)
  return arr[randNum]
}

btn.addEventListener('click', () => {
  const newColor = getRandomColorFromArray(colorArray)

  document.body.style.backgroundColor = newColor
  colorDisplay.textContent = newColor
  colorDisplay.style.color = newColor
})