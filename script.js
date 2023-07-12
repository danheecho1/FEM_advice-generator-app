const number = document.querySelector(".viewport__card__header__id");
const quote = document.querySelector(".viewport__card__advice");
const button = document.querySelector(".viewport__card__button");

function getAdvice() {
	fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})
		.then((response) => response.json())
		.then((data) => {
			number.innerHTML = "  #  " + data["slip"]["id"];
			quote.innerHTML = '"' + data["slip"]["advice"] + '"';
		});
}

button.addEventListener("click", () => {
	getAdvice();
})

/* 
THIS IS CHAT GPT'S VERSION OF REFACTORED CODE

const numberElement = document.querySelector(".viewport__card__header__id");
const quoteElement = document.querySelector(".viewport__card__advice");

async function getAdvice() {
	try {
		const response = await fetch("https://api.adviceslip.com/advice");
		const data = await response.json();
		numberElement.innerHTML = `  #  ${data.slip.id}`;
		quoteElement.innerHTML = `"${data.slip.advice}"`;
	} catch (error) {
		console.error(error);
	}
}
*/
