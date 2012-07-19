define(function () {

     function render(parameters) {
        var appDiv = document.getElementById('app');

        var product = parameters.products;
		var len = (product.length)-1;
		var img = "../SOFEA_GeekStoP/style/"+product[len].id+".JPG";

        var html = '<h1>Product Detail</h1>';
		html += '<table cellspacing="0" cellpadding="0" width="900">'
		
		html += '<tr><td align="center" valign="top">'
		
		html += '<table cellspacing="0" cellpadding="0"><tr><td>';
		
		html += '<img id="image" src="'+img+'" /></td></tr>';
		
		html += '<tr><td align="center" valign="middle"><input class="button" id="addCart" type="submit" value="Add to cart" style="border-radius: 10px; height: 50px; width: 150px; background-image: #FFFFFF"/></td></tr>';
		
		html += '<tr><td align="center" valign="middle"><input class="button" type="submit" id="buyNow" value="Buy Now" style="border-radius: 10px; height: 50px; width: 150px; background-image: #FFFFFF"/>';
		
		html += '</td></tr></table>';
		
		html += '</td><td align="center" valign="top"><table width="100%" cellspacing="0" cellpadding="0"><tr><td align="center" valign="top">';
		
		html += '<b>Selected Product:</b> '+product[len].id;
		
		html += '</td></tr>';
		
		html += '<tr><td>';
		
		html += '<b>Description: </b>'+product[len].description;
		
		html += '</td></tr>';
		
		html += '<tr><td>';
		
		html += '<b>Price: Rs.</b>'+product[len].price;
		
		html += '</td></tr></table>';
		
		html += '</td></tr></table>';
		
		html +='<br /><a href="#product">Back</a>&nbsp; &nbsp;<a href="#cart">Cart</a>';
		
        appDiv.innerHTML = html;
    }

    return {
        render: render
    };
});