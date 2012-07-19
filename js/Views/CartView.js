define(function () {

     function render(parameters) {
        var appDiv = document.getElementById('app');

        var cart = parameters.cart;
		var len = cart.length;
		
		var html ='<table width="925"><tr><th colspan="3" style="text-align: left;font-size:24px">Shopping Cart</th>'
		
		html += '<td style="text-align:right; font-size:20px"><u><a href="#product">ProductList</a></u></td></tr></table>';
		
		html += '<table width="950" border="1">';
		
		html += '<tr><th style="text-align: center">Product</th><th style="text-align: center">Price(in Rs.)</th></tr>';
		
		for(var i=1;i<len;i++)
		{
		  html += '<tr><td>'+cart[i].id+'</td>';
		  
		  html +='<td style="text-align: center">'+cart[i].price+'</td></tr>';
		}
		
		html +='</table>';
		
		html +='<table width="950"><tr><td colspan="3"></td>'
		
		html += '<td style="text-align:right"><input class="button" type="submit" id="buyNow" value="Buy Now" style="border-radius: 10px; height: 50px; width: 125px; background-image: #FFFFFF"/></td></tr></table>';
		
		appDiv.innerHTML = html;
    }

    return {
        render: render
    };
});