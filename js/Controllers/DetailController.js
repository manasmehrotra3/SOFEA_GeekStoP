define(['Views/DetailView', 'Models/Product'], function (DetailView, Product) {

    function start() {
		var products = JSON.parse(localStorage.products);
         var id = localStorage.id;
		 var desc = localStorage.description;
		 var price = localStorage.price;
		 products.push(new Product(id,desc,price));
         localStorage.products = JSON.stringify(products);
         DetailView.render({ products: products });
		 bindEvents();	
    }
	
	function bindEvents() {
		document.getElementById('addCart').addEventListener('click', function () {
				window.location.hash = '#cart';
			}, false);
		
		document.getElementById('buyNow').addEventListener('click', function () {
				window.location.hash = '#cart';
			}, false);
		}
	
    return {
        start: start
    };
});