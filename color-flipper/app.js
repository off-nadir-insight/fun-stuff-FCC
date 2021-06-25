const btn = document.getElementById('btn')
const colorDisplay = document.getElementById('colorId')

const colorArray = ['red', 'green', 'blue']


function getRandomColor(arr) {
  const randNum = Math.floor(Math.random() * arr.length)
  return arr[randNum]
}

btn.addEventListener('click', () => {
  const newColor = getRandomColor(colorArray)
  document.body.style.backgroundColor = newColor
  colorDisplay.textContent = newColor
})