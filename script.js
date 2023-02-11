const number = document.querySelector(".viewport__card__header__id")
const quote = document.querySelector(".viewport__card__advice");

function getAdvice() {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => {
			number.innerHTML = data["slip"]["id"];
			quote.innerHTML = '"' + data["slip"]["advice"] + '"';
		});
}
