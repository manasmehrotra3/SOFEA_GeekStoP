define(['Views/LoginView', 'Models/User'], function (LoginView, User) {

    function start() {
        LoginView.render();
		bindEvents();
    }

	function bindEvents() {
        document.getElementById('register').addEventListener('click', function () {
            var users = JSON.parse(localStorage.users);
			var userName = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var address = document.getElementById('add').value;
			var city = document.getElementById('city').value;
			var state = document.getElementById('state').value;
			var zip = document.getElementById('zip').value;
            users.push(new User(userName,email,address,city,state,zip));
            localStorage.users = JSON.stringify(users);
			window.location.hash = '#product';
        }, false);
    }
	
    return {
        start: start
    };
});