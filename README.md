# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Code](https://github.com/jamesaking02/sunnyside-landing-page)
- Live Site URL: [Live Site](https://jamesaking02.github.io/sunnyside-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS


### What I learned

Thanks to [@legend-sabbir](https://www.frontendmentor.io/profile/legend-sabbir) I learned how to make the header change to a fixed position when the user scrolls.

I used the following code below:


```js
const header = document.querySelector("header")
const headerContainer = header.querySelector(".header-container")

const headerIo = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      headerContainer.classList.remove("active")
    } else {
      headerContainer.classList.add("active")
    }
  })
})
```

### Useful resources

- [getCSSscan](https://getcssscan.com/css-box-shadow-examples) - This page contains a bunch of beautiful box shadow presets.
- [css-tricks](https://css-tricks.com/snippets/css/css-triangle/) - This is useful to anyone who doesn't know how to make a triangle in CSS.

## Author

- Frontend Mentor - [@jamesaking02](https://www.frontendmentor.io/profile/jamesaking02)


## Acknowledgments

I would like to thank [@legend-sabbir](https://www.frontendmentor.io/profile/legend-sabbir). I referenced their solution whenever I didn't understand how something worked. Specifically for the wonderful menu button animation style, and the fixed header idea!
