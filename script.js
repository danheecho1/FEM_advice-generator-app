function getAdvice() {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => response.json())
		.then((data) => {
			const markup = document.getElementById("advice");
			markup.innerHTML = data["slip"]["advice"];
		});
}
