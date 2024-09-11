let homeScore = Number(document.getElementById("home-score").textContent);
let guestScore = Number(document.getElementById("guest-score").textContent);

function add_one() {
	homeScore += 1;
	document.getElementById("home-score").textContent = homeScore;
}

function add_two() {
	homeScore += 1;
	document.getElementById("home-score").textContent = homeScore;
}
function add_three() {
	homeScore += 1;
	document.getElementById("home-score").textContent = homeScore;
}

function add_1() {
	guestScore += 1;
	document.getElementById("guest-score").textContent = guestScore;
}
function add_2() {
	guestScore += 2;
	document.getElementById("guest-score").textContent = guestScore;
}
function add_3() {
	guestScore += 3;
	document.getElementById("guest-score").textContent = guestScore;
}
