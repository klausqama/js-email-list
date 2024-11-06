const emailList = document.querySelector('.email-list')

axios
for (let index = 0; index < 10; index++) {
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
			emails.push(email)

			emailList.innerHTML += ` <li> ${email} </li> `
		})
		.catch((err) => {
			console.log('qui ci finiamo se qualcosa è andato storto', err)
			// qui abbiamo accesso all'errore che ha generato la chiamata
		})
}