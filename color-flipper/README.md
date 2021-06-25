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
  - phase 1: from an array
  - phase 2: from randomized hex value
- the new random color will 
  - display its identifier in text
  - update the background color

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
- CSS Grid
- Mobile-first workflow

### What I learned

Finally looked up how to use the favicons!

```
<head>
  <link rel="icon" href="favicon.png" type="image/png">
</head>
```

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) - Practicing correct markdown for these guides
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**

*Thank you to FrontendMentor for the project template*



