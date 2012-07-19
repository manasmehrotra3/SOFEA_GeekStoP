define(function () {

    function User(name,email,address,city,state,zip) {
        this.name = name;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
    }

    return User;
});