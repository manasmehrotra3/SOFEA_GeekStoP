define(function () {

    function render() {
        var appDiv = document.getElementById('app');
        appDiv.innerHTML = '<h1>Welcome to GeekStop</h1><fieldset><table hspace="200px"><tr><th>Registration Page</th></tr><tr><td><label>Title:</label></td><td><input type="text" id="title" placeholder="Mr/Ms/Mrs" required="true" /></td></tr><tr><td><label>Name:</label></td><td><input type="text" id="name" placeholder="Enter Name" required="true" /></td></tr><tr><td><label>Email:</label></td><td><input type="text" id="email" placeholder="Enter Email" required="true"/></td></tr><tr><td><label>Address:</label></td><td><input type="text" id="add" placeholder="Enter Address" required="true" /></td></tr><tr><td><label>City</label></td><td><input type="text" id="city" placeholder="Enter City" required="true" /></td></tr><tr><td><label>State</label></td><td><input type="text" id="state" placeholder="Enter State" required="true" /></td></tr><tr><td><label>Zip Code</label></td><td><input type="text" id="zip" placeholder="Enter ZIP Code" required="true" /></td></tr><tr><td></td><td><input type="submit" id="register" value="&nbsp;Submit&nbsp;" /></td></tr></table></fieldset>';
    }

    return {
        render: render
    };
});