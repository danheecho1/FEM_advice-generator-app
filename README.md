# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

## Built with

- HTML
- CSS
- JS
- Mobile-first workflow

## What I learned

- This project was pretty straightforward with the use of API. I used fetch with two then's, but ChatGPT recommends using async function with await as well as try/catch **to handle errors**. Typically, async/await performs better especially when handling a large number of tasks. One of the drawbacks of async/await is that it uses more memory as the code tries to handle multiple tasks at once. Not that it matters for this project since the code is extremely simple, but fetch/then doesn't seem to be a bad choice here. 
- Another thing that ChatGPT pointed out is how my variable names are not very specific, and I agree completely. I named my variables 'number' and 'quote' which represent the ID number of the advice and the advice itself; I should have named them 'adviceIdNumber' and 'advice' instead. 