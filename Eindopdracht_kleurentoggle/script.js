//VARIABELEN

const paarsButton = document.querySelector(".paars-background");
const homeButton = document.querySelector(".home-background");
const blauwpaarsButton = document.querySelector(".blauwpaars-background");
const magentaButton = document.querySelector(".magenta-background");
const violetButton = document.querySelector(".violet-background");

const background = document.querySelector("#body-id");

const hoverBurger = document.querySelector(".btn-burger-menu");
const navContent = document.querySelector(".nav-content");

//TEXT BG VARIABELEN

var titleText = document.querySelector(".title");

//color select funtions

const paarsSelect = function () {
	background.classList.add("paars-background");
	background.classList.remove("blauwpaars-background");
	background.classList.remove("home-background");
	background.classList.remove("violet-background");
	background.classList.remove("magenta-background");

	titleText.textContent = "PAARS!";
};

const homeSelect = function () {
	background.classList.add("home-background");
	background.classList.remove("paars-background");
	background.classList.remove("blauwpaars-background");
	background.classList.remove("violet-background");
	background.classList.remove("magenta-background");

	titleText.textContent = "GRIJS!";
};

const blauwpaarsSelect = function () {
	background.classList.add("blauwpaars-background");
	background.classList.remove("paars-background");
	background.classList.remove("home-background");
	background.classList.remove("violet-background");
	background.classList.remove("magenta-background");

	titleText.textContent = "BLAUWPAARS!";
};

const magentaSelect = function () {
	background.classList.remove("blauwpaars-background");
	background.classList.remove("paars-background");
	background.classList.remove("home-background");
	background.classList.remove("violet-background");
	background.classList.add("magenta-background");

	titleText.textContent = "MAGENTA!";
};

const violetSelect = function () {
	background.classList.remove("blauwpaars-background");
	background.classList.remove("paars-background");
	background.classList.remove("home-background");
	background.classList.add("violet-background");
	background.classList.remove("magenta-background");

	titleText.textContent = "VIOLET!";
};

//color select event listeners

homeButton.addEventListener("click", homeSelect);
paarsButton.addEventListener("click", paarsSelect);
blauwpaarsButton.addEventListener("click", blauwpaarsSelect);
magentaButton.addEventListener("click", magentaSelect);
violetButton.addEventListener("click", violetSelect);

// Mouse over button function

hoverBurger.onmouseover = function () {
	navContent.style.transition = "all 0.2s ease-in-out";
	navContent.style.transform = "translateX(0px)";

	navContent.onmouseover = function () {
		navContent.style.transform = "translateX(0px)";
	};
};

navContent.onmouseleave = function () {
	navContent.style.transform = "translateX(-300px)";
};

hoverBurger.onmouseleave = function () {
	navContent.style.transform = "translateX(-300px)";
};

//close on click FUNCTION

navContent.onclick = function () {
	navContent.style.transform = "translateX(-300px)";
};

//change BG by keyboard button

window.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "1":
			homeSelect();
			break;

		case "2":
			paarsSelect();
			break;

		case "3":
			blauwpaarsSelect();
			break;

		case "4":
			magentaSelect();
			break;

		case "5":
			violetSelect();
			break;
	}
});
