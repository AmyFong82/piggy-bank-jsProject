const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`


document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("button[name=login]");
  loginBtn.addEventListener("click", loginUser);
})

function loginUser(){
	const username = document.querySelector("#username").value
	const password = document.querySelector("#password").value
	const data = {username: username, password: password}
	// fetch(BASE_URL+'/login', {
	fetch("http://localhost:3000/login", {
		method: 'POST',
		headers: {
				"Content-Type": "application/json",
		    	"Accept": "application/json",
				},
		body: JSON.stringify(data)
	})
	.then(response => {
	    localStorage.setItem("loggedIn", true);
	  })

	// fetch('http://localhost:3000/users/1', {
	// 	credentials: 'include'
	// })
 //  .then(response => response.json())
 //  .then(data => console.log(data));

	// fetch("http://localhost:3000/users/1", {
	// 	headers: {"X-CSRF-Token": getCookie("CSRF-TOKEN")}
	// })
	// .then(res => res.json())
	// .then(response => {
 //    	localStorage.setItem("loggedIn", true);
	// })
	// fetch("http://localhost:3000/users/1")
	// .then(response => response.json())
	// .then(user => {
	// 	const p = document.createElement("p")
	// 	p.innerHTML = user.username
	// 	const appName = document.querySelector("#appname")
	// 	appName.append(p)        
 //    });
}

// function displayUsername(){
// 	fetch(USERS_URL + `/${id}`)
// 	.then(resp => resp.json())
// 	.then(user => {
// 		document.cookie = "username = User1"
// 		const p = document.createElement("p")
// 		p.innerHTML = `${user.username}`
// 		const appName = document.querySelector("#appname")
// 		appName.append(currentUser)        
//     });
// }