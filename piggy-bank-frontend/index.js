const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`


document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector("input[name=login]");
  const toyFormContainer = document.querySelector(".container");
  loginBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function loginUser(){
	const username = document.querySelector("#username")
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
				.then( => {
        for (const element of json){
          renderCards(element)
        }
    });
}