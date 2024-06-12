//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const existingButton= document.getElementById('existing');

	if(localStorage.getItem('username')&&localStorage.getItem('password')){
		existingButton.style.display = 'block';
	}

	document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
        
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            existingButton.style.display = 'block';
        } else {
            existingButton.style.display = 'none';
        }
    });

    existingButton.addEventListener('click', function() {
        const username = localStorage.getItem('username');
        alert(`Logged in as ${username}`);
    });
})