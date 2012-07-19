require(['Models/User','Models/Product','Models/Cart','Router'], function (User, Product, Cart, Router) {

    var users = [new User()];

    localStorage.users = JSON.stringify(users);
	
	var products = [new Product()];

    localStorage.products = JSON.stringify(products);
	
	var cart = [new Cart()];

    localStorage.cart = JSON.stringify(cart);

    Router.startRouting();
    
});