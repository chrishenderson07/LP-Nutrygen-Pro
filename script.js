const accordion = document.querySelectorAll('.contentBx')

accordion.forEach((accordion) => {
	accordion.onclick = () => {
		accordion.classList.toggle('active')
	}
})
