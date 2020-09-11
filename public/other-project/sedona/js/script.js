var buttonFormSearch = document.querySelector(".toggle-form-search"),
	formSearch = document.querySelector(".registration-form"),
	countAdults = formSearch.querySelector("[name=count-adults]"),
	countKids = formSearch.querySelector("[name=count-kids]"),
	dateArrival = formSearch.querySelector("[name=date-arrival]"),
	dateDeparture = formSearch.querySelector("[name=date-departure]"),
	isStorageSupport = true,
	storageCountAdults = "",
	storageCountKids = "";

try {
	storageCountAdults = localStorage.getItem("countAdults");
	storageCountKids = localStorage.getItem("countKids");
} catch (error) {
	isStorageSupport = false;
}

buttonFormSearch.addEventListener("click", function (e) {
	e.preventDefault();
	formSearch.classList.toggle("registration-form--show");
});

formSearch.addEventListener("submit", function (e) {
	if (!dateArrival.value || !dateDeparture.value) {
		e.preventDefault();
		formSearch.classList.remove("registration-form--error");
		formSearch.offsetWidth = formSearch.offsetWidth;
		formSearch.classList.add("registration-form--error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("countAdults", countAdults.value);
			localStorage.setItem("countKids", countKids.value);
		}
	}
});