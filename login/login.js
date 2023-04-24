const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	fetch('login-data.json')
		.then(response => response.json())
		.then(data => {
			const storedUsername = data.username;
			const storedPassword = data.password;

			if (username === storedUsername && password === storedPassword) {
				alert('Login successful!');
			} else {
				alert('Login failed. Please try again.');
			}
		})
		.catch(error => console.error(error));
});
