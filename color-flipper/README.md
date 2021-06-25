# Color Flipper in Javascript!

> [Reference](https://www.freecodecamp.org/news/javascript-projects-for-beginners/#how-to-create-a-color-flipper)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

### Goals
The color flipper page will:
- have a button to randomize a new color
  - [x] phase 1: from an array
  - [x] phase 2: from randomized hex value
- the new random color will 
  - [x] display its identifier in text
  - [x] update the background color

## Considerations
- contrast behind text for reading behind any color
- button color contrast to easily find button
  - can we calculate polar opposite color value?
- nav bar to switch between chosing color from list vs completely random
  - possible to transition smoothly (e.g. don't reset the color when navigating between tabs)
    - how to store current color? pass via page parameter? store value in localStorage?

## Process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

- Finally looked up how to use the favicons!
```
<head>
  <link rel="icon" href="favicon.png" type="image/png">
</head>
```

- random hex value for colors:
```
Math.floor(Math.random()*16777215).toString(16)
```

- [storing values for a sesson](https://stackoverflow.com/questions/11609376/share-data-between-html-pages)
```
sessionStorage.getItem('label')
sessionStorage.setItem('label', 'value')
```

```
let val = sessionStorage.myValue
sessionStorage.myValue = 'value'
```

### Continued development

- explore enabling functionality to click on hex code to copy value
- change color value background to dynamically change colors to contrast random color
- refactor code to reduce duplication of pages/scripts

### Useful resources

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - Practicing correct markdown for these guides
- [w3schools CSS guides](https://www.w3schools.com/cssref/) - searching for correct CSS syntax for various stylings

## Author

Tyler Scott

## Acknowledgments

*Thank you to FrontendMentor for the project template*