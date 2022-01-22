window.onload = main;

//Viewport
let vpWidth;
let vpHeight;

let damage = 2;
let extraDamage = 4;

let short = document.getElementById('short');
let normal = document.getElementById('normal');
let long = document.getElementById('long');

let result = document.getElementById('result');
let resultWinner = document.getElementById('resultWinner');

let blueRect = document.getElementById('blueRect');
let redRect = document.getElementById('redRect');

//On load
function main() {
	//Get viewport
	let viewportWidth = document.documentElement.clientWidth;
	let viewportHeight = document.documentElement.clientHeight;

	//Add viewport at global
	vpWidth = viewportWidth;
	vpHeight = viewportHeight;

	document.getElementById('resultWinner').style.lineHeight = viewportHeight + 'px';

	//Random position for all dots
	let changeBlueX = Math.floor(Math.floor(Math.random() * (vpWidth - 50 + 1)) / 50) * 50;
	let changeBlueY = Math.floor(Math.floor(Math.random() * (vpHeight - 50 + 1)) / 50) * 50;
	document.getElementById('blueDot').style.margin = changeBlueY + 'px ' + changeBlueX + 'px';

	let changeRedX = Math.floor(Math.floor(Math.random() * (vpWidth - 50 + 1)) / 50) * 50;
	let changeRedY = Math.floor(Math.floor(Math.random() * (vpHeight - 50 + 1)) / 50) * 50;
	document.getElementById('redDot').style.margin = changeRedY + 'px ' + changeRedX + 'px';

	let changeBlueRectX = Math.floor(Math.floor(Math.random() * (vpWidth - 50 + 1)) / 50) * 50;
	let changeBlueRectY = Math.floor(Math.floor(Math.random() * (vpHeight - 50 + 1)) / 50) * 50;
	document.getElementById('blueRect').style.margin = changeBlueRectY + 'px ' + changeBlueRectX + 'px';

	let changeRedRectX = Math.floor(Math.floor(Math.random() * (vpWidth - 50 + 1)) / 50) * 50;
	let changeRedRectY = Math.floor(Math.floor(Math.random() * (vpHeight - 50 + 1)) / 50) * 50;
	document.getElementById('redRect').style.margin = changeRedRectY + 'px ' + changeRedRectX + 'px';
	//End random

	//Position for Health
	let bluePosition = document.getElementById('blueRect').getBoundingClientRect();
	let redPosition = document.getElementById('redRect').getBoundingClientRect();

	document.getElementById('blueHealth').style.margin = bluePosition.top - 25 + 'px ' + bluePosition.left + 'px';
	document.getElementById('redHealth').style.margin = redPosition.top - 25 + 'px ' + redPosition.left + 'px';
	//End position for Health
}

//Run Extra Dot
function extraDotRun() {
	let extraDot = document.getElementById('extraDot');
	let extraDotPosition = extraDot.getBoundingClientRect();
	let changeExtraX = Math.floor(Math.floor(Math.random() * (vpWidth - 50 + 1)) / 50) * 50;
	let changeExtraY = Math.floor(Math.floor(Math.random() * (vpHeight - 50 + 1)) / 50) * 50;
	extraDot.style.margin = changeExtraY + 'px ' + changeExtraX + 'px';
	extraDot.style.visibility = 'visible';
}

//Start button
function start() {
	document.getElementById('start').style.visibility = 'hidden';
	setTimeout(extraDotRun, 30000);
}

//Game mode
function shortMode() {
	damage = 4;

	short.classList.replace('unselectMode', 'selectMode');
	normal.classList.replace('selectMode', 'unselectMode');
	long.classList.replace('selectMode', 'unselectMode');
}

function normalMode() {
	damage = 2;

	short.classList.replace('selectMode', 'unselectMode');
	normal.classList.replace('unselectMode', 'selectMode');
	long.classList.replace('selectMode', 'unselectMode');
}

function longMode() {
	damage = 1;

	short.classList.replace('selectMode', 'unselectMode');
	normal.classList.replace('selectMode', 'unselectMode');
	long.classList.replace('unselectMode', 'selectMode');
}
//End game mode

//Blue control
function moveRectB(e) {
	let cs = window.getComputedStyle(blueRect);

	let left = parseInt(cs.marginLeft);
	let top = parseInt(cs.marginTop);

	switch (e.key) {
		case 'ArrowLeft':
			if (left > 0) blueRect.style.marginLeft = left - 50 + 'px';
			break;
		case 'ArrowUp':
			if (top > 0) blueRect.style.marginTop = top - 50 + 'px';
			break;
		case 'ArrowRight':
			if (left < document.documentElement.clientWidth - 100) blueRect.style.marginLeft = left + 50 + 'px';
			break;
		case 'ArrowDown':
			if (top < document.documentElement.clientHeight - 100) blueRect.style.marginTop = top + 50 + 'px';
			break;
		case 'Home':
			if (left > 0 && top > 0) blueRect.style.marginLeft = left - 50 + 'px';
			blueRect.style.marginTop = top - 50 + 'px';
			break;
		case 'PageUp':
			if (top > 0 && left < document.documentElement.clientWidth - 100) blueRect.style.marginTop = top - 50 + 'px';
			blueRect.style.marginLeft = left + 50 + 'px';
			break;
		case 'End':
			if (left > 0 && top < document.documentElement.clientHeight - 100) blueRect.style.marginLeft = left - 50 + 'px';
			blueRect.style.marginTop = top + 50 + 'px';
			break;
		case 'PageDown':
			if (top < document.documentElement.clientHeight - 100 && left < document.documentElement.clientWidth - 100) blueRect.style.marginTop = top + 50 + 'px';
			blueRect.style.marginLeft = left + 50 + 'px';
			break;
	}
}

//Red control
function moveRectR(e) {
	let cs = window.getComputedStyle(redRect);

	let left = parseInt(cs.marginLeft);
	let top = parseInt(cs.marginTop);

	switch (e.key) {
		case 'a':
			if (left > 0) redRect.style.marginLeft = left - 50 + 'px';
			break;
		case 'w':
			if (top > 0) redRect.style.marginTop = top - 50 + 'px';
			break;
		case 'd':
			if (left < document.documentElement.clientWidth - 100) redRect.style.marginLeft = left + 50 + 'px';
			break;
		case 's':
			if (top < document.documentElement.clientHeight - 100) redRect.style.marginTop = top + 50 + 'px';
			break;
		case 'q':
			if (left > 0 && top > 0) redRect.style.marginLeft = left - 50 + 'px';
			redRect.style.marginTop = top - 50 + 'px';
			break;
		case 'e':
			if (top > 0 && left < document.documentElement.clientWidth - 100) redRect.style.marginTop = top - 50 + 'px';
			redRect.style.marginLeft = left + 50 + 'px';
			break;
		case 'z':
			if (left > 0 && top < document.documentElement.clientHeight - 100) redRect.style.marginLeft = left - 50 + 'px';
			redRect.style.marginTop = top + 50 + 'px';
			break;
		case 'c':
			if (top < document.documentElement.clientHeight - 100 && left < document.documentElement.clientWidth - 100) redRect.style.marginTop = top + 50 + 'px';
			redRect.style.marginLeft = left + 50 + 'px';
			break;
	}
}

//When Dot on dot
function check() {
	//Get positions of NPC
	let blueDotPosition = document.getElementById('blueDot').getBoundingClientRect();
	let redDotPosition = document.getElementById('redDot').getBoundingClientRect();

	//Get positions of Dots
	let bluePosition = blueRect.getBoundingClientRect();
	let redPosition = redRect.getBoundingClientRect();

	//Get position of Extra Dot
	let extraDot = document.getElementById('extraDot');
	let extraDotPosition = extraDot.getBoundingClientRect();

	//Remove Health
	let blueHealth = document.getElementById('blueHealth_stat');
	let blueHealthStat = parseInt(window.getComputedStyle(blueHealth).width);

	let redHealth = document.getElementById('redHealth_stat');
	let redHealthStat = parseInt(window.getComputedStyle(redHealth).width);

	document.getElementById('blueHealth').style.margin = bluePosition.top - 25 + 'px ' + bluePosition.left + 'px';
	document.getElementById('redHealth').style.margin = redPosition.top - 25 + 'px ' + redPosition.left + 'px';
	//End remove Health

	//Draw
	function draw() {
		result.style.visibility = 'visible';
		resultWinner.style.visibility = 'visible';
		resultWinner.style.backgroundColor = 'rgb(150, 0, 150)';
		resultWinner.style.color = 'rgb(243, 110, 2430)';
		resultWinner.style.boxShadow = '0px 0px 100px 100px rgb(200, 0, 200)';
		resultWinner.innerHTML = 'DRAW';
		setTimeout(restart, 3000);
	}

	//Blue win
	function blueWin() {
		if (redHealthStat <= damage) {
			result.style.visibility = 'visible';
			resultWinner.style.visibility = 'visible';
			resultWinner.style.backgroundColor = 'rgb(0, 0, 150)';
			resultWinner.style.color = 'rgb(108, 140, 243)';
			resultWinner.style.boxShadow = '0px 0px 100px 100px rgb(0, 0, 200)';
			resultWinner.innerHTML = 'BLUE WIN!';
			setTimeout(restart, 3000);
		}
	}

	//Red win
	function redWin() {
		if (blueHealthStat <= damage) {
			result.style.visibility = 'visible';
			resultWinner.style.visibility = 'visible';
			resultWinner.style.backgroundColor = 'rgb(150, 0, 0)';
			resultWinner.style.color = 'rgb(243, 110, 110)';
			resultWinner.style.boxShadow = '0px 0px 100px 100px rgb(200, 0, 0)';
			resultWinner.innerHTML = 'RED WIN!';
			setTimeout(restart, 3000);
		}
	}

	//Return blue shadow
	function blueShadow() {
		blueRect.style.boxShadow = '0px 0px 6px 6px rgb(0, 0, 100)';
	}

	//Return red shadow
	function redShadow() {
		redRect.style.boxShadow = '0px 0px 6px 6px rgb(100, 0, 0)';
	}

	//Merger of Dots
	if (bluePosition.left == redPosition.left && bluePosition.top == redPosition.top) {
		blueHealth.style.width = blueHealthStat - damage + 'px';
		redHealth.style.width = redHealthStat - damage + 'px';
		redRect.style.backgroundColor = 'rgb(112, 9, 180)';
		document.getElementById('redHealth').style.margin = redPosition.top + 65 + 'px ' + redPosition.left + 'px';
		if (blueHealthStat <= damage && redHealthStat <= damage) {
			setTimeout(draw, 100);
		} else {
			setTimeout(blueWin, 100);
			setTimeout(redWin, 100);
		}
	} else {
		redRect.style.backgroundColor = 'rgb(255, 0, 0)';
	}

	//Change position of check-dots
	function changePositions() {
		let changeBlueX = Math.floor(Math.floor(Math.random() * (vpWidth - 50 + 1)) / 50) * 50;
		let changeBlueY = Math.floor(Math.floor(Math.random() * (vpHeight - 50 + 1)) / 50) * 50;
		document.getElementById('blueDot').style.margin = changeBlueY + 'px ' + changeBlueX + 'px';

		let changeRedX = Math.floor(Math.floor(Math.random() * (vpWidth - 50 + 1)) / 50) * 50;
		let changeRedY = Math.floor(Math.floor(Math.random() * (vpHeight - 50 + 1)) / 50) * 50;
		document.getElementById('redDot').style.margin = changeRedY + 'px ' + changeRedX + 'px';
	}

	//Reload page
	function restart() {
		location.reload();
	}

	//Blue recovery
	if (bluePosition.top == blueDotPosition.top && bluePosition.left == blueDotPosition.left) {
		setTimeout(changePositions, 100);
		if (blueHealthStat < 48) {
			blueHealth.style.width = blueHealthStat + damage + 'px';
			blueRect.style.boxShadow = '0px 0px 12px 12px rgb(0, 100, 0)';
			setTimeout(blueShadow, 500);
		}
	}

	//Blue attack
	if (bluePosition.top == redDotPosition.top && bluePosition.left == redDotPosition.left) {
		setTimeout(changePositions, 100);
		redHealth.style.width = redHealthStat - damage + 'px';
		blueRect.style.boxShadow = '0px 0px 12px 12px rgb(100, 0, 100)';
		setTimeout(blueShadow, 500);
		setTimeout(blueWin, 100);
	}

	//Blue extra attack
	if (bluePosition.top == extraDotPosition.top && bluePosition.left == extraDotPosition.left) {
		setTimeout(changePositions, 100);
		redHealth.style.width = redHealthStat - damage * extraDamage + 'px';
		if (blueHealthStat < 48) {
			if (blueHealthStat + damage * extraDamage > 48) {
				blueHealth.style.width = blueHealthStat = 48 + 'px';
			} else {
				blueHealth.style.width = blueHealthStat + damage * extraDamage + 'px';
			}
		}
		blueRect.style.boxShadow = '0px 0px 12px 12px rgb(100, 0, 100)';
		extraDot.style.display = 'none';
		setTimeout(blueShadow, 500);
		setTimeout(blueWin, 100);
	}

	//Red recovry
	if (redPosition.top == redDotPosition.top && redPosition.left == redDotPosition.left) {
		setTimeout(changePositions, 100);
		if (redHealthStat < 48) {
			redHealth.style.width = redHealthStat + damage + 'px';
			redRect.style.boxShadow = '0px 0px 12px 12px rgb(0, 100, 0)';
			setTimeout(redShadow, 500);
		}
	}

	//Red attack
	if (redPosition.top == blueDotPosition.top && redPosition.left == blueDotPosition.left) {
		setTimeout(changePositions, 100);
		blueHealth.style.width = blueHealthStat - damage + 'px';
		redRect.style.boxShadow = '0px 0px 12px 12px rgb(100, 0, 100)';
		setTimeout(redWin, 100);
		setTimeout(redShadow, 500);
	}

	//Red extra attack
	if (redPosition.top == extraDotPosition.top && redPosition.left == extraDotPosition.left) {
		setTimeout(changePositions, 100);
		blueHealth.style.width = blueHealthStat - damage * extraDamage + 'px';
		if (redHealthStat < 48) {
			if (redHealthStat + damage * extraDamage > 48) {
				redHealth.style.width = redHealthStat = 48 + 'px';
			} else {
				redHealth.style.width = redHealthStat + damage * extraDamage + 'px';
			}
		}
		redRect.style.boxShadow = '0px 0px 12px 12px rgb(100, 0, 100)';
		extraDot.style.display = 'none';
		setTimeout(redShadow, 500);
		setTimeout(redWin, 100);
	}
}

//Event list
addEventListener('keydown', moveRectB);
addEventListener('keydown', moveRectR);
addEventListener('keydown', check);
