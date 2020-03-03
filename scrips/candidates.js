function toggleVisibility(id) {
	toggleText(id);
	flipCard(id);
}

const toggleText = id => {
	let elem = document.getElementById("desc" + id);

	for (let i = 1; i < 15; i++) {
		if (i != id) {
			let reset_element           = document.getElementById("desc" + i);
			reset_element.style.display = 'none';
		}
	}

	elem.style.display = elem.style.display === 'none' ? '' : 'none';
};

const flipCard = id => {
	for (let i = 1; i < 15; i++) {
		if (i != id) {
			document.getElementById("card" + i).classList.remove("selected");
		}
	}
	let elem = document.getElementById("card" + id);

	if (elem.classList.contains("selected")) {
		elem.classList.remove("selected");
	}
	else {
		elem.classList.add("selected");
	}
};
