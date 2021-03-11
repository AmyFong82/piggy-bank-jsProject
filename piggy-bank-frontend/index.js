const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`


document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("button[name=login]");
  loginBtn.addEventListener("click", loginUser);
})

function loginUser(){
	const username = document.querySelector("#username").value
	const password = document.querySelector("#password")
	data = {username: username, password: password}
		fetch(BASE_URL+'/login', {
			method: 'POST',
				headers: {
						"Content-Type": "application/json",
			    		"Accept": "application/json"
					},
					body: JSON.stringify(data)
				})
		.then(resp => resp.json())
		.then(user => {
			const currentUser = document.createElement("p")
			currentUser.innerHTML = `${user.username}`
			const appName = document.querySelector("#appname")
			appName.append(currentUser)        
    });
}