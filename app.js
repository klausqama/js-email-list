function email() {
	axios
		.get(
			'https://flynn.boolean.careers/exercises/api/random/mail'
		)
		.then((res) => {
			// console.log('qui è arrivata la risposta', res.data)
			console.log(res)
			console.log(res.data)

			const email = res.data.response
			console.log(email)
		})
		.catch((err) => {
			console.log('qui ci finiamo se qualcosa è andato storto', err)
			// qui abbiamo accesso all'errore che ha generato la chiamata
		})
}
// ciclo le email random
for (let i = 0; i < 10; i++) {
    email()
    const emailElement = document.querySelector('.email-list');
    emailElement.innerHTML = email;
}

