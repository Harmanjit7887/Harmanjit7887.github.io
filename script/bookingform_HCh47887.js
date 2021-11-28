
	function Validate() {
		var checkin = document.forms["BookForm"]["checkin"];
                var checkout = document.forms["BookForm"]["checkout"];
		var emailaddress = document.forms["BookForm"]["emailaddress"];
		var mobilenumber = document.forms["BookForm"]["mobilenumber"];
		var roomselection = document.forms["BookForm"]["roomselection"];
		var roomtype = document.forms["BookForm"]["roomtype"];
                var persons = document.forms["BookForm"]["persons"];

		if (checkin.value == "") {
			window.alert("Please enter checkin date.");
			checkin.focus();
			return false;
		}

		if (checkout.value == "") {
			window.alert("Please enter checkout date.");
			checkout.focus();
			return false;
		}

		if (emailaddress.value == "") {
			window.alert(
			"Please enter a valid e-mail address.");
			emailaddress.focus();
			return false;
		}

		if (mobilenumber.value == "") {
			window.alert(
			"Please enter your mobile number.");
			mobilenumber.focus();
			return false;
		}

		

		if (roomselection.selectedIndex < 1) {
			alert("Please select room.");
			roomselection.focus();
			return false;
		}
                
                if (roomtype.selectedIndex < 1) {
			alert("Please select room type.");
			roomtype.focus();
			return false;
		}
                
                if (persons.selectedIndex < 1) {
			alert("Please select persons.");
			persons.focus();
			return false;
		}
                

		return true;
	}
