// No longer need to update years I've worked in programming with this
const yearsExperienceElement = document.getElementById("years-experience");
yearsExperienceElement.innerText = new Date().getFullYear() - 2020;

// Keeps the proper nav item underlined
let windowHeight = document.documentElement.clientHeight;
const sections = [...document.querySelectorAll("section[id]")];
sections.unshift(document.getElementById("header-section"));
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
	let scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - Number.parseInt(windowHeight / 4);
		const sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(`.navigation a[href*=${sectionId}]`)
				.classList.add("active");
		} else {
			document
				.querySelector(`.navigation a[href*=${sectionId}]`)
				.classList.remove("active");
		}
	});
}
navHighlighter();

// Keeps the proper about section tab underlined
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tab) {
	for (let i = 0; i < 3; i++) {
		if (tab === tabContents[i].id) {
			tabLinks[i].classList.add("active-link");
			tabContents[i].classList.add("active-tab");
		} else {
			tabLinks[i].classList.remove("active-link");
			tabContents[i].classList.remove("active-tab");
		}
	}
}

// menu actions on small screens
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const navList = document.getElementById("nav-list");

function openMenu() {
	menuButton.style.display = "none";
	closeButton.style.display = "block";
	navList.style.width = "125px";
}

function closeMenu() {
	closeButton.style.display = "none";
	menuButton.style.display = "block";
	navList.style.width = "0";
}

// Mostly for mobile switching between horizantal and vertical
window.addEventListener("resize", windowResizeCheck);

function windowResizeCheck() {
	windowHeight = document.documentElement.clientHeight;
	navHighlighter();
	if (document.documentElement.clientWidth < 650) {
		closeButton.style.display = "none";
		menuButton.style.display = "block";
		navList.style.width = "0";
	} else {
		menuButton.style.display = "none";
		closeButton.style.display = "none";
		navList.style.width = "inherit";
	}
}

// submits form information to google sheets
const scriptURL =
	"https://script.google.com/macros/s/AKfycbyGHOyVxcIrU1ii0euOt7NpmSGCTHZ4XRFzyKmu7oBLWR67yHJqSR6ioGkuCUol8LV0kA/exec";
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");
const snackbar = document.getElementById("snackbar");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	submitButton.classList.add("loading");
	submitButton.disabled = true;
	submitButton.innerHTML = "<i class='fa-solid fa-spinner fa-spin-pulse'></i>";
	for (let element of form.elements) {
		element.style.color = "gray";
	}
	fetch(scriptURL, { method: "POST", body: new FormData(form) })
		.then((response) => {
			submitResponse();
		})
		.catch((error) => {
			submitResponse(error);
		});
});

// disables the submit button and shows that the form is being submitted
function submitResponse(error = undefined) {
	submitButton.classList.remove("loading");
	submitButton.innerHTML = "Submit";
	submitButton.disabled = false;
	for (let element of form.elements) {
		element.style.color = "white";
	}
	snackbar.className = "show";

	if (error) {
		snackbar.innerText = "There was an error sending the message";
		console.error("Error", error.message);
	} else {
		form.reset();
		snackbar.innerText = "Message Sent Successfully!";
	}

	setTimeout(() => {
		snackbar.className = "";
		snackbar.innerText = "";
	}, 3000);
}
