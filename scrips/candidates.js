function toggleVisibility(id) {
	let elem = document.getElementById("desc" + id);

	for (let i = 1; i < 15; i++) {
		if (i !== id) {
			let reset_element           = document.getElementById("desc" + i);
			reset_element.style.display = 'none';
		}
	}

	elem.style.display = elem.style.display === 'none' ? '' : 'none';
}
