define(['Views/CartView', 'Models/Cart'], function (CartView, Cart) {

   function start() {
		 var cart = JSON.parse(localStorage.cart);
         var id = localStorage.id;
		 var price = localStorage.price;
		 cart.push(new Cart(id,price));
         localStorage.cart = JSON.stringify(cart);
         CartView.render({ cart: cart });
		 bindEvents();
    }
	
	function bindEvents() {	
	document.getElementById('buyNow').addEventListener('click', function () {
				alert('Under Construction');
			}, false);
	}	
	
    return {
        start: start
    };
});