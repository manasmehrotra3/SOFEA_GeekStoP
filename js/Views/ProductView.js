define(function () {

     function render(parameters) {
        var appDiv = document.getElementById('app');

        var users = parameters.users;

        var html = '<h1>Hi '+users[1].name+',</h1>';
	    html += '<table width="900px">';
        html +=	'<tr><th colspan="6" style="font-size: 32px">Select Product</th>';
        html +=	'</tr><tr>';
        html += '<th colspan="2">Bestselling Books</th></tr><tr>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/DonotLoseYourMindLoseYourWeight.JPG" id="DonotLoseYourMindLoseYourWeight" alt="book detail" height="175" width="110"><br />';
        html += 'Don\'t Lose Your Mind, Lose Your Weight</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/The Immortals of Meluha.JPG" id="The Immortals of Meluha" alt="book detail" height="175" width="110"><br />';
        html += 'The Immortals of Meluha &nbsp; &nbsp;</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/The Secret of the Nagas.JPG" id="The Secret of the Nagas" alt="book detail" height="175" width="110"><br />';
        html += 'The Secret of the Nagas &nbsp; &nbsp;</td>';
        html +=	'<td style="text-align: center;font-size: 10px">'; 
        html += '<img src="style/Chanakya Chant.JPG" id="Chanakya Chant" alt="book detail" height="175" width="110"><br />';
        html += '&nbsp; &nbsp; Chanakya\'s Chant &nbsp; &nbsp; &nbsp; &nbsp;</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/I have a Dream.JPG" id="I have a Dream" alt="book detail" height="175" width="110"><br />';
        html += '&nbsp; &nbsp; &nbsp; &nbsp; I have a Dream &nbsp; &nbsp; &nbsp; &nbsp;</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/The Fountainhead.JPG" id="The Fountainhead" alt="book detail" height="175" width="110"><br />';
        html += '&nbsp; &nbsp;  The Fountainhead &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/Darkly Dreaming Dexter.JPG" id="Darkly Dreaming Dexter" alt="book detail" height="175" width="110"><br />';
        html += 'Darkly Dreaming Dexter &nbsp; &nbsp;</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/The Hobbit.JPG" id="The Hobbit" alt="book detail" height="175" width="110"><br />';
        html += '&nbsp; &nbsp; &nbsp; &nbsp; The Hobbit &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</td></tr>';
        html += '<tr><th colspan="4">Mobiles &amp; Mobile Accessories</th></tr>';
        html += '<tr><td style="text-align: center;font-size: 10px">';
        html += '<img src="style/Samsung Galaxy Tab 750.JPG" id="Samsung Galaxy Tab 750" alt="book detail" height="175" width="110"><br />';
        html += 'Samsung Galaxy Tab 750 &nbsp; &nbsp; &nbsp;</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/Motorola Defy (Black).JPG" id="Motorola Defy (Black)" alt="book detail" height="175" width="110"><br />';
        html += 'Motorola Defy (Black) &nbsp; &nbsp; &nbsp;';
		html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/Samsung Galaxy Note.JPG" id="Samsung Galaxy Note" alt="book detail" height="175" width="110"><br />';
        html += 'Samsung Galaxy Note &nbsp; &nbsp;N-7000';
        html += '</td><td style="text-align: center;font-size: 10px">'; 
        html += '<img src="style/Motorola RAZR XT910 (Mercury Silver).JPG" id="Motorola RAZR XT910 (Mercury Silver)" alt="book detail" height="175" width="110"><br />';
        html += 'Motorola RAZR XT910 (Mercury Silver)</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/Sony Ericsson Xperia Arc S (Black).JPG" id="Sony Ericsson Xperia Arc S (Black)" alt="book detail" height="175" width="110"><br />';
        html += 'Sony Ericsson Xperia Arc S (Black)</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/Samsung Galaxy Ace S5830 (Onyx Black).JPG" id="Samsung Galaxy Ace S5830 (Onyx Black)" alt="book detail" height="175" width="110"><br />';
        html += 'Samsung Galaxy Ace S5830 (Onyx Black)';
        html += '</td><td style="text-align: center;font-size: 10px">';
        html += '<img src="style/HTC Wildfire S (Dark Grey).JPG" id="HTC Wildfire S (Dark Grey)" alt="book detail" height="175" width="110"><br />';
        html += 'HTC Wildfire S (Dark Grey)</td>';
        html += '<td style="text-align: center;font-size: 10px">';
        html += '<img src="style/Micromax Superfone Lite A75 (Charcoal Black).JPG" id="Micromax Superfone Lite A75 (Charcoal Black)" alt="book detail" height="175" width="110"><br />';
        html += 'Micromax Superfone Lite A75 (Charcoal Black)</td></tr></table>'; 

        appDiv.innerHTML = html;
    }

    return {
        render: render
    };
});